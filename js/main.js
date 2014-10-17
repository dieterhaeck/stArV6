$(function() {
    console.log('doc ready');
    $('h1').click(function() {
        var $this = $(this);
        var $sibling =  $this.siblings('.section__content, .header__content');
        if(!$sibling.hasClass('active')) {
            $('.section__content.active').removeClass('active');
            $sibling.addClass('active');
            goToByScroll($this);
        } else
            $('.section__content.active').removeClass('active');
    });
});

$(window).load(function() {
    console.log('window loaded');
    $('img.lazy-img').each(function() {
        console.log('loading image');
        var $this = $(this);
        $this.attr('src', $this.attr('data-src')).removeAttr('data-src');
    });

    $('#news_revealer').click(function() {
        $('#news_hidden').slideToggle();
        return false;
    });
});

function goToByScroll($anchor) {
    $('html,body').animate({scrollTop: $anchor.offset().top},'slow');
}