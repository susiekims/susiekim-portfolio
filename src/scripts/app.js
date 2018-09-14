

const changeEmoji = () => {
    $( document ).on( "mousemove",(e) => {
        $('#emoji').text(data.emojis[Math.floor(Math.random() * data.emojis.length)]);
    });
}

const showSection = (element) => {
    if ( $(window).width() > 600) {
        $(`.${element}`).on('click', function() {
            $(`section`).css({width: '10vw'});
            $(`.${element}`).css({width: '80vw'});
        })
    } else {
        $(`.${element}`).on('click', function() {
            $(`section`).css({width: '100vw'});
            $(`section`).css({height: '10vh'});
            $(`.${element}`).css({height: '80vh'});
        })
    }
}


// const changeLayout = (section, notThisSection, notThisEither) => {
//     let element = $(`.${section}`);
//     let element2 = $(`.${notThisSection}`);
//     let element3 = $(`.${notThisEither}`);
//     element.mouseover(function(e) {
//         console.log(e.target);
//         element.animate({width: '35%'}, 100);
//         element2.animate({width: '32.5%'}, 100);
//         element3.animate({width: '32.5%'}, 100);
//     });
//     element.mouseleave(function() {
//         element.animate({width: `${100/3}%`}, 100);
//         element2.animate({width: `${100/3}%`}, 100);
//         element3.animate({width: `${100/3}%`}, 100);
//     });
// }

// $(window).on('resize', () => {
//     if ( $(window).width() > 600 ) {
//         changeLayout('designer', 'developer', 'susie');
//         changeLayout('developer', 'designer', 'susie');
//     } else {
//         $('section').css('width', '100%');
//     }
// })


$(function() {
    console.log('hey');
    changeEmoji();
    showSection('developer')
    showSection('susie')
    showSection('designer')
    $(window).on('resize', function() {
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
});