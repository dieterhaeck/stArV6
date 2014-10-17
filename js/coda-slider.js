// when the DOM is ready...
$(document).ready(function () {

    var $panels_passief = $('#slider_passief .scrollContainer > div');
    var $container_passief = $('#slider_passief .scrollContainer');
    var $panels_real = $('#slider_real .scrollContainer > div');
    var $container_real = $('#slider_real .scrollContainer');
    var $panels = $('.slider .scrollContainer > div');
    var $container = $('.slider .scrollContainer');

    // if false, we'll float all the panels left and fix the width 
    // of the container
    var horizontal = true;

    // float the panels left if we're going horizontal
    if (horizontal) {
        $panels.css({
            'float' : 'left',
            'position' : 'relative' // IE fix to ensure overflow is hidden
        });

        // calculate a new width for the container (so it holds all panels)
        // $container.css('width', $panels[0].offsetWidth * $panels.length);
        $container_passief.css('width', 800 * $panels_passief.length);
        $container_real.css('width', 800 * $panels_real.length);
    }

    // collect the scroll object, at the same time apply the hidden overflow
    // to remove the default scrollbars that will appear
    var $scroll = $('.slider .scroll').css('overflow', 'hidden');
    var $scroll_passief = $('#slider_passief .scroll').css('overflow', 'hidden');
    var $scroll_real = $('#slider_real .scroll').css('overflow', 'hidden');

    // apply our left + right buttons
    $scroll
        .before('<img class="scrollButtons left" src="images/arrow_left.jpg" />')
        .after('<img class="scrollButtons right" src="images/arrow_right.jpg" />');

    // handle nav selection
    function selectNav() {
        $(this)
            .parents('.navigation:first')
                .find('a')
                    .removeClass('selected')
                .end()
            .end()
            .addClass('selected');
    }

    $('.slider .navigation').find('a').click(selectNav);

    // go find the navigation link that has this target and select the nav
    function trigger(data) {
        var el = $('.slider .navigation').find('a[href$="' + data.id + '"]').get(0);
        selectNav.call(el);
    }

    if (window.location.hash) {
        trigger({ id : window.location.hash.substr(1) });
    } else {
        $('#slider_passief .navigation a:first').click();
        $('#slider_real .navigation a:first').click();
    }

    // offset is used to move to *exactly* the right place, since I'm using
    // padding on my example, I need to subtract the amount of padding to
    // the offset.  Try removing this to get a good idea of the effect
    var offset = parseInt((horizontal ? 
        $container.css('paddingTop') : 
        $container.css('paddingLeft')) 
        || 0) * -1;


    var scrollOptions_passief = {
        target: $scroll_passief, // the element that has the overflow

        // can be a selector which will be relative to the target
        items: $panels_passief,

        navigation: '.navigation a',

        // selectors are NOT relative to document, i.e. make sure they're unique
        prev: 'img.left', 
        next: 'img.right',

        // allow the scroll effect to run both directions
        axis: 'xy',

        onAfter: trigger, // our final callback

        offset: offset,

        // duration of the sliding effect
        duration: 500,

        // easing - can be used with the easing plugin: 
        // http://gsgd.co.uk/sandbox/jquery/easing/
        easing: 'swing'
    };
	
	var scrollOptions_real = {
        target: $scroll_real, // the element that has the overflow

        // can be a selector which will be relative to the target
        items: $panels_real,

        navigation: '.navigation a',

        // selectors are NOT relative to document, i.e. make sure they're unique
        prev: 'img.left', 
        next: 'img.right',

        // allow the scroll effect to run both directions
        axis: 'xy',

        onAfter: trigger, // our final callback

        offset: offset,

        // duration of the sliding effect
        duration: 500,

        // easing - can be used with the easing plugin: 
        // http://gsgd.co.uk/sandbox/jquery/easing/
        easing: 'swing'
    };

    // apply serialScroll to the slider - we chose this plugin because it 
    // supports// the indexed next and previous scroll along with hooking 
    // in to our navigation.
    $('#slider_passief').serialScroll(scrollOptions_passief);
    $('#slider_real').serialScroll(scrollOptions_real);

    // now apply localScroll to hook any other arbitrary links to trigger 
    // the effect
    $.localScroll(scrollOptions_passief);
    $.localScroll(scrollOptions_real);

    // finally, if the URL has a hash, move the slider in to position, 
    // setting the duration to 1 because I don't want it to scroll in the
    // very first page load.  We don't always need this, but it ensures
    // the positioning is absolutely spot on when the pages loads.
    scrollOptions_passief.duration = 1;
    $.localScroll.hash(scrollOptions_passief);
    scrollOptions_real.duration = 1;
    $.localScroll.hash(scrollOptions_real);

});