const changeEmoji = () => {
    $( document ).on( "mousemove",(e) => {
        $('#emoji').text(data.emojis[Math.floor(Math.random() * data.emojis.length)]);
    });
}

const showSection = (element) => {
    if ( $(window).width() > 600) {
        $(`.${element}`).on('click', function() {
            $(`section`).css({
                width: '10vw',
                height: '100vh'
            });
            $(`.${element}`).css({width: '80vw'});
            $(`section .content`).toggle(false);
            $(`.${element} .content`).toggle(true);
            $(`section h1`).toggle(true);
            $(`.${element} h1`).toggle(false);
        })
    } else {
        $(`.${element}`).on('click', function() {
            $(`section`).css({
                width: '100vw',
                height: '33.333vh'
        });
            $(`section`).css({height: '10vh'});
            $(`.${element}`).css({height: '80vh'});
            $(`section .content`).toggle(false);
            $(`.${element} .content`).toggle(true);
            $(`section h1`).toggle(true);
            $(`.${element} h1`).toggle(false);
        });
    }
}

const displayDev = () => {
    data.code.forEach((piece)=> {
        const newPiece = 
        `<div class="piece">
            <div class="piece-intro">
                <div class="piece-text">
                    <h2>${piece.title}</h2>
                    <p>${piece.desc}</p>
                    <a class="link" href="${piece.live}">View Live</a>
                    <a class="link" href="${piece.github}">View on Gitub</a>
                    <div class="stack-roles">
                        <div class="column">
                            <h3>STACK</h3>
                            <ul class="stack">
                            ${
                                piece.stack.map(skill => {
                                    return `<li>${skill}</li>`
                                }).join('')
                            }
                            </ul>
                        </div>
                        <div class="column">
                            <h3>ROLES</h3>
                            <ul class="roles">
                            ${
                                piece.roles.map(role => {
                                    return `<li>${role}</li>`
                                }).join('')
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="${piece.img[0]}"/>
            </div>
            <div class="images"></div>
        </div>`;
        $('.developer .content').append(newPiece);
    })
}

const displayDesign = () => {
    data.design.forEach((piece)=> {
        const newPiece = 
        `<div class="piece">
            <div class="piece-intro">
                <div class="piece-text">
                    <h2>${piece.title}</h2>
                    <p>${piece.desc}</p>
                    <div class="stack-roles">
                        <div class="column">
                            <h3>STACK</h3>
                            <ul class="stack">
                            ${
                                piece.stack.map(skill => {
                                    return `<li>${skill}</li>`
                                }).join('')
                            }
                            </ul>
                        </div>
                        <div class="column">
                            <h3>ROLES</h3>
                            <ul class="roles">
                            ${
                                piece.roles.map(role => {
                                    return `<li>${role}</li>`
                                }).join('')
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="${piece.img[0]}"/>
            </div>
            <div class="images">
                ${
                    piece.img.slice(1).map(image => {
                        return `<img src="${image}" />`
                    }).join('')
                }
            </div>
        </div>`;
        $('.designer .content').append(newPiece);
    })
}

const events = () => {
    document.addEventListener('keyup', function(e){
        if(e.keyCode == 27)
          window.location.reload();
    })

    $(window).on('resize', function() {
        $('.content').toggle(false);
        $('.wrapper h1').toggle(true);
        let windowWidth = $(window).width();
        
        if (windowWidth < 600) {
            $('section').css({
                width: '100%',
                height: '33.333vh'
            });
            showSection('developer')
            showSection('susie')
            showSection('designer')
        } else {
            $('section').css({
                width: '33.333%',
                height: '100vh'
            });
            showSection('developer')
            showSection('susie')
            showSection('designer')
        }
    })
}

const init = () => {
    events();
    changeEmoji();
    showSection('developer')
    showSection('susie')
    showSection('designer')
    displayDev(); 
    displayDesign();
}


$(function() {
    init();
});