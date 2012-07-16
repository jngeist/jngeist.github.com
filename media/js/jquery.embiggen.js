;(function(window, $)
{
    var Embiggen = {
        cssToInt: function(val) {
            return parseInt(val.replace('px', ''), 10);
        },
        cssToFloat: function(val) {
            return parseFloat(val.replace('px', ''), 10);
        },
        getCharacterCount: function(elem) {
            return $(elem).find('span.embiggened').text().length;
        },
        getWordCount: function(elem) {
            return $(elem).find('span.embiggened').text().split(/\s/).length;
        },
        letterSpacingOffset: function(elem) {
            var ls;
            ls = elem.css('letter-spacing');
            return Embiggen.cssToFloat(ls) * Embiggen.getCharacterCount(elem);
        },
        wordSpacingOffset: function(elem) {
            var ws;
            ws = elem.css('word-spacing');
            return Embiggen.cssToFloat(ws) * Embiggen.getWordCount(elem);
        },
        spacingOffset: function(elem) {
            var ls;
            elem = $(elem);
            ls = elem.css('letter-spacing');
            if (ls !== 'normal') {
                return Embiggen.letterSpacingOffset(elem);
            } else {
                return Embiggen.wordSpacingOffset(elem);
            }
        },
        pluginMethod: function() {
            return this.each(function() {
                var width;
                width = $(this).width();
                return $(this).each(function() {
                    var innerwidth, lineheight, newsize, scale, size, wrapper, offset;
                    wrapper = $(this).find('.embiggened');
                    if (!wrapper.length) {
                        $(this).contents().wrap('<span class="embiggened" style="display: inline" />');
                        wrapper = $(this).find('.embiggened');
                    }
                    size = Embiggen.cssToInt(wrapper.css('font-size'));
                    lineheight = Embiggen.cssToInt(wrapper.css('line-height'));
                    innerwidth = wrapper.width() - offset;

                    scale = (width / innerwidth).toPrecision(2);
                    newsize = Math.floor(size * scale);
                    if (newsize > lineheight) {
                        newsize = lineheight;
                    }
                    wrapper.css('font-size', newsize);
                });
            });
        }
    };

    $.fn.embiggen = Embiggen.pluginMethod;
    window.embiggen = Embiggen;
})(this, jQuery);