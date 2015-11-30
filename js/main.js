$(function() {
    console.log('doc ready');
    $('[data-state] .header__heading, [data-state] .section__heading').click(function() {
        var $this = $(this).parent();
        if($this.data('state') === 'inactive') {
            $('[data-state]').data('state','inactive').children('.section__content, .header__content').slideUp();
            $this.data('state','active').children('.section__content, .header__content').slideDown();
            goToByScroll($this);
        } else
            $('[data-state]').data('state','inactive').children('.section__content, .header__content').slideUp();
    });
});

$(window).load(function() {
    console.log('window loaded');
    $(':not([data-state]) [data-lazysrc]').each(function() {
        console.log('loading image');
        var $this = $(this);
        $this.attr('src', $this.data('lazysrc')).removeAttr('data-lazysrc');
    });

    $('#news_revealer').click(function() {
        $('#news_hidden').slideToggle();
        return false;
    });

    $('#slideshow').bjqs({
        'height' : 320,
        'width' : 640,
        'responsive' : true,
        'randomstart' : true,
        'showcontrols' : false,
        'showmarkers' : false,
        'hoverpause' : false,
        'animtype' : 'fade',
        'automatic' : true,
        'animspeed' : 5000
    });

    $('#gallery').siblings('.section__heading').one('click', function(){
        $.when($(this).siblings('#gallery').bjqs({
            'height' : 580,
            'width' : 840,
            'responsive' : true,
            'randomstart' : false,
            'showcontrols' : false,
            'showmarkers' : true,
            'hoverpause' : false,
            'animtype' : 'slide',
            'automatic' : false
        })).done($('.gallery-slides').each(function() {
            $(this).bjqs({
                'height' : 560,
                'width' : 800,
                'responsive' : true,
                'randomstart' : true,
                'showcontrols' : true,
                'showmarkers' : false,
                'hoverpause' : true,
                'animtype' : 'fade',
                'automatic' : true,
                'animspeed' : 3000
            });
        }));
    });
});

function goToByScroll($anchor) {
    $('html,body').animate({scrollTop: $anchor.offset().top},'slow');
}