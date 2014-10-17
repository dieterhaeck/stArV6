"use strict";

var block_array = new Array();
block_array.push('content_1');
block_array.push('content_2');
block_array.push('content_3');
block_array.push('content_4');
block_array.push('content_5');
block_array.push('content_6');
block_array.push('content_7');
block_array.push('content_8');

var extendBlock = function(id, aLocal) {
    for(var i=0;i<aLocal.length;i++) {
        if(aLocal[i]!=id && $('#'+aLocal[i]).hasClass('active')) {
            $('#'+aLocal[i]).removeClass('active');
            $('#'+aLocal[i]).slideUp('slow');
        }
    }
    $('#'+id).toggleClass('active');
    $('#'+id).slideToggle('slow', function() {
        if($('#'+id).hasClass('active')) {
            goToByScroll(id);
            //window.location.hash = "panel" + id.substring(8);
        }
    });
}

function goToByScroll(id) {
    $('html,body').animate({scrollTop: $("#anchor"+id.substring(8)).offset().top},'slow');
}

$(window).load(function() {
    console.log('window loaded');
    $('img.lazy-img').each(function() {
        console.log('loading image');
        $(this).attr('src', $(this).attr('data-src'));
        $(this).removeAttr('data-src');
    });
    $('#news_revealer').click(function() {
        $('#news_hidden').slideToggle();
        return false;
    });
});