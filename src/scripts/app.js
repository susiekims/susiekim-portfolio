// random favicon on refresh
// random favicon on mousemove
const changeEmoji = () => {
    $('.favicon').attr('href', data.favicons[Math.floor(Math.random() * data.favicons.length)]);
    $( document ).on( "mousemove", () => {
        $('#emoji').text(data.emojis[Math.floor(Math.random() * data.emojis.length)]);
    });
}

// toggle dark mode/light mode if checkbox is checked
const lights = () => {
    $('input:checkbox').change(function() {
        if ($('input:checkbox').prop('checked')) {
            $('body').addClass('dark');
            if ( $(window).width() > 600) {
                $('.susie').addClass('dark-border');
            } else {
                $('.susie').addClass('dark-border-mobile');
            }
        } 
        if ($('input:checkbox').prop('checked') === false ) {
            $('body').removeClass('dark');
            if ( $(window).width() > 600) {
                $('.susie').removeClass('dark-border');
            } else {
                $('.susie').removeClass('dark-border-mobile');
            }
        }
    }); 
}

const showSection = (element) => {
    if ( $(window).width() > 600) {
        $(`.${element}`).on('click', function(e) {
            e.stopPropagation();
            $(`section`).css({
                width: '10vw',
                height: '100vh'
            });
            $(`.${element}`).css({width: '80vw'});

            $('section').removeClass('open');
            $('section').addClass('closed');

            $(`.${element}`).removeClass('closed');
            $(`.${element}`).addClass('open'); 

            $(`section .content`).toggle(false);
            $(`.${element} .content`).toggle(true);
            $(`section h1`).toggle(true);

            if (element === 'developer') {
                $('section h1').css({
                    transform: 'translate(-50%, -50%) rotate(90deg)',
                })
            } else if (element === 'designer') {
                $('section h1').css({
                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                })
            } else {
                $('.developer h1').css({
                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                })
                $('.designer h1').css({
                    transform: 'translate(-50%, -50%) rotate(90deg)',
                })
            }

            $(`.${element} h1`).toggle(false);
        })
    } else {
        $(`.${element}`).on('click', function(e) {
            e.stopPropagation();
            $(`section`).css({
                width: '100vw',
                height: '33.333vh'
            });
            $('section h1').css({
                transform: 'translate(-50%, -50%) rotate(0deg)',
            })
            $(`section`).css({height: '10vh'});
            $(`.${element}`).css({height: '80vh'});
            $(`section .content`).toggle(false);
            $(`.${element} .content`).toggle(true);
            $(`section h1`).toggle(true);
            $(`.${element} h1`).toggle(false);
        });
    }
}

const hover = () => {
    $('section').hover(
        function() {
            if ( $(window).width() > 600 && $('section').hasClass('open') === false ) {
                $(this).css({width: '38%'});
            }
        },
        function() {
            if ( $(window).width() > 600 && $('section').hasClass('open') === false ) {
                $(this).css({width: '33.333%'});
            } 
        }
    )
}


const closeViews = () => {
    $('.close').on('click', function(e) {
        e.stopPropagation();
        if ( $(window).width() > 600) {
            $('.content').toggle(false);
            $('section').css({
                width: '33.33%',
            });
            $(`section h1`).toggle(true);
            $('section').removeClass('open');
            $('section').removeClass('closed');
            $('section h1').css({
                transform: 'translate(-50%, -50%) rotate(0deg)'
            })
        } else {
            $('.content').toggle(false);
            $('section').css({
                height: '33.33vh',
            });
            $(`section h1`).toggle(true);
        }
    })
}

const displayIcons = () => {
    data.icons.forEach(icon => {
        const iconHTML = `<li><img class="icon" src="../public/assets/icons/${icon}"/></li>`;
        $('.skills-list').append(iconHTML);
    })
}

const displayDev = () => {
    data.code.forEach((piece)=> {
        const newPiece = 
        `<div class="piece scroll">
            <div class="piece-intro">
                <div class="piece-text">
                    <h2>${piece.title}</h2>
                    <p>${piece.desc}</p>
                    <div class="stack-roles">
                        <div class="column">
                            <h4>STACK</h4>
                            <ul class="stack">
                            ${
                                piece.stack.map(skill => {
                                    return `<li>${skill}</li>`
                                }).join('')
                            }
                            </ul>
                        </div>
                        <div class="column">
                            <h4>ROLES</h4>
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
                <img src="../public/assets/dev/${piece.img[0]}"/>
            </div>
            <div class="images">
                ${
                    piece.img.slice(1).map(image => {
                        return `<img src="../public/assets/dev/${image}" />`
                    }).join('')
                }
            </div>
            <div class="links">
                <a class="link" href="${piece.live}">View Live</a>
                <a class="link" href="${piece.github}">View on Gitub</a>
            </div>
        </div>`;
        $('.developer .content').append(newPiece);
    })
}

const displayDesign = () => {
    data.design.forEach((piece)=> {
        const newPiece = 
        `<div class="piece scroll">
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
                            <h4>ROLES</h4>
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
        $('section h1').css({
            transform: 'translate(-50%, -50%) rotate(0deg)'
        })
        $('.content').toggle(false);
        $('.wrapper h1').toggle(true);
        let windowWidth = $(window).width();
        
        //mobile resize
        if (windowWidth < 600) {
            $('section').css({
                width: '100%',
                height: '33.333vh'
            });
            hover();
            showSection('developer')
            showSection('susie')
            showSection('designer')
            if ( $('body').hasClass('dark') ) {
                $('.susie').removeClass('dark-border');
                $('.susie').addClass('dark-border-mobile');
            } 
        // desktop resize
        } else {
            $('section').css({
                width: '33.333%',
                height: '100vh'
            });
            hover();
            showSection('developer')
            showSection('susie')
            showSection('designer')

            if ( $('body').hasClass('dark') ) {
                $('.susie').removeClass('dark-border-mobile');
                $('.susie').addClass('dark-border');
            } 
        }
    })
}

const init = () => {
    hover();
    events();
    changeEmoji();
    closeViews();
    showSection('developer')
    showSection('susie')
    showSection('designer')
    displayDev(); 
    displayDesign();
    displayIcons();
    lights();
}


$(function() {
    init();
});