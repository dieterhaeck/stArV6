$(function() {
    console.log('doc ready');
    $('.section__heading, .header__heading').click(function() {
        var $this = $(this);
        var $sibling =  $this.siblings('[data-state]');
        if($sibling.data('state') === 'inactive') {
            $('[data-state]').data('state','inactive').slideUp();
            $sibling.data('state','active').slideDown();
            goToByScroll($this);
        } else
            $('[data-state]').data('state','inactive').slideUp();
    });
});

$(window).load(function() {
    console.log('window loaded');
    $('[data-lazysrc]').each(function() {
        console.log('loading image');
        var $this = $(this);
        $this.attr('src', $this.data('lazysrc')).removeAttr('data-lazysrc');
    });

    $('#news_revealer').click(function() {
        $('#news_hidden').slideToggle();
        return false;
    });
});

function goToByScroll($anchor) {
    $('html,body').animate({scrollTop: $anchor.offset().top},'slow');
}