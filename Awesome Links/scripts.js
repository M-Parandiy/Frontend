(function($){
    jQuery.fn.awesomeLinks = function(options){
        options = $.extend({
            param1: 'param1Value', //параметр1
            param2: 'param2Value' //параметр2
        }, options);
        
    var make = function(){
        var str = '';
        var spl = jQuery(this).text().split(" ", 100)
        for(i = 0; i < spl.length; i++)
        {
            str += '<span class="f"><span class="s">'+spl[i]+'</span> </span>';
        }
        jQuery(this).html(str);
    };
    
    return this.each(make);
};
})(jQuery);


jQuery(document).ready(function()
{
    jQuery('a').awesomeLinks();
});