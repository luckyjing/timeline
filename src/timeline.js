/**
 * Created by LuckyJing on 2015/9/23 0023.
 */
+function ($) {
    "use strict";
    var DEFAULTS = {
        number:4,
        state:0
    };
    var option = undefined;
    var gap;
    var outerWidth = window.outerWidth;
    var innerWidth =30;
    var offset = 10-(innerWidth/outerWidth*100/2);
    $.fn.extend({
        "timeLine": function (options) {
            return this.each(function () {
                var $this = $(this);
                if(typeof options === 'string'){
                    if(options === 'add'){
                        if(option.state <= option.number){
                            $this.find('i.timline-dot').eq(option.state).addClass('color');
                            var w = $this.find('i.color').last().css('left');
                            $this.find('.line-mask').css("width",w);
                            option.state ++;
                            if(option.state == option.number){
                                $this.find('.line-mask').css("width",'100%');
                            }
                        }
                    }else if(options ==='print'){
                        console.log(option);
                    }
                }else{
                    if(option === undefined){
                        option = $.extend({},DEFAULTS,options);
                    }else{
                        option = $.extend({},option,options);
                    }
                    gap = 80/(option.number-1);
                    var arr = [];
                    for(var i=0; i<option.number; i++){
                        if(i < option.state){
                            arr.push(" <i class='timline-dot color'   style='left:"+(gap*i+offset)+"%'></i>")

                        }else{
                            arr.push(" <i class='timline-dot' style='left:"+(gap*i+offset)+"%'></i>")
                        }
                    };
                    var str = arr.join(' ');
                    $this.children('.line').html(str);
                    if(option.state == option.number){
                        $this.find('.line1').css("width",'100%');
                    }else{
                        for(var i=0; i<option.number; i++){
                            if(i < option.state){
                                var w = $this.find('i.color').last().css('left');
                                $this.find('.line-mask').css("width",w);
                            }
                        }
                    }
                }
            });
        }
    });
}(window.jQuery);