jQuery.fn.pulse = function( properties, duration, numTimes, interval) {

   if (duration === undefined || duration < 0) duration = 500;
   if (duration < 0) duration = 500;

   if (numTimes === undefined) numTimes = 1;
   if (numTimes < 0) numTimes = 0;

   if (interval === undefined || interval < 0) interval = 0;

   return this.each(function() {
      var $this = jQuery(this);
      var origProperties = {};
      for (property in properties) {
         origProperties[property] = $this.css(property);
      }

      var subsequentTimeout = 0;
      for (var i = 0; i < numTimes; i++) {
         window.setTimeout(function() {
            $this.animate(
               properties,
               {
                  duration:duration / 2,
                  complete:function(){
                     $this.animate(origProperties, duration / 2)}
               }
            );
         }, (duration + interval)* i);
      }
   });

};


(function ( $ ) {
    jQuery.fn.typeText = function(every, callback) {
        var updateSpeed = 50;
        callback = callback || function() {};
        every = every || function() {};

        if (!this.data('text')) {
            this.data('text', this.text());
            this.text('');
        }

        return this.each(function() {
            var text = $(this).data('text');
            var currentlength = $(this).text().length;
            every();
            if (text.length > currentlength) {
                $(this).queue(function () {
                    $(this).delay(updateSpeed).text(text.substr(0, currentlength + 1)).typeText(every, callback);
                    $(this).dequeue();
                });
            } else {
                $(this).queue(callback).dequeue();
            }
            });
        };
    } (jQuery)
);

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

