(function($) {

	// jQuery slideshow plugin definition
	$.fn.slideshow = function(params) {
		var defaults={
			PlayOnHover:true,// should the plugin work on hover event?
			PlayOnOut:false, // should the plugin work on mouse out event? contrary with the PlayOnHover option.
			PlayOnClick:false,// should the plugin work on click event. contrary with PlayOnHover and PlayOnOut.
			NextSlideDelegate:false,// if the PlayOnClick is true then we can set this to the element which will trigger the next slide.
			Speed:1800,// The speed of recalling the interval of the next slide. this option should be calculated with respect to FadeInSpeed and FadeOutSpeed options.
			FadeInSpeed:500,// the speed of fade in animation.
			FadeOutSpeed:500,// the speed of fade out animation.
			DelayedStart:false,// should the plugin work on the first hover? or should it wait until the first interval passed.(usable when applying PlayOnHover option).
			childType:"div",//  the child selector which will be animated. (this child should be absolute positioned).
			OnSlidingDone:false// function to be executed after slideing finished.
		}
		// merge default and user parameters
		params = $.extend( defaults, params);
		var tobj=this;
		params.PlayOnHover=!params.PlayOnOut;
		// traverse all nodes
		return tobj.each(function() {
			// express a single node as a jQuery object
			var $t = $(this);
			// find first level of children
			var slides=$t.find(params.childType);
			
			var slidingInterval=null;
			var StopInterval = function (){
				if(slidingInterval!=null){
					clearInterval(slidingInterval);
					slidingInterval=null;
				}
			}
			var StartInterval=function (){
				if(slidingInterval==null){
					slidingInterval=setInterval(function (){MoveToNext();},params.Speed);
				}
			}
			function SetCurrentlyPlayedImg($slide){
				$slide.addClass("slideshow-current-slide");
			}
			function UnsetCurrentPlayedImg($slide){
				$slide.removeClass("slideshow-current-slide");
			}
			var MoveToNext=function (){
				if(slides.length>0){
					
					var currently_played=slides.filter(".slideshow-current-slide");
					if(currently_played.length==0){
						SetCurrentlyPlayedImg($(slides[0]));
					}
					currently_played=slides.filter(".slideshow-current-slide");
					var next_played = currently_played.next();
					if(next_played.length==0){
						next_played=$(slides[0]);
					}
					UnsetCurrentPlayedImg(currently_played);
					currently_played.animate({"opacity":0.0},function (){
						next_played.animate({"opacity":1.0},params.FadeInSpeed,function (){
							SetCurrentlyPlayedImg(next_played);
							if(typeof(params.OnSlidingDone)=="function"){
								params.OnSlidingDone(next_played);
							}
						});
					});
					
				}
			}
			
			// dont do anything if the slides are less that 2 slides.
			if(slides.length>1)
			{
				// if the plugin should work on click.
				if(params.PlayOnClick){
					var clicky_obj=tobj;
					if(params.NextSlideDelegate!=false){
						clicky_obj=params.NextSlideDelegate;
					}
					clicky_obj.on("click",function (){
						MoveToNext();
					});
				}else{// if the plugin should work and stop on hovering and mouse out.
					$t.hover(function (){
						if(!params.DelayedStart&&params.PlayOnHover){
							MoveToNext();
							
						}
						if(params.PlayOnHover){
							StartInterval();
						}else{
							StopInterval();
						}
					},function (){
						if(!params.DelayedStart&&params.PlayOnOut){
							MoveToNext();
						}
						if(params.PlayOnOut){
							StartInterval();
						}else{
							StopInterval();
						}
					});
				}
				slides.css("opacity","0").eq(0).css("opacity","1").addClass("slideshow-current-slide");
			}
			
		});
		
	};

})(jQuery);