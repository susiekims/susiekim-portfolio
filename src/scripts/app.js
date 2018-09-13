
const lights = () => {
    $('#lights').on('click', () => {
        console.log('click');
        $('body').toggleClass('dark');
        $('.intro').toggleClass('dark-border-bottom');
        $('.work-wrapper').toggleClass('dark-background');
        $('.work-wrapper h2').toggleClass('dark');
        $('.dev').toggleClass('dark-border-right');
        $('.work').toggleClass('dark-border-bottom');
        if ($('body').hasClass('dark')) {
            $('#light-emoji').text('🌚');
        } else {
            $('#light-emoji').text('🌞');
        }
    })
}

const changeEmoji = () => {
    $( document ).on( "mousemove",() => {
        $('#emoji').text(data.emojis[Math.floor(Math.random() * data.emojis.length)]);
    });
}


$(function() {
    console.log('hey');
    changeEmoji();
    lights();
});