(function() {
  var Aftermath, AskYorda, Button, Combat, Crate, Exit, IMG_ROOT, Interaction, Intro, Inventory, Location, Option, QueryBox, Scrollfall, Section, Select, Surround, progress, pulse, sections, select, startwith,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  IMG_ROOT = '/oddities/ico/static/icofeature/images';

  $('#review').html('<div id="intro" class="section"> <p>In the beginning, I was unsure where to go <a>next</a>.</p> <p><a class="linkout" href="http://en.wikipedia.org/wiki/Ico"><em>Ico</em></a> told me nothing of itself, or of myself. There was no kindly wingman guiding me through my first mission, no conveniently-placed signposts with pictures of buttons to tell me how to make things <a>happen.</a></p> <p>All I knew is what I could observe: I was a boy. I had horns. I was placed in some sort of sarcophagus. I was told this was for the good of the village. I was left, alone. There was a great deal of shaking. I broke <a>free.</a></p> <p>And then, simply and silently, <em>Ico</em> made its first and only <a>demand</a> of me as a player:</p> <p class="select-key"><span data-target="intro" class="option">Interact.</span></p> </div> <p id="select"><span id="postselect"></span></p> <div id="surround" class="section")> <div class="active" id="surround-core"> <p class="select-key"><span data-target="surround" class="option">In essence,</span><span class="postselect">this is the fundamental imperative of life:</span></p> <p><em>Life is that which can interact with its <a class="live">surroundings.</a></em></p> </div> <div class="location" id="moxie"> <p>As I write this, my dog <span class="surround-target">Moxie</span> pads her way across the living room to pounce on a stuffed reindeer left over from Christmas. She abandons it to sniff her way inquisitively around the living room. She finds a tiny fragment of pine below our pile of firewood. She prods it tentatively with her tongue and, finding it satisfactorily engaging, eats it noisily. She growls at our other dog and dances backward, inviting chase.</p> <p>These small interactions are how she bridges the vast chasm between herself and the world, how she makes known to herself the difference between herself and the world, how she tells herself that she is herself, and the world that it is the world.</p> <p>This is how I know she is alive: because she interacts with me, with her sister, with stuffed reindeer and firewood and innumerable gooey, rancid unnamables unearthed in the backyard. She sniffs, she tastes, she prods, she feels. She pushes against things to see if they will give. She lifts with her nose to see what lies beneath.</p> </div> <div class="location" id="megan"> <p>My wife <span class="surround-target">Megan</span> is driving home right now from her new job in a yarn factory. This last week she has spoken to new people, worked new machines, navigated the fraught waters of a new workplace. Her eyes have learned to gauge how well a skein has shed its excess dye. Her hands have learned the gestures for skeining and reskeining  yard after yard of vibrant fiber. Her fingers have learned a rhythm for attaching labels. Her mouth has learned when to smile, when to joke, when to keep quiet.</p> <p>In this way she has found her place in her new surroundings.</p> </div> <div class="location" id="ico"> <p>As we wander around that first room, <span class="surround-target">Ico</span> and I learn what we are capable of. We learn to walk by walking, to jump by jumping. I push buttons and Ico does things, or does not do things.</p> <p>As we move through the game, we learn to recognize what kinds of walls can be climbed and what kinds cannot. We learn this by climbing/not climbing them. We learn what can be pushed by pushing/not pushing things. We learn what can be carried by carrying/not carrying.</p> <p>We encounter an open hole in our path, a breadth of missing planks in the wooden bridge. We need to cross; the gap is wide. We jump. We catch the edge of the far side with the tips of our fingers, and from this tenuous grip we fight our way to surer purchase.</p> <p>In this way, we learn what we can reach by stretching.</p> </div> <div data-direction="left" data-target="moxie" class="arrow left"></div> <div data-direction="right" data-target="megan" class="arrow right"></div> <div data-direction="down" data-target="ico" class="arrow down"></div> <div data-direction="up" data-target="surround-core" class="arrow up"></div> </div> <div id="inventory" class="section"> <p class="select-key"><span data-target="inventory" class="option">In tiny increments,</span><span class="postselect"><em>Ico</em> built on my <a class="interactionator">small inventory of interactions,</a> making new ways to know out of the ways I already knew.</span></p> </div> <div id="scrollfall" class="section"> <p class="select-key"><span class="option" data-target="scrollfall">In the next room,</span><span class="postselect">we find stairs.</span></p> <p>We hear a noise, and I guide Ico toward the spiral staircase with a nudge of my thumb.</p> <div class="wrapstairs"> <p>This is something we share, Ico and I: we both know stairs, this small piece of unseen knowledge, the mechanism by which we ascend. For all the broad distance between me and Ico&#8211;the man with controller and the boy with the horns&#8211;in the deepest parts of us we have learned the same things: how to walk, and how to open a door, and how to swing a piece of wood. How to climb stairs.</p> <p>Our bodies are interfaces, too, after all: ways of asking favors of the world. We know, when we wish to elevate ourselves, that we can use our feet to communicate that to the stairs, and&#8211;in exchange for a small fee, only a few heavy breaths, only the fire stored in our fat&#8211;we can earn our way upward.</p> <p>Or say it this way: Ico and I want to know what is above us. We engage with the stairs to see if this can be known.</p> <p>Stairs are an interaction, a transaction. A request for ascendance. An exchange of breath.</p> <p>Together, we burn upward, to the top of the staircase, where we see</p> <p class="yorda"><span class="cagespan">a cage.</span><span class="caged">yorda.</span></p> </div> </div> <div id="combat" class="section"> <p class="select-key"><span class="option" data-target="combat">In the chaos below,</span><span class="postselect">the cage sits open.</span></p> <p class="show">Before we can begin to approach the woman the cage had held, the room fills with darkness. First, shadow clusters on the floor in clots and puddles. Then, figures of molten black arise from the pools and lurch menacingly toward us.</p> <img class="button" src="' + IMG_ROOT + '/torch.png" /> <p>Ico takes hold of a stick, and begins to swing wildly at the animate dark.</p> <p>Each swing drives a shadow back a step or two. The other dark bodies push slowly toward the woman on the floor.</p> <p>Ico advances on the nearest shadow-child, flailing his makeshift club.</p> <p>After a few panicked hits, the figure dissolves into information: what was an enemy becomes knowledge. Ico knows, and I know, that these creatures can be beaten.</p> <p>Ico is a frightened child, and I am a well-trained empiricist, so together, we move from shadow to shadow, swinging our stick and replicating our results.</p> <p>One by one, the pools of shadow disappear, and we approach <span class="yorda">Yorda.</span></p> <div class="overlay"></div> </div> <div id="askyorda" class="section"> <p class="select-key"><span class="option" data-target="askyorda">In silence,</span><span class="postselect"> we approach the woman on the floor.</span></p> <p class="pre">Yorda is a mystery. Here she is, pale, ethereal, and ineffable. She is an enigma to be interrogated. </p> <p class="pre">I want to know who this woman is, where she&#8217;s from, why she is veiled in white light and held prisoner by shadow. I am hungry to understand. <span class="icoasks">Ico has other things on his mind.</span></p> <p class="icoquestion"><span class="question" data-key="0">&#8220;Did they try to sacrifice you, too?&#8221;</span><span class="after"> he asks her.</span></p> <p class="icoquestion answer"><span class="answer" data-key="0">She responds with a string of arcane symbols, no alphabet I recognize.</span></p> <p class="icoquestion"><span class="question" data-key="1">&#8220;What was that creature that attacked you?&#8221;</span><span class="after"> he asks.</span></p> <p class="icoquestion answer"><span class="answer" data-key="1">She has no response.</span></p> <p class="icoquestion"><span class="question" data-key="2">&#8220;They tried to sacrifice me because I have horns,&#8221;</span><span class="after"> he explains.</span></p> <p class="icoquestion answer"><span class="answer" data-key="2">Again, she remains silent.</span><span class="after"> Ico is asking the wrong questions, and neither of us is getting answers.</span></p> <p class="invis">And this is the thing itself: meaning without access, these visibly obscure symbols. I don&#8217;t know what they mean. But do they have meaning?</p> <p class="invis">Uncertain, Ico and I move on.</p> </div> <div id="querybox"> <div id="yordaanswer"></div> <input type="text" id="yordaquestion" /><button id="yordabutton" disabled="disabled">Ask Yorda</button> </div> <div id="crate" class="section"> <p class="select-key"><span class="option" data-target="crate">In our travels,</span><span class="postselect"> we find ourselves in an empty room.</span></p> <p>Yorda wanders off to stare at an interesting pillar. I look to see what we can do in this space. The answer is the far wall: there&#8217;s a ledge, maybe ten feet high, and atop that, a door. This is my way forward.</p> <p class="crate"> <span id="crateobject"></span> <span class="text"> <span class="insidecrate crate" data-crate-index="1"></span><span class="crate"> toward the wall, and we leap</span> <span class="insidecrate crate" data-crate-index="2"></span><span class="crate"> I can&#8217;t quite reach the edge,</span> <span class="insidecrate crate" data-crate-index="3"></span><span class="crate"> me closer to my goal.</span> <span class="insidecrate crate" data-crate-index="4"></span><span class="crate"> easily clamber up to the exit.</span> <span class="insidecrate crate" data-crate-index="5"></span><span class="crate"> draw Yorda closer to escape.</span> </span> <span id="cratetarget"></span> </p> <p class="shed">We go to check on Yorda, and I find her casually gazing out over a precipice. Next to her is a <a>crate.</a></p> <p class="shed wait">I engage the crate in discourse: Can we climb you? Can we move you? What happens if we to push you off the cliff? Can we <span class="delay">drag</span> you?</p> <p class="wait complete">And so I learn what crates are, and what I can do with them.</p> </div> <div id="exit" class="section"> <p class="select-key"> <span class="option" data-target="exit">In between us </span> <span class="postselect"> and the outside is a bank of statues, green and unearthly. They look like carved jade, and above them we see the edge of a doorframe, a way forward.</span> </p> <div class="gates"> <div> <div class="gate left"></div><div class="gate right"></div> </div> </div> <div class="hidden arrow left"></div> <div class="hidden arrow right"></div> <div class="hidden button circle"></div> <div class="hidden button square"></div> <br /> <div class="hidden button r"></div> <p data-interaction="crate">I guide Ico to the edge of one, and ask him to take hold. He will not, or cannot, grasp them. We cannot move them that way. </p> <p data-interaction="circle">I press circle, inviting Ico to use the strange object, but Ico does nothing. </p> <p data-interaction="square">Befuddled, Ico swings a length of wood at the statues. They remain unmoved. </p> <p data-interaction="surround">We explore the room again in search of a button, a switch, a missed opportunity to interact. The walls and floor are bare. There is nothing. </p> <p data-interaction="scroll">I lead Ico up the stairs off to one side, up to the landing into which the door is carved. We drop down atop the statues, and then again onto the floor. The statues remain still. </p> <p data-interaction="click">Without much hope, I walk Ico into the statues, in the unlikely event that they await only the press of his small body to step aside. They do not. </p> <div class="exuent-omnes"> <p>Ico calls to Yorda, and she approaches the strange statues. Tentatively, she raises her hand to them.</p> <p>A flash of light. Her mysterious energy arcs toward the statues. Trembling, they part.</p> <p>The world is open to us.</p> </div> </div> <div id="aftermath" class="section clearfix"> <p class="select-key"><span class="option" data-target="aftermath">In truth,</span><span class="postselect">there will always be things we cannot understand about <em>Ico.</em></span></p> <p>The question, for example, of why the boy has horns. <em>Shadow of the Colossus,</em> ostensibly, furnishes an answer&#8211;but the answer leaves me understanding less. Who is the boy? Who is Yorda? Who is the Queen? Who are the shadow golems that pursue us so relentlessly?</p> <p>Why, when all is over&#8211;when we are free, when we have found our way to safety, when at last life stretches out before us down the vast and empty coastline&#8211;why do I stop to seek out a watermelon, and bear it awkwardly in my boyish arms across the white sands of this vacant beach to Yorda&#8217;s sleeping form?</p> <p>The questions do not all lead to answers. The questions lead only to a moment of naïve beauty, found in the tenuous, imperfect balance between knowing and unknowing.</p> <a href="http://www.youtube.com/watch?v=eQ3MkCLi2IQ&hd=1&t=1m58s" target="_blank"><img src="' + IMG_ROOT + '/melon.png" alt="watermelon" /></a> <ul class="credits"> <li><em>Illustrations: <a class="linkout" href="https://twitter.com/hoskingc/">Claire Hosking</a></em></li> <li><em>Additional Support: <a class="linkout" href="http://dai5ychain.net/">Jake Elliott</a></em></li> </ul> </div>');

  Option = (function() {
    function Option(marker) {
      this.marker = $(marker);
      if (this.marker.length) {
        this.target = this.marker.attr('data-target');
        this.section = sections[this.target];
        this.text = this.marker.text();
      }
    }

    Option.prototype.enabled = function() {
      return (this.section != null) && this.section.enabled();
    };

    Option.prototype.disabled = function() {
      if (this.enabled()) {
        return "";
      } else {
        return "disabled='disabled'";
      }
    };

    Option.prototype.html = function() {
      if (this.target && this.text) {
        return "<option value='" + this.target + "' data-text='" + this.text + "'" + (this.disabled()) + ">" + this.text + "</option>";
      }
    };

    return Option;

  })();

  Select = (function() {
    function Select() {
      this.val = bind(this.val, this);
      this.enable = bind(this.enable, this);
      this.disable = bind(this.disable, this);
      this.refresh = bind(this.refresh, this);
      this.updateOptions = bind(this.updateOptions, this);
      this.enabledOptions = bind(this.enabledOptions, this);
      this.makeSelect = bind(this.makeSelect, this);
      this.refresh();
    }

    Select.prototype.hidePostSelect = function(cb) {
      return $('#postselect').animate({
        opacity: 0
      }, 1000, function() {
        if (cb != null) {
          cb();
        }
        return select.updatePostSelect();
      });
    };

    Select.prototype.showPostSelect = function(cb) {
      return $('#postselect').animate({
        opacity: 1
      }, 1000, cb);
    };

    Select.prototype.updatePostSelect = function(cb) {
      if (Section.current) {
        return $('#postselect').html(Section.current.elem.find('.postselect').html());
      }
    };

    Select.prototype.makeSelect = function() {
      $('#select').prepend("<select></select>");
      this.sel = $('select');
      this.updateOptions();
      this.updatePostSelect();
      this.sel.children('option').each(function() {
        return $(this).data('text', $(this).text());
      });
      this.sel.change(function() {
        return Section.switchTo(sections[$(this).val()]);
      });
      this.sel.focus(function() {
        return $(this).children('option').each(function() {
          var percentage, target, text;
          target = $(this).val();
          percentage = parseInt(sections[target].percentage);
          if (sections[target].percentage) {
            text = $(this).data('text');
            return $(this).text("(" + percentage + "%) " + text);
          }
        });
      });
      return this.sel.blur(function() {
        return $(this).children('option').each(function() {
          return $(this).text($(this).data('text'));
        });
      });
    };

    Select.prototype.enabledOptions = function() {
      var i, len, option, ref, results;
      ref = this.options;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        if (sections[option.target] != null) {
          results.push(option.html());
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Select.prototype.updateOptions = function() {
      var value;
      this.refresh();
      value = (this.sel != null) && this.sel.length ? this.sel.val() : null;
      return this.sel.html(this.enabledOptions().join("")).val(value);
    };

    Select.prototype.refresh = function() {
      var item;
      return this.options = (function() {
        var i, len, ref, results;
        ref = $('.option');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Option(item));
        }
        return results;
      })();
    };

    Select.prototype.disable = function() {
      return this.sel.attr("disabled", "disabled");
    };

    Select.prototype.enable = function() {
      return this.sel.removeAttr("disabled");
    };

    Select.prototype.val = function(value) {
      return this.sel.val(value);
    };

    return Select;

  })();

  Section = (function() {
    function Section(elem1) {
      this.elem = elem1;
      this.enabled = bind(this.enabled, this);
      this.leave = bind(this.leave, this);
      this.enter = bind(this.enter, this);
      this.run = bind(this.run, this);
    }

    Section.current = 0;

    Section.prototype.requires = ['roomcleared'];

    Section.prototype.animation = 'fade';

    Section.prototype.hides_social = false;

    Section.prototype.percentage = 0;

    Section.prototype.run = function(cb) {
      if (cb == null) {
        cb = function() {};
      }
      if (this.hides_social) {
        Section.hideSocial();
      }
      return this.elem.clearQueue().show(this.animation, 1000, cb);
    };

    Section.prototype.enter = function(cb) {
      if (cb == null) {
        cb = function() {};
      }
      if (this.hides_social) {
        Section.hideSocial();
      }
      return this.elem.clearQueue().show(this.animation, 1000, cb);
    };

    Section.prototype.leave = function(cb) {
      if (cb == null) {
        cb = function() {};
      }
      if (this.hides_social) {
        Section.showSocial();
      }
      return this.elem.clearQueue().hide(this.animation, 1000, cb);
    };

    Section.prototype.enabled = function() {
      var i, len, ref, req;
      ref = this.requires;
      for (i = 0, len = ref.length; i < len; i++) {
        req = ref[i];
        if (!progress.achievements[req]) {
          return false;
        }
      }
      return true;
    };

    Section.hideSocial = function() {
      return $(".inner-social-links").hide('fade', 1000);
    };

    Section.showSocial = function() {
      return $(".inner-social-links").show('fade', 1000);
    };

    Section.prototype.yordaAcquired = function() {};

    Section.switchTo = function(target) {
      var action, inf, old, out;
      progress.addSection(target);
      old = Section.current;
      Section.current = target;
      if (Section.current.hasrun != null) {
        action = Section.current.enter;
      } else {
        Section.current.hasrun = 1;
        action = Section.current.run;
      }
      out = function() {
        select.showPostSelect();
        return action();
      };
      if ((old != null) && (old.leave != null)) {
        inf = function(cb) {
          select.hidePostSelect();
          return old.leave(cb);
        };
      } else {
        inf = select.hidePostSelect;
      }
      return inf(out);
    };

    return Section;

  })();

  Intro = (function(superClass) {
    extend(Intro, superClass);

    function Intro() {
      this.run = bind(this.run, this);
      return Intro.__super__.constructor.apply(this, arguments);
    }

    Intro.prototype.animation = 'blind';

    Intro.prototype.run = function() {
      this.elem.show();
      this.elem.find('p').first().show('fade', 1);
      return this.elem.find('p').first().delay(1000, function() {
        var a;
        a = $(this).find('a');
        return Intro.makeLink(a).click(Intro.showPar);
      });
    };

    Intro.makeLink = function(targeta) {
      return $(targeta).delay(500).addClass('link').addClass('live', 1000);
    };

    Intro.showPar = function() {
      var next;
      next = $(this).parents('p').next('p').not('.select-key');
      $(this).removeClass('live', 1000).unbind('click');
      if (next.length) {
        return next.show('fade', 1000, function() {
          var a;
          if ($(this).has('a').length) {
            a = $(this).find('a');
            return Intro.makeLink(a).click(Intro.showPar);
          }
        });
      } else {
        sections.intro.percentage = 100;
        return select.makeSelect();
      }
    };

    return Intro;

  })(Section);

  Location = (function() {
    Location.opposites = {
      left: 'right',
      right: 'left',
      up: 'down',
      down: 'up'
    };

    Location.prototype.visited = 0;

    function Location(elem1, direction1) {
      this.elem = elem1;
      this.direction = direction1;
      $(this.elem).data('direction', this.direction);
      this.moveTo = $.debounce(500, (function(_this) {
        return function(event, direction) {
          var opp;
          if (event == null) {
            event = null;
          }
          if (direction == null) {
            direction = false;
          }
          $('.arrow').unbind();
          if (direction === false) {
            direction = _this.direction;
          }
          opp = Location.opposites[direction];
          $('.location.active').hide('slide', {
            direction: opp
          }, 1000, function() {
            return $(this).removeClass('active');
          });
          _this.elem.delay(500).show('slide', {
            direction: direction
          }, 1000, function() {
            return $(this).addClass('active');
          });
          if (_this.elem.attr('id') === 'surround-core') {
            return Surround.showArrows();
          } else {
            _this.visited = 1;
            sections.surround.updatePercentage();
            $(".arrow:not(" + opp + ")").hide('fade', 1000);
            return $(".arrow." + opp).show('fade', 1000).click(function() {
              return sections.surround.home.moveTo(null, opp);
            });
          }
        };
      })(this));
    }

    return Location;

  })();

  Surround = (function(superClass) {
    extend(Surround, superClass);

    Surround.prototype.hides_social = true;

    function Surround(elem1) {
      this.elem = elem1;
      this.updatePercentage = bind(this.updatePercentage, this);
      this.leave = bind(this.leave, this);
      this.enter = bind(this.enter, this);
      this.run = bind(this.run, this);
      this.home = new Location($('#surround-core'), 'up');
      this.places = {
        left: new Location($('#moxie'), 'left'),
        right: new Location($('#megan'), 'right'),
        down: new Location($('#ico'), 'down'),
        up: this.home
      };
    }

    Surround.prototype.exitAction = "arrows";

    Surround.prototype.importSelect = function() {
      return $('#select').detach().prependTo('#surround-core');
    };

    Surround.prototype.exportSelect = function(cb) {
      return $('#select').detach().insertAfter($('#intro')).delay(1, cb);
    };

    Surround.prototype.run = function() {
      this.home.visited = 1;
      Surround.__super__.run.call(this, (function(_this) {
        return function() {
          _this.importSelect();
          return $('#surround-core').addClass('location');
        };
      })(this));
      return this.elem.find('#surround-core a').addClass('live', 2000).click(Surround.makeArrows);
    };

    Surround.prototype.enter = function() {
      this.importSelect();
      return Surround.__super__.enter.call(this);
    };

    Surround.prototype.leave = function() {
      return this.exportSelect(Surround.__super__.leave.apply(this, arguments));
    };

    Surround.showArrows = function() {
      $('.arrow.up').hide('fade', 1000);
      $('.arrow').filter('.right, .left, .down').show('fade', 1000);
      return $('.arrow').unbind().each(function() {
        var dir;
        dir = $(this).attr('data-direction');
        if (sections.surround.places[dir]) {
          return $(this).click(sections.surround.places[dir].moveTo);
        }
      });
    };

    Surround.makeArrows = function() {
      $('#surround-core a').unbind('click').removeClass('live', 1000);
      return $('.arrow').addClass('center').show('fade', 1000, function() {
        $(this).each(function() {
          return $(this).switchClass('center', 'outside', 1250, function() {
            return $(this).removeClass('outside', 250);
          });
        });
        return window.setTimeout(Surround.showArrows, 1250);
      });
    };

    Surround.prototype.updatePercentage = function() {
      var count, loc, name, ref, total;
      count = total = 0;
      ref = this.places;
      for (name in ref) {
        loc = ref[name];
        count += loc.visited;
        total++;
      }
      return this.percentage = count * 100 / total;
    };

    return Surround;

  })(Section);

  pulse = function(elem, times) {
    if (times) {
      return $(elem).animate({
        color: "red"
      }, 1000, function() {
        return $(this).animate({
          color: "black"
        }, 1000, function() {
          return pulse(this, times - 1);
        });
      });
    }
  };

  Crate = (function(superClass) {
    extend(Crate, superClass);

    function Crate() {
      this.run = bind(this.run, this);
      this.moveTarget = bind(this.moveTarget, this);
      this.unseatCrate = bind(this.unseatCrate, this);
      this.seatCrate = bind(this.seatCrate, this);
      this.endDrag = bind(this.endDrag, this);
      this.beginDrag = bind(this.beginDrag, this);
      this.showCrate = bind(this.showCrate, this);
      this.swapAllCrates = bind(this.swapAllCrates, this);
      return Crate.__super__.constructor.apply(this, arguments);
    }

    Crate.prototype.exitAction = "drag";

    Crate.prototype.requires = ['yorda'];

    Crate.crateText = {
      hasCrate: {
        1: "We shove the crate",
        2: "easily atop the box.",
        3: "but the crate gets",
        4: "Now, it’s simple: I",
        5: "I reach down, and"
      },
      noCrate: {
        1: "I guide Ico",
        2: "futilely a few times.",
        3: "so I seek a way to get",
        4: "If I were taller, I could",
        5: "But as it is, I can't"
      }
    };

    Crate.prototype.swapCrateText = function() {
      var cb, crateData, e, index, target;
      index = $(this).data('crate-index');
      console.log("Swapping text for ", $(this));
      crateData = $(this).data('hasCrate');
      target = crateData != null ? crateData : "noCrate";
      console.log("New text: ", Crate.crateText[target][index]);
      e = function() {};
      cb = function() {
        return $(this).removeClass('blockwide', 500);
      };
      if (target === "hasCrate") {
        $(this).data('text', Crate.crateText[target][index]).typeText(e, cb);
      } else {
        $(this).text(Crate.crateText[target][index]).each(cb);
      }
      return $(this).data('hasCrate', (target === "hasCrate" ? "noCrate" : "hasCrate"));
    };

    Crate.prototype.swapAllCrates = function() {
      console.log("Swapping all text.");
      return $('.insidecrate').each(this.swapCrateText);
    };

    Crate.prototype.showCrate = function() {
      this.percentage = 25;
      $('#crate a').removeClass('live', 1000).unbind('click');
      $('.insidecrate').css({
        clear: "left"
      });
      $('#cratetarget').droppable({
        drop: this.seatCrate
      });
      $('#crateobject').draggable({
        start: this.beginDrag,
        stop: this.endDrag,
        revert: 'invalid',
        revertDuration: 1000
      }).show('fade', 1000, function() {
        return $('.wait').first().delay(1000).show('fade', 1000);
      });
      return window.setTimeout(function() {
        return pulse('.delay', 10);
      }, 5000);
    };

    Crate.prototype.beginDrag = function() {
      this.percentage = 50;
      $('.delay').clearQueue();
      $('.insidecrate').addClass('a').addClass('blockwide', 1000);
      return $('#cratetarget').css({
        opacity: 0,
        display: 'block'
      }).animate({
        opacity: 1
      }, 1000);
    };

    Crate.prototype.endDrag = function() {
      return $('#cratetarget').css({
        opacity: 0
      });
    };

    Crate.prototype.seatCrate = function() {
      this.percentage = 100;
      $('.insidecrate').text('');
      $('#crateobject').clearQueue().animate({
        left: $('#cratetarget').css('left'),
        top: $('#cratetarget').css('top'),
        opacity: 0.05
      }, 500, this.swapAllCrates).bind('mouseenter', function() {
        return $(this).animate({
          opacity: 1
        }, 500);
      }).bind('mouseleave', function() {
        return $(this).animate({
          opacity: 0.05
        }, 500);
      });
      this.moveTarget();
      return $('p.shed').hide('fade', 1000, function() {
        return $('p.complete').show('fade', 1000);
      });
    };

    Crate.prototype.unseatCrate = function() {
      this.swapAllCrates();
      $('#crateobject').clearQueue().animate({
        left: $('#cratetarget').css('left'),
        top: $('#cratetarget').css('top'),
        opacity: 1
      }, 500).unbind('mouseenter').unbind('mouseleave');
      this.moveTarget();
      return $('p.shed').show('fade', 1000);
    };

    Crate.prototype.moveTarget = function() {
      var pos, t;
      t = $('#cratetarget');
      pos = t.data("position");
      pos = pos != null ? pos : "left";
      if (pos === "right") {
        return t.css({
          opacity: 0,
          right: 'auto',
          left: '-1em'
        }).data("position", "left").droppable('destroy').droppable({
          drop: this.seatCrate
        });
      } else {
        return t.css({
          opacity: 0,
          right: 0,
          left: 'auto'
        }).data("position", "right").droppable('destroy').droppable({
          drop: this.unseatCrate
        });
      }
    };

    Crate.prototype.run = function() {
      this.swapAllCrates();
      return Crate.__super__.run.call(this, (function(_this) {
        return function() {
          return $('#crate a').delay(500).addClass('a').addClass('live', 1000).click(_this.showCrate);
        };
      })(this));
    };

    return Crate;

  })(Section);

  Interaction = (function() {
    function Interaction(before, button, after) {
      this.before = before;
      this.button = button;
      this.after = after;
    }

    Interaction.prototype.row = function() {
      var cells, item;
      cells = ((function() {
        var i, len, ref, results;
        ref = ["When", this.before + ",", "I press", this.makeButton(), ", and ", this.after];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push("" + item);
        }
        return results;
      }).call(this)).join(" ");
      return "<span>" + cells + " </span>";
    };

    Interaction.prototype.makeButton = function() {
      return "<img src='" + IMG_ROOT + "/" + this.button + ".png' alt='" + this.button + "' />";
    };

    return Interaction;

  })();

  Inventory = (function(superClass) {
    extend(Inventory, superClass);

    function Inventory() {
      this.showInteraction = bind(this.showInteraction, this);
      this.run = bind(this.run, this);
      return Inventory.__super__.constructor.apply(this, arguments);
    }

    Inventory.prototype.run = function() {
      return Inventory.__super__.run.call(this, (function(_this) {
        return function() {
          return _this.makeDiv();
        };
      })(this));
    };

    Inventory.prototype.exitAction = "somebuttons";

    Inventory.prototype.interactionset = [new Interaction("we find a stick", "circle", "Ico picks up the stick."), new Interaction("we're holding a stick", "square", "Ico swings it like a club."), new Interaction("we find a flame", "circle", "Ico lights the stick ablaze."), new Interaction("we are blocked by a pile of tinder", "circle", "Ico sets the wood alight, burning our path clear."), 'newpar'];

    Inventory.prototype.interactioncounter = 0;

    Inventory.prototype.showInteraction = function() {
      var interaction, row;
      if (this.interactioncounter < this.interactionset.length) {
        interaction = this.interactionset[this.interactioncounter];
        this.interactioncounter += 1;
        if (!this.button) {
          this.makeDiv();
        }
        row = $(interaction.row());
        this.div.append(row);
        row.animate({
          opacity: 1
        }, 1000);
        this.updatePercentage();
        if (this.interactionset[this.interactioncounter] === 'newpar') {
          this.div.after('<p />');
          this.div = this.div.next('p');
          this.interactioncounter += 1;
          progress.setFlag('fighting', true);
        }
      }
      if (this.interactioncounter === this.interactionset.length) {
        if (progress.achievements.yorda) {
          this.button.detach();
          this.exitAction = 'allbuttons';
          return progress.setFlag('cancall', true);
        } else {
          return this.button.addClass('disabled').animate({
            opacity: 0.5
          }, 500);
        }
      }
    };

    Inventory.prototype.yordaAcquired = function() {
      this.interactionset = this.interactionset.concat([new Interaction("we cannot see Yorda", "r", "Ico calls to her."), new Interaction("Yorda is far", "r", "she seeks out our voice."), new Interaction("there is a space between us", "r", "she leaps across."), new Interaction("we have attained a height she cannot reach", "r", "Ico reaches down to draw her up.")]);
      if (this.button != null) {
        return this.button.removeClass('disabled').animate({
          opacity: 1
        }, 500);
      }
    };

    Inventory.prototype.makeDiv = function() {
      this.div = $("<p />");
      this.elem.append(this.div);
      this.button = $("<div class='button'>+</div>").css({
        opacity: 0
      }).click(this.showInteraction);
      this.div.after(this.button);
      return this.button.animate({
        opacity: 1
      }, 1000);
    };

    Inventory.prototype.updatePercentage = function() {
      if (this.div != null) {
        return this.percentage = 100 * (1 + this.interactioncounter) / 10;
      }
    };

    return Inventory;

  })(Section);

  QueryBox = (function() {
    QueryBox.prototype.question = $('#yordaquestion');

    QueryBox.prototype.answer = $('#yordaanswer');

    QueryBox.prototype.button = $('#yordabutton');

    QueryBox.prototype.show = function(cb) {
      if (cb == null) {
        cb = function() {};
      }
      $('#review').addClass('querybox', 1000);
      return this.elem.show('slide', {
        direction: 'down'
      }, 1000, cb);
    };

    QueryBox.prototype.hide = function(cb) {
      if (cb == null) {
        cb = function() {};
      }
      $('#review').removeClass('querybox', 1000);
      return this.elem.hide('slide', {
        direction: 'down'
      }, 1000, function() {
        return window.setTimeout(cb, 250);
      });
    };

    QueryBox.prototype.icoQs = ["Did they try to sacrifice you too?", "What was that creature that attacked you?", "They tried to sacrifice me because I have horns."];

    QueryBox.prototype.yordaAs = ["who are you<em>?</em>", "<em>\[...\]</em>", "<em>\[...\]</em>", "in case you're curious", "which i assume you are", "if you're reading this,", "these translations use the right", "alphabet, but the wrong", "language and algorithm.", "the <a class='live' href='http://teamico.wikia.com/wiki/Runic_language_used_in_Ico'>team ico wiki</a> has more information"];

    function QueryBox(elem1) {
      this.elem = elem1;
      this.deactivate = bind(this.deactivate, this);
      this.activate = bind(this.activate, this);
      this.activateButton = bind(this.activateButton, this);
      this.nextAnswer = bind(this.nextAnswer, this);
      this.hide = bind(this.hide, this);
      this.show = bind(this.show, this);
      this.counter = 0;
    }

    QueryBox.prototype.nextAnswer = function(cb) {
      var atext;
      if (cb == null) {
        cb = function() {};
      }
      if (this.button.is('[disabled]') || (this.question.val() && this.question.val() !== this.lastq)) {
        this.lastq = this.question.val();
        this.question.val('');
        if (this.yordaAs[this.counter] != null) {
          atext = this.yordaAs[this.counter];
        } else {
          atext = "<em>\[...\]</em>";
        }
        this.answer.clearQueue().animate({
          opacity: 0
        }, 500, function() {
          return $(this).html(atext).animate({
            opacity: 1
          }, 500, function() {
            window.setTimeout(cb, 2500);
            return $(this).delay(5000).animate({
              opacity: 0
            }, 5000);
          });
        });
        return this.counter += 1;
      }
    };

    QueryBox.prototype.activateButton = function() {
      return this.button.removeAttr('disabled').unbind('click').click(this.nextAnswer);
    };

    QueryBox.prototype.activate = function(cb) {
      var maxheight;
      if (cb == null) {
        cb = function() {};
      }
      console.log(cb);
      maxheight = $(window).height() - ($('.icoquestion').last().offset().top + $('.icoquestion').last().height());
      if (maxheight > this.elem.height()) {
        this.elem.animate({
          height: maxheight
        }, 1000, cb);
        return this.answer.addClass("interacting");
      } else {
        return cb();
      }
    };

    QueryBox.prototype.deactivate = function() {
      this.elem.animate({
        height: 0
      }, 1000);
      return this.answer.removeClass("interacting");
    };

    return QueryBox;

  })();

  AskYorda = (function(superClass) {
    extend(AskYorda, superClass);

    function AskYorda(elem1) {
      this.elem = elem1;
      this.scrollTo = bind(this.scrollTo, this);
      this.answer = bind(this.answer, this);
      this.ask = bind(this.ask, this);
      this.doQuestion = bind(this.doQuestion, this);
      this.runComplete = bind(this.runComplete, this);
      this.leave = bind(this.leave, this);
      this.enter = bind(this.enter, this);
      this.run = bind(this.run, this);
      this.box = new QueryBox($('#querybox'));
    }

    AskYorda.prototype.requires = ['yorda', 'roomcleared'];

    AskYorda.prototype.exitAction = "yorda";

    AskYorda.prototype.run = function() {
      var box, cb;
      box = this.box;
      cb = (function(_this) {
        return function() {
          return _this.box.activate(_this.doQuestion);
        };
      })(this);
      return AskYorda.__super__.run.call(this, (function(_this) {
        return function() {
          select.disable();
          return _this.elem.find('.pre').show('fade', 1000, $.debounce(250, function() {
            return $('.icoasks').delay(3000).show('fade', 1000, function() {
              return box.show(cb);
            });
          }));
        };
      })(this));
    };

    AskYorda.prototype.enter = function() {
      this.elem.contents().css({
        opacity: 1
      });
      this.box.activateButton();
      return AskYorda.__super__.enter.call(this);
    };

    AskYorda.prototype.leave = function() {
      var cb;
      cb = AskYorda.__super__.leave.apply(this, arguments);
      return this.box.hide(cb);
    };

    AskYorda.prototype.runComplete = function() {
      this.box.deactivate();
      this.box.activateButton();
      select.enable();
      $('.invis').delay(1500).show('fade', 1000, (function(_this) {
        return function() {
          return _this.scrollTo($('.invis').last());
        };
      })(this));
      return this.percentage = 100;
    };

    AskYorda.prototype.doQuestion = function() {
      var cb, par;
      par = $("p.icoquestion:has(.question[data-key=" + this.box.counter + "])");
      if (!par.next('.answer').next().is('.icoquestion')) {
        cb = this.runComplete;
      } else {
        cb = this.doQuestion;
      }
      return this.ask(par, cb);
    };

    AskYorda.prototype.ask = function(elem, cb) {
      var every, nextstep, span;
      this.scrollTo(elem);
      span = elem.find('.question');
      span.css({
        opacity: 1
      });
      nextstep = (function(_this) {
        return function() {
          return span.next('.after').animate({
            opacity: 1
          }, 1000, function() {
            return _this.answer(elem.next('p'), cb);
          });
        };
      })(this);
      every = (function(_this) {
        return function() {
          return _this.box.question.val(span.text());
        };
      })(this);
      return span.typeText(every, nextstep);
    };

    AskYorda.prototype.answer = function(elem, cb) {
      var exec;
      this.scrollTo(elem);
      exec = (function(_this) {
        return function() {
          elem.find('.answer').animate({
            opacity: 1
          }, 1000);
          return _this.box.nextAnswer(function() {
            var next;
            next = elem.find('.after');
            if (next.length) {
              return next.delay(1000).animate({
                opacity: 1
              }, 1000, cb);
            } else {
              return window.setTimeout(cb, 2000);
            }
          });
        };
      })(this);
      return window.setTimeout(exec, 2000);
    };

    AskYorda.prototype.scrollTo = function(elem) {
      var boxtop, elemtop, target;
      elemtop = elem.offset().top;
      boxtop = this.box.elem.offset().top;
      target = elemtop + elem.height() - boxtop;
      if (target > 0) {
        return $('html, body').each(function() {
          return $(this).animate({
            scrollTop: $(this).scrollTop() + target
          });
        });
      }
    };

    return AskYorda;

  })(Section);

  Exit = (function(superClass) {
    extend(Exit, superClass);

    function Exit() {
      this.showMessage = bind(this.showMessage, this);
      this.enableActions = bind(this.enableActions, this);
      this.leave = bind(this.leave, this);
      this.enter = bind(this.enter, this);
      this.run = bind(this.run, this);
      return Exit.__super__.constructor.apply(this, arguments);
    }

    Exit.prototype.hides_social = true;

    Exit.prototype.requires = ['roomcleared', 'incomplete'];

    Exit.prototype.gates = $('.gate');

    Exit.prototype.gatewrapper = $('.gates');

    Exit.prototype.run = function() {
      Exit.__super__.run.call(this);
      return this.enableActions();
    };

    Exit.prototype.enter = function() {
      Exit.__super__.enter.call(this);
      return this.enableActions();
    };

    Exit.prototype.leave = function() {
      var cb;
      cb = Exit.__super__.leave.apply(this, arguments);
      if (this.clearYorda) {
        return sections.askyorda.box.hide(cb);
      }
    };

    Exit.prototype.enableActions = function() {
      var actions, cb, mes;
      actions = progress.actions();
      this.gates.click(function() {
        if (!$(this).is('ui-draggable-dragging')) {
          return sections.exit.showMessage('click');
        }
      });
      if (indexOf.call(actions, 'drag') >= 0) {
        this.gates.draggable({
          revert: true,
          stop: (function(_this) {
            return function(event) {
              return _this.showMessage('crate');
            };
          })(this)
        });
      }
      if (indexOf.call(actions, 'scroll') >= 0) {
        cb = $.debounce(500, (function(_this) {
          return function() {
            if (_this.gatewrapper.scrollTop()) {
              return _this.gatewrapper.animate({
                scrollTop: 0
              }, 500, function() {
                return _this.showMessage('scroll');
              });
            }
          };
        })(this));
        this.gatewrapper.scroll(cb);
      }
      if (indexOf.call(actions, 'yorda') >= 0) {
        this.clearYorda = true;
        sections.askyorda.box.show();
      }
      if (indexOf.call(actions, 'somebuttons') >= 0 || indexOf.call(actions, 'allbuttons') >= 0) {
        this.elem.find('.button:not(.r)').css({
          display: "inline-block"
        });
        this.elem.find('.button.circle').click((function(_this) {
          return function() {
            return _this.showMessage("circle");
          };
        })(this));
        this.elem.find('.button.square').click((function(_this) {
          return function() {
            return _this.showMessage("square");
          };
        })(this));
      }
      if (indexOf.call(actions, 'allbuttons') >= 0) {
        this.elem.find('.button.r').css({
          display: "inline-block"
        }).click(this.runExit);
      }
      if (indexOf.call(actions, 'arrows') >= 0) {
        mes = this.showMessage;
        this.elem.find('.arrow').show('fade', 1000);
        this.elem.find('.arrow.right').click((function(_this) {
          return function() {
            return _this.gatewrapper.hide('slide', {
              direction: 'left'
            }, 1000, function() {
              return $(this).show('slide', {
                direction: 'left'
              }, 1000, function() {
                return mes("surround");
              });
            });
          };
        })(this));
        return this.elem.find('.arrow.left').click((function(_this) {
          return function() {
            return _this.gatewrapper.hide('slide', {
              direction: 'right'
            }, 1000, function() {
              return $(this).show('slide', {
                direction: 'right'
              }, 1000, function() {
                return mes("surround");
              });
            });
          };
        })(this));
      }
    };

    Exit.prototype.showMessage = function(interaction) {
      this.elem.find('p[data-interaction]').clearQueue().hide();
      return this.elem.find("p[data-interaction='" + interaction + "']").show('fade', 1000).delay(4000).hide('fade', 1000);
    };

    Exit.prototype.runExit = function() {
      var post;
      this.percentage = 100;
      $('.exuent-omnes').show('fade', 1000, post = function() {
        progress.setFlag('incomplete', false);
        sections.aftermath = new Aftermath($('#aftermath'));
        $('.gate.left').hide('slide', {
          direction: 'left'
        }, 1000);
        return $('.gate.right').hide('slide', {
          direction: 'right'
        }, 1000, function() {
          select.updateOptions();
          $('select').val('aftermath');
          return Section.switchTo(sections.aftermath);
        });
      });
      return window.setTimeout(post, 2000);
    };

    return Exit;

  })(Section);

  progress = {
    sections: [],
    achievements: {
      yorda: false,
      fighting: false,
      cagedown: false,
      roomcleared: true,
      cancall: false,
      incomplete: true
    },
    addSection: function(newsection) {
      return progress.sections.push(newsection);
    },
    actions: function() {
      var i, j, len, len1, ref, ref1, results, section;
      ref = this.sections;
      for (i = 0, len = ref.length; i < len; i++) {
        section = ref[i];
        console.log(section.exitAction);
      }
      ref1 = this.sections;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        section = ref1[j];
        results.push(section.exitAction);
      }
      return results;
    },
    yordaAcquired: function() {
      var name, sec;
      progress.achievements.yorda = true;
      for (name in sections) {
        sec = sections[name];
        sec.yordaAcquired();
      }
      return select.updateOptions();
    },
    setFlag: function(flag, value) {
      progress.achievements[flag] = value;
      console.log("Flag " + flag + " set to " + progress.achievements[flag]);
      return select.updateOptions();
    }
  };

  Scrollfall = (function(superClass) {
    extend(Scrollfall, superClass);

    Scrollfall.prototype.requires = ['roomcleared', 'fighting'];

    function Scrollfall(elem1) {
      this.elem = elem1;
      this.darknessFalls = bind(this.darknessFalls, this);
      this.breakcage = bind(this.breakcage, this);
      this.plummet = bind(this.plummet, this);
      this.descendStairs = bind(this.descendStairs, this);
      this.climbStairs = bind(this.climbStairs, this);
      this.extractLine = bind(this.extractLine, this);
      this.makeText = bind(this.makeText, this);
      this.enter = bind(this.enter, this);
      this.run = bind(this.run, this);
      this.wrapper = $(this.elem).find('.wrapstairs');
      this.yorda = this.wrapper.find('p.yorda');
    }

    Scrollfall.prototype.run = function() {
      Scrollfall.__super__.run.call(this, this.makeText);
      return select.updateOptions();
    };

    Scrollfall.prototype.enter = function() {
      return this.elem.show('fade', 1000);
    };

    Scrollfall.prototype.exitAction = "scroll";

    Scrollfall.prototype.yordaAcquired = function() {
      return $('div.gates').append("<div class='aftergate'></div>");
    };

    Scrollfall.prototype.enworden = function(elem) {
      var first, par, space, spans, word, words;
      par = $(elem);
      words = par.text().split(' ');
      first = true;
      spans = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = words.length; i < len; i++) {
          word = words[i];
          space = first ? "" : "&nbsp;";
          first = false;
          results.push("<span class='word'>" + space + word + "</span>");
        }
        return results;
      })();
      par.detach();
      if (spans.length) {
        return $('.wrapstairs').append($("<span class='word pilcrow'>&nbsp;&nbsp;&para;&nbsp;&nbsp;</span>")).append(spans.join(' '));
      }
    };

    Scrollfall.prototype.scrollify = function(elem) {
      var div, divwidth, thismargin;
      div = $(elem);
      divwidth = div.width();
      thismargin = 0;
      $(elem).find('span').each(function() {
        var wid;
        wid = $(this).width();
        if (wid + thismargin > divwidth) {
          thismargin = 0;
          $(this).addClass('newline');
        }
        $(this).css({
          "margin-left": thismargin
        });
        thismargin += wid;
        return $(this).detach().prependTo(div);
      });
      return $('.word').css({
        float: 'left',
        clear: 'left'
      });
    };

    Scrollfall.prototype.makeText = function() {
      var enworden, wrapper;
      enworden = this.enworden;
      wrapper = this.wrapper;
      this.yorda.detach();
      this.elem.data('raw_content', this.wrapper.children().not('.yorda').clone());
      this.wrapper.data('base_height', this.wrapper.height());
      wrapper.find('p').each(function() {
        $(this).detach().prependTo(wrapper);
        return enworden(this);
      });
      this.wrapper.find('.pilcrow').first().detach();
      this.wrapper.wrapInner("<p class='floaty yordan' />");
      this.yordan = $('.yordan');
      this.scrollify(this.yordan);
      this.yorda.prependTo(wrapper).find('span').each(function() {
        return $(this).css({
          "margin-left": $(this).width() / -2
        });
      });
      this.extractLine();
      return this.climbStairs();
    };

    Scrollfall.prototype.extractLine = function() {
      var firstline, linemarker, set;
      linemarker = this.wrapper.find('.newline').last();
      set = linemarker.nextAll('.word');
      this.firstline = firstline = $('<p class="firstline floaty" />');
      set.each(function() {
        $(this).data('margin', $(this).css('margin-left')).css('margin-left', 0);
        return firstline.prepend($(this));
      });
      return this.wrapper.append(this.firstline);
    };

    Scrollfall.prototype.climbStairs = function() {
      var cb, lines;
      this.percentage = 33;
      lines = this.firstline.children().length;
      this.yordan.hide();
      this.yorda.hide();
      this.firstline.children().each(function() {
        return $(this).css({
          left: $(this).data('margin'),
          bottom: '100%',
          position: 'absolute',
          'margin-bottom': '-1em'
        });
      });
      this.firstline.css({
        height: lines * 0.5 + 1 + "em"
      });
      this.wrapper.scrollTop(9999).animate({
        opacity: 1
      }, 1000);
      cb = $.debounce(250, (function(_this) {
        return function() {
          _this.firstline.animate({
            "margin-top": "500px"
          }, 2000, 'easeInQuad');
          return _this.wrapper.animate({
            height: "17em",
            scrollTop: 9999
          }, 2000, 'easeInQuad', function() {
            _this.yordan.show();
            _this.wrapper.scrollTop(9999);
            _this.yorda.show();
            return _this.firstline.delay(10).animate({
              "margin-top": 0
            }, 1000, 'easeOutQuad');
          });
        };
      })(this));
      this.firstline.children().delay(1000).each(function() {
        var token;
        token = lines - $(this).index() - 1;
        return $(this).animate({
          "margin-bottom": -((token * 0.5) + 1) + "em"
        }, 2000, 'easeInCubic', cb);
      });
      this.yorda.click(this.descendStairs);
      return this.wrapper.scroll($.debounce(250, (function(_this) {
        return function() {
          if (_this.wrapper.scrollTop === 0) {
            return _this.percentage = 66;
          }
        };
      })(this)));
    };

    Scrollfall.prototype.descendStairs = function() {
      return this.plummet((function(_this) {
        return function() {
          return _this.breakcage(_this.darknessFalls);
        };
      })(this));
    };

    Scrollfall.prototype.plummet = function(cb) {
      var elembottom, scrollbottom;
      this.yorda.find('span').each(function() {
        var t;
        t = $(this);
        return t.css($.extend(t.offset(), {
          position: 'fixed'
        }));
      });
      $('p.yorda').insertAfter(this.wrapper);
      scrollbottom = this.wrapper.children().last().position().top;
      elembottom = this.wrapper.offset().top + this.wrapper.data('base_height');
      this.yorda.find('span').animate({
        top: elembottom
      }, 2000);
      return this.wrapper.scrollTop(0).animate({
        scrollTop: scrollbottom
      }, 1000, (function(_this) {
        return function() {
          return _this.wrapper.hide('slide', {
            direction: 'up'
          }, 1000, function() {
            $(this).contents().replaceWith($('#scrollfall').data('raw_content'));
            $(this).css({
              height: 'auto'
            });
            $('p.yorda span').each(function() {
              return $(this).css({
                position: 'absolute',
                top: 0
              });
            });
            return $(this).show('slide', {
              direction: 'up'
            }, 1000, cb);
          });
        };
      })(this));
    };

    Scrollfall.prototype.breakcage = function(cb) {
      var cagespan, yorda;
      cagespan = this.yorda.find('.cagespan');
      yorda = this.yorda.find('.caged');
      return cagespan.hide('puff', 500, function() {
        yorda.css({
          position: 'static',
          display: 'inline',
          margin: 0
        }).addClass('visible yorda').removeClass('caged', 1000);
        return window.setTimeout(cb, 2000);
      });
    };

    Scrollfall.prototype.darknessFalls = function() {
      this.percentage = 100;
      sections.combat = new Combat($('#combat'));
      progress.achievements.roomcleared = false;
      progress.setFlag('cagedown', true);
      $('select').val('combat');
      return Section.switchTo(sections.combat);
    };

    return Scrollfall;

  })(Section);

  Button = (function() {
    function Button(elem1) {
      this.elem = elem1;
      this.deactivate = bind(this.deactivate, this);
      this.activate = bind(this.activate, this);
      this.update = bind(this.update, this);
    }

    Button.prototype.update = function() {
      if (progress.achievements.fighting && !sections.combat.complete) {
        return this.activate();
      }
    };

    Button.prototype.activate = function() {
      this.elem.show('slide', 1000);
      return this.elem.click(sections.combat.clearAir);
    };

    Button.prototype.deactivate = function() {
      sections.combat.complete = true;
      this.elem.hide('slide', 1000);
      return this.elem.unbind('click');
    };

    return Button;

  })();

  Combat = (function(superClass) {
    extend(Combat, superClass);

    Combat.prototype.requires = ['cagedown', 'fighting'];

    function Combat(elem1) {
      this.elem = elem1;
      this.finish = bind(this.finish, this);
      this.clearAir = bind(this.clearAir, this);
      this.leave = bind(this.leave, this);
      this.comein = bind(this.comein, this);
      this.enter = bind(this.enter, this);
      this.run = bind(this.run, this);
      this.button = new Button(this.elem.find('img.button'));
    }

    Combat.prototype.complete = false;

    Combat.prototype.colors = ['#222222', '#444444', '#666666', '#888888', '#AAAAAA', '#CCCCCC', '#EEEEEE', '#FFFFFF'];

    Combat.prototype.runcount = 0;

    Combat.prototype.run = function() {
      this.comein();
      return Combat.__super__.run.call(this);
    };

    Combat.prototype.enter = function() {
      this.comein();
      return Combat.__super__.enter.call(this);
    };

    Combat.prototype.comein = function() {
      if (!this.complete) {
        $('#select').addClass('show');
      }
      $("body").addClass("combat");
      return this.button.update();
    };

    Combat.prototype.leave = function(cb) {
      if (cb == null) {
        cb = function() {};
      }
      return $("body").removeClass("combat", 1000, (function(_this) {
        return function() {
          return _this.elem.clearQueue().hide(_this.animation, 1000, cb);
        };
      })(this));
    };

    Combat.prototype.clearAir = function() {
      var color, colors, ps, runcount;
      if (!this.runcount) {
        $('.show').removeClass('show');
      }
      this.runcount += 1;
      runcount = this.runcount;
      colors = this.colors;
      ps = this.elem.find('p:not(.show)');
      if (runcount + 1 >= ps.length) {
        return this.finish();
      } else {
        color = this.colors[runcount + 1];
        this.percentage = 75 * runcount / ps.length;
        ps.each(function(index, element) {
          var target;
          if (index <= runcount) {
            target = index < 2 ? 0 : index - 2;
            console.log("Index: " + index + " | Runcount: " + runcount + " | Target: " + target);
            return $(this).animate({
              color: colors[target]
            }, 250);
          } else if (index > runcount) {
            return $(this).animate({
              color: color
            }, 250);
          }
        });
        return $('.overlay').animate({
          'background-color': color
        }, 250);
      }
    };

    Combat.prototype.finish = function() {
      this.elem.find('p').animate({
        color: "#000"
      }, 1000);
      this.elem.find('.overlay').hide('fade', 1000);
      this.button.deactivate();
      return this.elem.find('.yorda').addClass('visible').click((function(_this) {
        return function() {
          _this.percentage = 100;
          progress.achievements.roomcleared = true;
          progress.yordaAcquired();
          $('select').val('askyorda');
          return Section.switchTo(sections.askyorda);
        };
      })(this));
    };

    return Combat;

  })(Section);

  Aftermath = (function(superClass) {
    extend(Aftermath, superClass);

    function Aftermath() {
      return Aftermath.__super__.constructor.apply(this, arguments);
    }

    Aftermath.prototype.percentage = 100;

    Aftermath.prototype.run = function() {
      return Aftermath.__super__.run.call(this, (function(_this) {
        return function() {
          return _this.elem.find('img, .credits').css({
            opacity: 1
          }).delay(5000).show('fade', 1000);
        };
      })(this));
    };

    Aftermath.prototype.enabled = function() {
      return true;
    };

    return Aftermath;

  })(Section);

  console.log("Beginning main.");

  sections = {
    intro: new Intro($("#intro")),
    surround: new Surround($("#surround")),
    crate: new Crate($("#crate")),
    askyorda: new AskYorda($('#askyorda')),
    exit: new Exit($('#exit')),
    inventory: new Inventory($('#inventory')),
    scrollfall: new Scrollfall($('#scrollfall'))
  };

  startwith = sections.intro;

  select = new Select();

  if (startwith !== sections.intro) {
    select.makeSelect();
  }

  Section.switchTo(startwith);

}).call(this);