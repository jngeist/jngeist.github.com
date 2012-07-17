;(function(window, $)
{
    var Embiggen = {
        cssIsInt: function(val) {
            return (Embiggen.cssToInt(val) == Embiggen.cssToFloat(val));
        },
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
        makeProprotional: function(prop, elem) {
            if (Embiggen.cssIsInt(prop)) {
                return Embiggen.cssToInt(prop);
            } else {
                var fs = Embiggen.cssToFloat(elem.css('font-size'));
                return Embiggen.cssToFloat(prop) / fs;
            }
        },
        letterSpacingOffset: function(elem) {
            var ls;
            ls = elem.css('letter-spacing');
            return Embiggen.makeProprotional(ls, elem);
        },
        wordSpacingOffset: function(elem) {
            var ws;
            ws = elem.css('word-spacing');
            return Embiggen.makeProprotional(ws, elem);
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
            console.log("Embiggen.pluginMethod firing.");
            return this.each(function() {
                var width, innerwidth, lineheight, newsize, scale, size, wrapper, offset;
                width = $(this).width();
                wrapper = $(this).find('.embiggened');
                if (!wrapper.length) {
                    $(this).contents().wrap('<span class="embiggened" style="display: inline" />');
                    wrapper = $(this).find('.embiggened');
                }
                offset = Embiggen.spacingOffset($(this));
                size = Embiggen.cssToInt(wrapper.css('font-size'));
                modifiedsize = parseFloat(size + offset);
                lineheight = Embiggen.cssToInt(wrapper.css('line-height'));
                innerwidth = wrapper.width();

                scale = (width / innerwidth).toPrecision(2);
                console.log({scale: scale, size: size, width: width, innerwidth: innerwidth, offset: offset, modifiedsize: modifiedsize});
                newsize = Math.floor(modifiedsize * scale);
                if (newsize > lineheight) {
                    newsize = lineheight;
                }
                wrapper.css('font-size', newsize);
            });
        }
    };

    $.fn.embiggen = Embiggen.pluginMethod;
    window.embiggen = Embiggen;
})(this, jQuery);