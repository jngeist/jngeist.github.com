typeof jQuery=="undefined"&&alert("Hashgrid: jQuery not loaded. Make sure it's linked to your pages.");var hashgrid=function(a){function w(a){if(b.modifierKey==null)return!0;var c=!0;switch(b.modifierKey){case"ctrl":c=a.ctrlKey?a.ctrlKey:!1;break;case"alt":c=a.altKey?a.altKey:!1;break;case"shift":c=a.shiftKey?a.shiftKey:!1}return c}function x(a){var b=!1,c=a.keyCode?a.keyCode:a.which;return c==13?b="enter":b=String.fromCharCode(c).toLowerCase(),b}function y(){C(b.cookiePrefix+b.id,(u?"1":"0")+","+o+","+c,1)}function z(){j.show(),n.css({width:j.width()}),n.children(".vert").each(function(){$(this).css("display","inline-block"),$(this).offset().top>0&&$(this).hide()})}function A(a){var d,e,f=a.target.tagName.toLowerCase();if(f=="input"||f=="textarea"||f=="select")return!0;e=w(a);if(!e)return!0;d=x(a);if(!d)return!0;switch(d){case b.showGridKey:m?u&&(j.hide(),m=!1,u=!1,y()):(z(),m=!0);break;case b.holdGridKey:m&&!u&&(u=!0,y());break;case b.foregroundKey:m&&(j.css("z-index")==q?(j.css("z-index",p),o="B"):(j.css("z-index",q),o="F"),y());break;case b.jumpGridsKey:m&&b.numberOfGrids>1&&(j.removeClass(b.classPrefix+c),c++,c>b.numberOfGrids&&(c=1),j.addClass(b.classPrefix+c),z(),/webkit/.test(navigator.userAgent.toLowerCase())&&F(),y())}return!0}function B(a){var c,d=w(a);return d?(c=x(a),c&&c==b.showGridKey&&!u&&(j.hide(),m=!1),!0):!0}function C(a,b,c){var d,e="";c&&(d=new Date,d.setTime(d.getTime()+c*24*60*60*1e3),e="; expires="+d.toGMTString()),document.cookie=a+"="+b+e+"; path=/"}function D(a){var b,c=document.cookie.split(";"),d=0,e=c.length,f=a+"=";for(;d<e;d++){b=c[d];while(b.charAt(0)==" ")b=b.substring(1,b.length);if(b.indexOf(f)==0)return b.substring(f.length,b.length)}return null}function E(a){C(a,"",-1)}function F(){var a=document.styleSheets[0];try{a.addRule(".xxxxxx","position: relative"),a.removeRule(a.rules.length-1)}catch(b){}}var b={id:"grid",modifierKey:null,showGridKey:"g",holdGridKey:"h",foregroundKey:"f",jumpGridsKey:"j",numberOfGrids:1,classPrefix:"grid-",cookiePrefix:"hashgrid"},c=1,d,e,f,g,h,i,j,k,l,m=!1,n,o="B",p=-1,q=9999,r,s,t,u=!1,v;if(typeof a=="object")for(s in a)b[s]=a[s];else typeof a=="string"&&(b.id=a);$("#"+b.id).length>0&&$("#"+b.id).remove(),l=$("<div></div>"),l.attr("id",b.id).css({display:"none","pointer-events":"none"}),$("body").prepend(l),j=$("#"+b.id),j.css("z-index")=="auto"&&j.css("z-index",p),r=parseFloat($(document).height()),j.height(r),j.append('<div id="'+b.id+'-horiz" class="horiz first-line">'),v=j.css("top"),j.css({top:"-999px",display:"block"}),g=$("#"+b.id+"-horiz"),h=g.outerHeight(),j.css({display:"none",top:v});if(h<=0)return!1;i=Math.floor(r/h),d="";for(f=i-1;f>=1;f--)d+='<div class="horiz"></div>';j.append(d),j.append($('<div class="vert-container"></div>')),n=j.children(".vert-container"),e=j.width(),n.css({width:e,position:"absolute",top:0}),n.append('<div class="vert first-line">&nbsp;</div>'),d="";for(f=0;f<30;f++)d+='<div class="vert">&nbsp;</div>';return n.append(d),n.children().height(r).css({display:"inline-block"}),k=D(b.cookiePrefix+b.id),typeof k=="string"?(t=k.split(","),t[2]=Number(t[2]),typeof t[2]=="number"&&!isNaN(t[2])&&(c=t[2].toFixed(0),j.addClass(b.classPrefix+c)),t[1]=="F"&&(o="F",j.css("z-index",q)),t[0]=="1"&&(m=!0,u=!0,z())):j.addClass(b.classPrefix+c),$(document).bind("keydown",A),$(document).bind("keyup",B),{}};$(document).ready(function(){var a=new hashgrid({numberOfGrids:2})});