var gototop_icon = "img/arrow.png";
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-69140421-1', 'auto');
ga('send', 'pageview');
