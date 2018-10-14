!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=3)}([function(n,t,e){"use strict";var r,o=function(n){return document.createElement(n)},i=[],u=function(n,t){var e=Date.now()+n,o={start:e,end:e+t};i.push(o),r||(r=!0,requestAnimationFrame(a));var u={start:function(n){return o.startcb=n,u},progress:function(n){return o.progresscb=n,u},end:function(n){return o.endcb=n,u}};return u};function a(){var n=Date.now();if(i.length){for(var t,e=0;e<i.length;e++)if(!(n<(t=i[e]).start)){t.started||(t.started=!0,t.startcb&&t.startcb());var o=(n-t.start)/(t.end-t.start);t.progresscb&&t.progresscb(o<1?o:1),n>t.end&&(t.endcb&&t.endcb(),i.splice(e--,1))}requestAnimationFrame(a)}else r=!1}window.requestAnimationFrame||(window.requestAnimationFrame=function(n){setTimeout(n,0)});var c,d,f={linear:function(n){return n},quadIn:function(n){return n*n},quadOut:function(n){return n*(2-n)},quadInOut:function(n){return n<.5?2*n*n:(4-2*n)*n-1},cubicIn:function(n){return n*n*n},cubicOut:function(n){return--n*n*n+1},cubicInOut:function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},quartIn:function(n){return n*n*n*n},quartOut:function(n){return 1- --n*n*n*n},quartInOut:function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},quintIn:function(n){return n*n*n*n*n},quintOut:function(n){return 1+--n*n*n*n*n},quintInOut:function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},s=function(){return window.getComputedStyle(document.body).getPropertyValue("font-size").slice(0,-2)},l={deck:function(n){n.bysuit=n.queued(function(t){var e=n.cards;c=s(),e.forEach(function(n){n.bysuit(function(n){n===e.length-1&&t()})})})},card:function(n){var t=n.rank,e=n.suit;n.bysuit=function(r){var o=n.i,i=10*o;n.animateTo({delay:i,duration:400,x:-Math.round(8*(6.75-t)*c/16),y:-Math.round(92*(1.5-e)*c/16),rot:0,onComplete:function(){r(o)}})}}},h={deck:function(n){n.fan=n.queued(function(t){var e=n.cards,r=e.length;d=s(),e.forEach(function(n,o){n.fan(o,r,function(n){n===e.length-1&&t()})})})},card:function(n){var t=n.$el;n.fan=function(e,r,o){var i=e/4,u=10*e,a=e/(r-1)*260-130;n.animateTo({delay:u,duration:300,x:-i,y:-i,rot:0}),n.animateTo({delay:300+u,duration:300,x:55*Math.cos(m(a-90))*d/16,y:55*Math.sin(m(a-90))*d/16,rot:a,onStart:function(){t.style.zIndex=e},onComplete:function(){o(e)}})}}};function m(n){return n*Math.PI/180}var p,y=document.createElement("p").style,b={},v=function(n){if(void 0!==b[n])return b[n];if(void 0!==y[n])return b[n]=n,n;for(var t,e=n[0].toUpperCase()+n.slice(1),r=["webkit","moz","Moz","ms","o"],o=0,i=r.length;o<i;o++)if(void 0!==y[t=r[o]+e])return b[n]=t,t},w=function(n,t,e){return void 0!==p||(p=function(){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return!1;var n=v("transform"),t=document.createElement("p");return document.body.appendChild(t),t.style[n]="translate3d(1px,1px,1px)",p=null!=(p=t.style[n])&&p.length&&"none"!==p,document.body.removeChild(t),p}()),e=e||0,p?"translate3d("+n+", "+t+", "+e+")":"translate("+n+", "+t+")"};var g,x,k={deck:function(n){n.intro=n.queued(function(t){var e=n.cards;e.forEach(function(n,r){n.setSide("front"),n.intro(r,function(r){u(250,0).start(function(){n.setSide("back")}),r===e.length-1&&t()})})})},card:function(n){var t=v("transform"),e=n.$el;n.intro=function(r,o){var i=500+10*r,u=r/4;e.style[t]=w(-u+"px","-250px"),e.style.opacity=0,n.x=-u,n.y=-250-u,n.rot=0,n.animateTo({delay:i,duration:1e3,x:-u,y:-u,onStart:function(){e.style.zIndex=r},onProgress:function(n){e.style.opacity=n},onComplete:function(){e.style.opacity="",o&&o(r)}})}}},O={deck:function(n){n.poker=n.queued(function(t){var e=n.cards,r=e.length;g=s(),e.slice(-5).reverse().forEach(function(n,e){n.poker(e,r,function(e){n.setSide("front"),4===e&&t()})})})},card:function(n){var t=n.$el;n.poker=function(e,r,o){var i=250*e;n.animateTo({delay:i,duration:250,x:Math.round(70*(e-2.05)*g/16),y:Math.round(-110*g/16),rot:0,onStart:function(){t.style.zIndex=r-1+e},onComplete:function(){o(e)}})}}},q=function(n){for(var t,e,r=n.length-1;r;r--)t=Math.random()*r|0,e=n[r],n[r]=n[t],n[t]=e;return n},j={deck:function(n){n.shuffle=n.queued(function(t){var e=n.cards;return x=s(),q(e),void e.forEach(function(n,r){n.pos=r,n.shuffle(function(n){n===e.length-1&&t()})})})},card:function(n){var t=n.$el;n.shuffle=function(e){var r=n.pos,o=r/4,i=2*r;n.animateTo({delay:i,duration:200,x:function(n){return(Math.round(Math.random())?-1:1)*n}(40*Math.random()+20)*x/16,y:-o,rot:0}),n.animateTo({delay:200+i,duration:200,x:-o,y:-o,rot:0,onStart:function(){t.style.zIndex=r},onComplete:function(){e(r)}})}}},S=function(n){n||(n={});var t={};return n.on=function(n,e,r){t[n]||(t[n]=[]),t[n].push({cb:e,ctx:r})},n.one=function(n,e,r){t[n]||(t[n]=[]),t[n].push({cb:e,ctx:r,once:!0})},n.off=function(n,e){if(!n)return void(t={});if(!e)return void(t[n]=[]);t[n]=t[n].filter(function(n){return n.cb!==e})},n.trigger=function(n){var e=this,r=Array.prototype.slice(arguments,1);(t[n]||[]).filter(function(n){return n.cb.apply(e,r),!n.once})},n},C=function(n){var t=Array.prototype,e=[];return n.queue=r,n.queued=function(n){return function(){var e=this,o=arguments;r(function(r){n.apply(e,t.concat.apply(r,o))})}},n;function r(n){n&&(e.push(n),1===e.length&&function n(){e[0](function(t){if(t)throw t;(e=e.slice(1)).length&&n()})}())}},D=52,M=function(n){var t,e=v("transform"),r=n%13+1,i=n/13|0,a=(52-n)/4,c=o("div"),d=o("div"),s=o("div"),l=!1,h=!1,m={i:n,rank:r,suit:i,pos:n,$el:c,mount:function(n){n.appendChild(c),m.$root=n},unmount:function(){m.$root&&m.$root.removeChild(c),m.$root=null},setSide:function(n){"front"===n?("back"===m.side&&c.removeChild(s),m.side="front",c.appendChild(d),m.setRankSuit(m.rank,m.suit)):("front"===m.side&&c.removeChild(d),m.side="back",c.appendChild(s),c.setAttribute("class","card"))}},p=T.modules;for(t in d.classList.add("face"),s.classList.add("back"),c.style[e]=w(-a+"px",-a+"px"),m.x=-a,m.y=-a,m.z=a,m.rot=0,m.setSide("back"),I(c,"mousedown",b),I(c,"touchstart",b),p)y(p[t]);return m.animateTo=function(n){var t,r,o,i,a,d,{delay:s,duration:l,x:h=m.x,y:p=m.y,rot:y=m.rot,ease:b,onStart:v,onProgress:g,onComplete:x}=n;u(s,l).start(function(){t=m.x||0,r=m.y||0,o=m.rot||0,v&&v()}).progress(function(n){var u=f[b||"cubicInOut"](n);i=h-t,a=p-r,d=y-o,g&&g(n,u),m.x=t+i*u,m.y=r+a*u,m.rot=o+d*u,c.style[e]=w(m.x+"px",m.y+"px")+(d?"rotate("+m.rot+"deg)":"")}).end(function(){x&&x()})},m.setRankSuit=function(n,t){var e=function(n){return 0===n?"spades":1===n?"hearts":2===n?"clubs":3===n?"diamonds":"joker"}(t);c.setAttribute("class","card "+e+" rank"+n)},m.setRankSuit(r,i),m.enableDragging=function(){l||(l=!0,c.style.cursor="move")},m.enableFlipping=function(){h||(h=!0)},m.disableFlipping=function(){h&&(h=!1)},m.disableDragging=function(){l&&(l=!1,c.style.cursor="")},m;function y(n){n.card&&n.card(m)}function b(n){var t={},r={},o=Date.now();function i(n){l&&("mousemove"===n.type?(r.x=n.clientX,r.y=n.clientY):(r.x=n.touches[0].clientX,r.y=n.touches[0].clientY),c.style[e]=w(Math.round(m.x+r.x-t.x)+"px",Math.round(m.y+r.y-t.y)+"px")+(m.rot?" rotate("+m.rot+"deg)":""))}function u(n){h&&Date.now()-o<200&&m.setSide("front"===m.side?"back":"front"),"mouseup"===n.type?(E(window,"mousemove",i),E(window,"mouseup",u)):(E(window,"touchmove",i),E(window,"touchend",u)),l&&(m.x=m.x+r.x-t.x,m.y=m.y+r.y-t.y)}n.preventDefault(),"mousedown"===n.type?(t.x=r.x=n.clientX,t.y=r.y=n.clientY,I(window,"mousemove",i),I(window,"mouseup",u)):(t.x=r.x=n.touches[0].clientX,t.y=r.y=n.touches[0].clientY,I(window,"touchmove",i),I(window,"touchend",u)),l&&(c.style[e]=w(m.x+"px",m.y+"px")+(m.rot?" rotate("+m.rot+"deg)":""),c.style.zIndex=D++)}};function I(n,t,e){n.addEventListener(t,e)}function E(n,t,e){n.removeEventListener(t,e)}function T(n){var t,e,r,i=new Array(n?55:52),u=o("div"),a=S({mount:function(n){(t=n).appendChild(u)},unmount:function(){t.removeChild(u)},cards:i,$el:u}),c=T.modules;for(e in C(a),c)f(c[e]);u.classList.add("deck");for(var d=i.length;d;d--)(r=i[d-1]=M(d-1)).setSide("back"),r.mount(u);return a;function f(n){n.deck&&n.deck(a)}}T.animationFrames=u,T.ease=f,T.modules={bysuit:l,fan:h,intro:k,poker:O,shuffle:j,sort:{deck:function(n){n.sort=n.queued(function(t,e){var r=n.cards;r.sort(function(n,t){return e?n.i-t.i:t.i-n.i}),r.forEach(function(n,o){n.sort(o,r.length,function(n){n===r.length-1&&t()},e)})})},card:function(n){var t=n.$el;n.sort=function(e,r,o,i){var u=e/4,a=10*e;n.animateTo({delay:a,duration:400,x:-u,y:-150,rot:0,onComplete:function(){t.style.zIndex=e}}),n.animateTo({delay:a+500,duration:400,x:-u,y:-u,rot:0,onComplete:function(){o(e)}})}}},flip:{deck:function(n){n.flip=n.queued(function(t,e){var r=n.cards.filter(function(n){return"front"===n.side}).length/n.cards.length;n.cards.forEach(function(n,t){n.setSide(e||(r>.5?"back":"front"))}),t()})}}},T.Card=M,T.prefix=v,T.translate=w,e.d(t,"e",function(){return P}),e.d(t,"k",function(){return $}),e.d(t,"j",function(){return H}),e.d(t,"d",function(){return z}),e.d(t,"c",function(){return F}),e.d(t,"h",function(){return A}),e.d(t,"a",function(){return _}),e.d(t,"i",function(){return B}),e.d(t,"l",function(){return L}),e.d(t,"f",function(){return X}),e.d(t,"g",function(){return Y}),e.d(t,"b",function(){return R});var P=T(),$=new _,z=new _,A=document.getElementById("container"),H=document.getElementById("playerHand"),F=document.getElementById("dealerHand");function _(){this.cards=[],this.draw=function(n){return!Y(n)&&(this.cards.push(X(n)),!0)},this.mountHand=function(n,t){var e=1,r=this.cards.length;this.cards.forEach(function(o,i){o.mount(n),o.setSide(t),o.enableDragging(),o.animateTo({delay:200,duration:500,x:e/r*window.innerWidth-window.innerWidth/2}),e+=1})},this.unmountHand=function(n){this.cards.forEach(function(t,e){t.unmount(n)})}}function B(n){return n.cards.length}function L(n){return n.cards[B(n)-1]}function X(n){return n.cards.pop()}function Y(n){return 0===B(n)}function R(n,t){for(;!Y(t);)n.cards.push(X(t))}P.mount(A),P.shuffle()},,,function(n,t,e){"use strict";e.r(t);var r=e(0),o=chai.assert;describe("Deck",function(){var n;before(function(){n=Deck()}),it(" should have 52 cards.",function(){o.equal(Object(r.i)(n),52,"Deck has "+n.length+" cards.")}),it("will return top card in deck without removing it.",function(){var t=n.cards[n.cards.length-1],e=Object(r.l)(n);o.equal(t,e,"Top cards not the same investigate further "+t+" "+e+".")}),it(" will be able to draw top card from deck.",function(){var t=Object(r.l)(n),e=Object(r.f)(n);o.equal(t,e,"Top card and drawn card were not equal "+t+" "+e),o.equal(Object(r.i)(n),51,"Number of cards in deck should have gone to 51 but it is actually "+Object(r.i)(r.e)+".")}),it(" will validate when it is empty.",function(){for(o.equal(Object(r.g)(n),!1,"Deck incorrectly thinks it is empty.");Object(r.i)(n)>0;)Object(r.f)(n);o.equal(Object(r.g)(n),!0,"Deck incorrectly think it is not empty.")})}),describe("Container",function(){it(" should have a child div with class of Deck.",function(){o.equal($("#container").children(":first").attr("class"),"deck","container's first element is not deck.")})}),describe("Player hand",function(){var n,t;before(function(){(n=Deck()).shuffle(),t=new r.a}),it(" should be empty.",function(){o.equal(Object(r.i)(r.k),0,"playerHand has cards within it.")}),it(" will be able to add card to its hand.",function(){var e=Object(r.l)(n),i=t.draw(n);o.equal(Object(r.l)(t),e,"Player did not take card from top of deck."),o.equal(i,!0,"Draw card was not successful."),o.equal(Object(r.i)(n),51,"Deck size did not reduce by card drawn"),o.notEqual(Object(r.l)(n),Object(r.l)(t),"Top card was not removed from deck for draw")}),it(" will be able to mount cards to the screen.",function(){t.mountHand(r.j,"front"),o.equal(Object(r.i)(t),$("#playerHand").children().length,"The number of cards aren't equal to the DOM.")}),it(" will unmount the cards from the screen.",function(){t.unmountHand(r.j),o.equal(0,$("#playerHand").children().length,"The number of cards aren't equal to the DOM.")}),it(" will add the cards from the hand back to the deck.",function(){Object(r.b)(n,t),o.equal(52,Object(r.i)(n),"Cards in deck not returned to max."),o.equal(0,Object(r.i)(t),"Player did not remove cards from hand.")}),it(" will not be able to add card when deck is empty.",function(){for(var e=Object(r.i)(t);Object(r.i)(n)>0;)Object(r.f)(n);var i=t.draw(n);o.equal(i,!1,"Draw occurred when it should not have."),o.equal(Object(r.i)(n),0,"Deck is not empty as it should."),o.equal(e,Object(r.i)(t),"Hand changed size after draw.")})}),describe("Dealer hand",function(){it(" should be empty.",function(){o.equal(Object(r.i)(r.d),0,"delearHand has cards within it.")})})}]);
//# sourceMappingURL=prepareGameTest.bundle.js.map