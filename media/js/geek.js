if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}
/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);// StyleFix 1.0.2 + PrefixFree 1.0.6 / Lea Verou / MIT license
(function(){function h(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix={link:function(a){try{if("stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(b){return}var c=a.href||a.getAttribute("data-href"),f=c.replace(/[^\/]+$/,""),i=a.parentNode,d=new XMLHttpRequest,g;d.onreadystatechange=function(){4===d.readyState&&g()};g=function(){var b=d.responseText;if(b&&a.parentNode&&(!d.status||400>d.status||600<d.status)){b=e.fix(b,
!0,a);f&&(b=b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(a,b,c){return!/^([a-z]{3,10}:|\/|#)/i.test(c)?'url("'+f+c+'")':a}),b=b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+f,"gi"),"$1"));var c=document.createElement("style");c.textContent=b;c.media=a.media;c.disabled=a.disabled;c.setAttribute("data-href",a.getAttribute("href"));i.insertBefore(c,a);i.removeChild(a);c.media=a.media}};try{d.open("GET",c),d.send(null)}catch(k){"undefined"!=typeof XDomainRequest&&(d=new XDomainRequest,d.onerror=
d.onprogress=function(){},d.onload=g,d.open("GET",c),d.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){if(!a.hasAttribute("data-noprefix")){var b=a.disabled;a.textContent=e.fix(a.textContent,!0,a);a.disabled=b}},styleAttribute:function(a){var b=a.getAttribute("style"),b=e.fix(b,!1,a);a.setAttribute("style",b)},process:function(){h('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);h("style").forEach(StyleFix.styleElement);h("[style]").forEach(StyleFix.styleAttribute)},
register:function(a,b){(e.fixers=e.fixers||[]).splice(void 0===b?e.fixers.length:b,0,a)},fix:function(a,b){for(var c=0;c<e.fixers.length;c++)a=e.fixers[c](a,b)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(a,c){return c.toUpperCase()}).replace("-","")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}};(function(){setTimeout(function(){h('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",
StyleFix.process,!1)})()}})();
(function(h){function e(b,c,f,i,d){b=a[b];b.length&&(b=RegExp(c+"("+b.join("|")+")"+f,"gi"),d=d.replace(b,i));return d}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(b,c){var f=a.prefix,b=e("functions","(\\s|:|,)","\\s*\\(","$1"+f+"$2(",b),b=e("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+f+"$2$3",b),b=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+f+"$2:",b);if(a.properties.length)var i=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi"),b=e("valueProperties","\\b",
":(.+?);",function(a){return a.replace(i,f+"$1")},b);c&&(b=e("selectors","","\\b",a.prefixSelector,b),b=e("atrules","@","\\b","@"+f+"$1",b));return b=b.replace(RegExp("-"+f,"g"),"-")},property:function(b){return(a.properties.indexOf(b)?a.prefix:"")+b},value:function(b){b=e("functions","(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",b);return b=e("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",b)},prefixSelector:function(b){return b.replace(/^:{1,2}/,function(b){return b+a.prefix})},prefixProperty:function(b,
c){var f=a.prefix+b;return c?StyleFix.camelCase(f):f}};(function(){var b={},c=[],f=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,d=function(a){if("-"===a.charAt(0)){c.push(a);var a=a.split("-"),d=a[1];for(b[d]=++b[d]||1;3<a.length;)a.pop(),d=a.join("-"),StyleFix.camelCase(d)in i&&-1===c.indexOf(d)&&c.push(d)}};if(0<f.length)for(var g=0;g<f.length;g++)d(f[g]);else for(var e in f)d(StyleFix.deCamelCase(e));var g=0,j,h;for(h in b)f=b[h],g<f&&(j=h,g=f);a.prefix=
"-"+j+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(g=0;g<c.length;g++)e=c[g],0===e.indexOf(a.prefix)&&(j=e.slice(a.prefix.length),StyleFix.camelCase(j)in i||a.properties.push(j));"Ms"==a.Prefix&&(!("transform"in i)&&!("MsTransform"in i)&&"msTransform"in i)&&a.properties.push("transform","transform-origin");a.properties.sort()})();(function(){function b(a,b){e[b]="";e[b]=a;return!!e[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",
params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};c["repeating-linear-gradient"]=c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var f={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display"};a.functions=[];a.keywords=[];var e=document.createElement("div").style,d;for(d in c){var g=
c[d],h=g.property,g=d+"("+g.params+")";!b(g,h)&&b(a.prefix+g,h)&&a.functions.push(d)}for(var j in f)h=f[j],!b(j,h)&&b(a.prefix+j,h)&&a.keywords.push(j)})();(function(){function b(a){e.textContent=a+"{}";return!!e.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},f={keyframes:"name",viewport:null,document:'regexp(".")'};a.selectors=[];a.atrules=[];var e=h.appendChild(document.createElement("style")),d;for(d in c){var g=d+(c[d]?"("+c[d]+")":"");!b(g)&&
b(a.prefixSelector(g))&&a.selectors.push(d)}for(var k in f)g=k+" "+(f[k]||""),!b("@"+g)&&b("@"+a.prefix+g)&&a.atrules.push(k);h.removeChild(e)})();a.valueProperties=["transition","transition-property"];h.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);/*
 * smartresize: debounced resize event for jQuery
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.smartresize.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

var event = $.event,
    resizeTimeout;
    
event.special[ "smartresize" ] = {
    setup: function() {
        $( this ).bind( "resize", event.special.smartresize.handler );
    },
    teardown: function() {
        $( this ).unbind( "resize", event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
        // Save the context
        var context = this,
            args = arguments;
        
        // set correct event type
        event.type = "smartresize";
        
        if(resizeTimeout)
            clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            jQuery.event.handle.apply( context, args );
        }, execAsap === "execAsap"? 0 : 100);
    }
}

$.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
};
    
})(jQuery);/*
  JQUERY.BASELINEALIGN-1.0.JS
  http://baselinealign.mattwilcox.net
  https://github.com/MattWilcox/jQuery-Baseline-Align
  
  This plugin operates on a given set of images, it:
    * detects the docuemnt baseline
    * applies the margin needed to ensure the baseline is maintained
  
  --------------------------------------------------------------------------------------------------------------------------
  FILE INFO
  Last updated:     2012/02/11
  Last updated by:  Matt Wilcox
  ----------------------------------------------------------------------------------------------------------------------- */

(function( $ ) {

  var methods = {
    baselineAlign : function(options) {

      // Create some configuration options, and give sensible defaults
      var settings = $.extend({
        'container' : false // specify a container to apply the margin to rather than the image itself
      }, options);
  
      return this.each(function() {
        var this_img = $(this);

        // abort now if the image is inline
        if(this_img.css('display') === 'inline') { return; }

        // reset JS applied margins on the image
        this_img.attr('style','');

        // shrink the image height to a whole pixel value to avoid rounding errors in the layout engine
        // NOTE, this introduces a very slight difference in aspect ratio. You'll never see it.
        var img_height = Math.floor(this_img.height());
        this_img.css("height",img_height);

        /* setup variables */
        var baseline        = parseFloat($("html").css("line-height").replace("px",""));
        var fontsize        = parseFloat($("html").css("font-size").replace("px",""));
        var total_footprint = img_height;

        // IF: the image is inside a container box
        if(settings.container !== false &&
           this_img.parents(settings.container).length > 0
          ){
            var container = this_img.parents(settings.container);

            // reset JS applied margins on the container
            container.attr('style','');

            // shrink the image height to a whole pixel value to avoid rounding errors in the layout engine
            // NOTE, this introduces a very very slight difference in aspect ratio. You'll never see it.
            var container_height = Math.ceil(container.height());
            container.css("height",container_height);

            total_footprint = Math.floor(container.outerHeight(false));
        }

        var remainder = parseFloat(total_footprint%baseline);
        var offset    = parseFloat(baseline-remainder);
        
        // avoid the text wrapping directly underneath, there needs to be at least 1/4 line-height gap
        if(offset<(baseline/4)) { offset = offset+baseline; }

        if(settings.container === false) { // apply directly to the image
          this_img.css("margin-bottom",offset+"px");
          return; // stop processing this loop
        }
        if(this_img.parents(settings.container).length > 0) { /* apply margin to specified container box, if it exists */
          this_img.parents(settings.container).css("margin-bottom",offset+"px"); 
          return;
        }
        /* apply margin to image itself */
        this_img.css("margin-bottom",offset+"px");
      });
    },

    init : function() {
      var didResize = false;
      var didLoad   = false;
      var a = this; // I wish I knew why this works
      var b = arguments; // I wish I knew why this works

      $(window).resize(function(){
        didResize = true;
      });

      $(window).load( methods.baselineAlign.apply(a,b)); // I wish I knew why this works
      // and I wish I knew why this line also throws an error in jQuery 1.7.1
      // Error: ((f.event.special[r.origType] || {}).handle || r.handler).apply is not a function
      // it doesn't, however, actually seem to break anything.

      setInterval(function(){
        if(didResize){
          didResize = false;
          return methods.baselineAlign.apply(a, b); // I wish I knew why this works
        }
      }, 500);
    }
  };

  $.fn.baselineAlign = function( method ) {
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.baselineAlign' );
    }  
  };
})( jQuery );;(function(window, $)
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
})(this, jQuery);(function($){$.fn.swipe=function(options){var defaults={threshold:{x:30,y:10},swipeLeft:function(){alert('swiped left')},swipeRight:function(){alert('swiped right')}};var options=$.extend(defaults,options);if(!this)return false;return this.each(function(){var me=$(this)
var originalCoord={x:0,y:0}
var finalCoord={x:0,y:0}
function touchStart(event){originalCoord.x=event.targetTouches[0].pageX
originalCoord.y=event.targetTouches[0].pageY}
function touchMove(event){event.preventDefault();finalCoord.x=event.targetTouches[0].pageX
finalCoord.y=event.targetTouches[0].pageY}
function touchEnd(event){var changeY=originalCoord.y- finalCoord.y
if(changeY<defaults.threshold.y&&changeY>(defaults.threshold.y*-1)){changeX=originalCoord.x- finalCoord.x
if(changeX>defaults.threshold.x){defaults.swipeLeft()}
if(changeX<(defaults.threshold.x*-1)){defaults.swipeRight()}}}
function touchStart(event){originalCoord.x=event.targetTouches[0].pageX
originalCoord.y=event.targetTouches[0].pageY
finalCoord.x=originalCoord.x
finalCoord.y=originalCoord.y}
function touchCancel(event){}
this.addEventListener("touchstart",touchStart,false);this.addEventListener("touchmove",touchMove,false);this.addEventListener("touchend",touchEnd,false);this.addEventListener("touchcancel",touchCancel,false);});};})(jQuery);// Generated by CoffeeScript 1.9.0
(function() {
  var makeoverlay, on_resize, pull_quotes, removeoverlay, switch_left, switch_right;

  makeoverlay = function() {
    $(this).parents('li').addClass('overlay');
    return $(this).css({
      'margin-left': $(this).width() / -2,
      'margin-top': $(this).height() / -2
    }).unbind('click').click(removeoverlay);
  };

  removeoverlay = function() {
    $(this).parents('li').removeClass('overlay');
    return $(this).css({
      'margin-left': '5%',
      'margin-top': 0
    }).unbind('click').click(makeoverlay);
  };

  on_resize = function() {
    return $('header:not(article *) h1, #siteheader h1').embiggen();
  };

  switch_right = function() {
    if ($('#footer').hasClass('tumblr')) {
      return $('#footer').removeClass('tumblr');
    } else {
      return $('#footer').addClass('twitter');
    }
  };

  switch_left = function() {
    if ($('#footer').hasClass('twitter')) {
      return $('#footer').removeClass('twitter');
    } else {
      return $('#footer').addClass('tumblr');
    }
  };

  pull_quotes = function() {
    return $('.pull').each(function() {
      var contents;
      contents = $('<p />').append($(this).contents().clone());
      return $(this).parentsUntil('section').after($("<div class='pulled_quote' />").append(contents));
    });
  };

  $(function() {
    $(window).on('smartresize', on_resize);
    Modernizr.load({
      test: Modernizr.history,
      yep: '/media/js/jquery.pjax.js',
      complete: function() {
        return $('a:not([href*=":"])').pjax('#main');
      }
    });
    $('a.shownav').click(function(event) {
      event.preventDefault();
      return $('#sitenav').toggleClass('vis');
    });
    $('#sitenav a:not(.shownav)').click(function() {
      return $('#sitenav').removeClass('vis');
    });
    $('.posts-pager').click(function() {
      return $('#footer').removeClass('tumblr twitter');
    });
    $('.tumblr-pager').click(function() {
      return $('#footer').removeClass('twitter').addClass('tumblr');
    });
    $('.twitter-pager').click(function() {
      return $('#footer').removeClass('tumblr').addClass('twitter');
    });
    $('.foot img').click(makeoverlay);
    return pull_quotes();
  });

  $(window).load(function() {
    $('img').baselineAlign();
    return on_resize();
  });

}).call(this);