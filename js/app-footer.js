/* BEGIN SHOW/HIDE MAIN MENU */
$('.menu-button').on('touchstart click', function(e) {
e.preventDefault();

if(e.type == "touchstart") {

	/* touchstart events */
	if($('#menu').hasClass('menu-active'))
	{

		/* enable scroll */
		setTimeout(function(){
			$('body').removeClass('overflow-hidden');
			$('html').removeClass('overflow-hidden');
		},500);

		/* hide overlay div */
		$('#menu-open-overlay').removeClass('menu-open-overlay-active');

		/* page background color */
		$('.menu-open-background').removeClass('menu-open-background-fade');

		/* menu elements */
		setTimeout(function(){
			$("#menu").removeClass("menu-active");
		},100);

		/* content elements */
		$('.wrapper-outer').removeClass('wrapper-outer-active-position');
		$('.wrapper-outer').removeClass('wrapper-outer-active-scale');

		/* show .showing */
		$('.showing').removeClass('showing-hide');

		/* show .post-nav */
		$('.post-nav').removeClass('post-nav-fade');
		$('.post-nav').removeClass('post-nav-hide');

	} else {

		/* toggle overlay div */
		$('#menu-open-overlay').addClass('menu-open-overlay-active');

		/* page background color */
		$('.menu-open-background').addClass('menu-open-background-fade');

		/* content elements */
		$('.wrapper-outer').addClass('wrapper-outer-active-scale');
		$('.wrapper-outer').addClass('wrapper-outer-active-position');

		/* toggle .showing */
		$('.showing').addClass('showing-hide');
		
		/* toggle .post-nav */
		$('.post-nav').addClass('post-nav-fade');
		setTimeout(function(){
			$('.post-nav').addClass('post-nav-hide');
		},500);

		/* menu elements */
		$('#menu').addClass('menu-active');

		/* disable scroll */
		setTimeout(function(){
			$('body').addClass('overflow-hidden');
			$('html').addClass('overflow-hidden');
		},750);

	}

} else if(e.type == "click") {

	/* click events */
	if($('#menu').hasClass('menu-active'))
	{

		/* enable scroll */
		setTimeout(function(){
			$('body').removeClass('overflow-hidden');
			$('html').removeClass('overflow-hidden');
		},500);

		/* hide overlay div */
		$('#menu-open-overlay').removeClass('menu-open-overlay-active');

		/* page background color */
		$('.menu-open-background').removeClass('menu-open-background-fade');

		/* menu elements */
		setTimeout(function(){
			$("#menu").removeClass("menu-active");
		},100);

		/* content elements */
		$('.wrapper-outer').removeClass('wrapper-outer-active-position');
		$('.wrapper-outer').removeClass('wrapper-outer-active-scale');

		/* show .showing */
		$('.showing').removeClass('showing-hide');

		/* show .post-nav */
		$('.post-nav').removeClass('post-nav-fade');
		$('.post-nav').removeClass('post-nav-hide');

	} else {

		/* toggle overlay div */
		$('#menu-open-overlay').addClass('menu-open-overlay-active');

		/* page background color */
		$('.menu-open-background').addClass('menu-open-background-fade');

		/* content elements */
		$('.wrapper-outer').addClass('wrapper-outer-active-scale');
		$('.wrapper-outer').addClass('wrapper-outer-active-position');

		/* toggle .showing */
		$('.showing').addClass('showing-hide');
		
		/* toggle .post-nav */
		$('.post-nav').addClass('post-nav-fade');
		setTimeout(function(){
			$('.post-nav').addClass('post-nav-hide');
		},500);

		/* menu elements */
		$('#menu').addClass('menu-active');

		/* disable scroll */
		setTimeout(function(){
			$('body').addClass('overflow-hidden');
			$('html').addClass('overflow-hidden');
		},750);

	}

}
});
/* END SHOW/HIDE MAIN MENU */

