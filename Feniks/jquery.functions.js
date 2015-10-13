var gototop_icon = "img/strzalka.png";
var gototop_run = false;
jQuery(window).scroll(function(){ //scrool
         
    var scrollTop = jQuery(window).scrollTop();
 
    if ( scrollTop>200 ) { // pokaz
        if ( ! gototop_run ) {
        gototop_run = true;
        jQuery('body').append('<a id="scroolTOP" href="#"><img src="'+gototop_icon+'" class="gototop_icon_i" alt="TOP"></a>');
        jQuery('#scroolTOP').fadeTo('quick', 0.2);
        jQuery('#scroolTOP').mouseover(function(){  jQuery(this).fadeTo(100, 0.6);  })
            .mouseout(function(){  jQuery(this).fadeTo(100, 0.2);  });
        jQuery('#scroolTOP').click(function(){
            jQuery("html, body").animate({ 'scrollTop': 0 }, 500);
            return false;
        });
        }
    } else { // ukryj
        if ( jQuery('#scroolTOP').length>0 ) jQuery('#scroolTOP').fadeOut('quick').remove();
        gototop_run = false;
    }
}); //scrool