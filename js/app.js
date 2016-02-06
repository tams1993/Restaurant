/**
 * Created by MR.T on 1/7/2016.
 */
jQuery.scrollSpeed(100, 800);

$("#css3-animated-example").collapse({
    accordion: true,
    open: function() {
    this.addClass("open");
    this.css({ height: this.children().outerHeight() });
    },
    close: function() {
    this.css({ height: "0px" });
    this.removeClass("open");
    }
    });

//$('.expandme').expandme();

$(document).ready(function(){

    $('#image').hide();
    $('.expandme').expandme({
        onBeforeExpand: function(settings){

            $('#image').fadeIn();


        },

        onBeforeCollapse: function(){

            $('#image').fadeOut();

        }
    });
});

/*

$(document).ready(function(){
    $('.expandme').expandme({
        onBeforeCollapse: function(settings){
            var articleTop = $(this).parents('.article').offset().top;
            $('body').animate({scrollTop: articleTop}, settings.speed);
        }
    });
});
*/