/* BEGIN HIDE WHEN CLICKED/TAPPED OUTSIDE MENU */
$('#menu-open-overlay').on('click', function() {
	
	/* enable scroll */
	setTimeout(function(){
		$('body').removeClass('overflow-hidden');
		$('html').removeClass('overflow-hidden');
	},500);

	/* hide overlay div */
	$('#menu-open-overlay').removeClass('menu-open-overlay-active');
		
	/* page background color */
	$('.menu-open-background').removeClass('menu-open-background-fade');

	/* menu elements */
	$("#menu").removeClass("menu-active");

	/* content elements */
	$('.wrapper-outer').removeClass('wrapper-outer-active-position');
	$('.wrapper-outer').removeClass('wrapper-outer-active-scale');
	
	/* show .showing */
	$('.showing').removeClass('showing-hide');
	
	/* show .post-nav */
	$('.post-nav').removeClass('post-nav-fade');
	$('.post-nav').removeClass('post-nav-hide');

});
/* END HIDE WHEN CLICKED/TAPPED OUTSIDE MENU */

/* BEGIN IE TEXTAREA/FIELD PLACEHOLDER FIX */
(function($) {
  jQuery.fn.placeholder = function() {
    if(typeof document.createElement("input").placeholder == 'undefined') {
      jQuery('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur().parents('form').submit(function() {
        jQuery(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
      })
    });
  }
}
})(jQuery);

jQuery.fn.placeholder();
/* END IE TEXTAREA/FIELD PLACEHOLDER FIX */
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/*
Made with the following:
- jQuery 1.10.2 (https://github.com/jquery/jquery/releases/tag/1.10.2)
- jQuery UI 1.10.4 (http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js)
- jQuery UI Bootstrap 1.0 Alpha (https://github.com/jquery-ui-bootstrap/jquery-ui-bootstrap)
- Twitter Bootstrap 3.1.1 (https://github.com/twbs/bootstrap/releases/tag/v3.1.1)
- jsCustomTest (http://codecanyon.net/item/jscustomtest/6688155)
- Code number pad thanks to http://jsfiddle.net/mplungjan/PdD5U/
- Stop iOS scrolling behind modal dialog thanks to http://stackoverflow.com/a/19779826
- FlowTypeJS 1.1 (https://github.com/simplefocus/FlowType.JS)
- Vibrant 1.2 template (http://themeforest.net/item/vibrant-a-supersharp-template-for-touch-devices/7735248)
- CSS3 Minimalistic Navigation (http://demo.tutorialzine.com/2010/06/css3-minimalistic-navigation-menu/demo.html)
- jQuery UI theme: http://jquit.com/builder/#gcc=ffffff&gcb=d4d4d4&gct=525252&gci=d4d4d4&pcc=d4d4d4&acb=525252&o=ffffff&ghc=00529B&ght=ffffff&ghi=ffffff&gdc=d4d4d4&gdb=d4d4d4&gdt=525252&tdc=00529B&tdb=00529B&tdt=ffffff&tdi=ffffff&ddc=d4d4d4&ddb=d4d4d4&ddt=525252&pxd=000000&asc=00529B&ast=ffffff&goc=00529B&gob=00529B&got=ffffff&toc=00529B&tob=00529B&tot=ffffff&toi=ffffff&doc=00529B&dob=00529B&dot=ffffff&pxa=525252&gac=3399ff&gab=3399ff&gat=ffffff&tac=ffffff&tab=d4d4d4&tat=525252&tai=d4d4d4&dac=3399ff&dab=3399ff&dat=ffffff&dic=d4d4d4&dib=00529B&dit=ffffff&gic=efdca9&gib=efdca9&git=525252&gii=525252&ec=c31d1d&eb=c31d1d&et=ffffff&ei=ffffff
- Remove unwanted focus outlines: http://perishablepress.com/unobtrusive-javascript-remove-link-focus-dotted-border-outlines/
*/

// FlowType

$('body').flowtype({
    minimum : 500,
    maximum : 1200,
    minFont : 9,
    maxFont : 40,
    fontRatio : 90
});