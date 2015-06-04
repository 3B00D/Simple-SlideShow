# Simple-SlideShow
Installation : 
1-load slideshow.css file.
2-load jquery library.
3-load slideshow.js file.
Options :
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
