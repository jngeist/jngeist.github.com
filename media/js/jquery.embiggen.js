;(function(window, $)
{
    var Embiggen = {
        pluginMethod: function() {
            return this.each(function() {
                var width;
                width = $(this).width();
                return $(this).each(function() {
                    var innerwidth, lineheight, newsize, scale, size, wrapper;
                    wrapper = $(this).find('.embiggened');
                    if (!wrapper.length) {
                        $(this).contents().wrap('<span class="embiggened" style="display: inline" />');
                        wrapper = $(this).find('.embiggened');
                    }
                    size = parseInt(wrapper.css('font-size').replace('px', ''));
                    lineheight = parseInt(wrapper.css('line-height').replace('px', ''));
                    innerwidth = wrapper.width();
                    scale = (width / innerwidth).toPrecision(2);
                    newsize = Math.floor(size * scale);
                    if (newsize > lineheight) {
                        newsize = lineheight;
                    }
                    return wrapper.css('font-size', newsize);
                });
            });
        }
    };

    $.fn.embiggen = Embiggen.pluginMethod;
    window.embiggen = Embiggen;
})(this, jQuery);