# Simple-SlideShow
Demo available on [Demo Page](http://3b00d.github.io/Simple-SlideShow/demo/)
##Installation : 
1. load slideshow.css file.
1. load jquery library.
1. load slideshow.js file.
1. append slideshow-container css class to the slideshow container element.
1. append slideshow-single-slide css class to each slideshow in the container.
##Options :

* **PlayOnHover:true**
 _should the plugin work on hover event?_
* **PlayOnOut:false**
 _should the plugin work on mouse out event? contrary with the PlayOnHover option._
* **PlayOnClick:false**
 _should the plugin work on click event. contrary with PlayOnHover and PlayOnOut._
* **NextSlideDelegate:false**
 _if the PlayOnClick is true then we can set this to the element which will trigger the next slide._
* **Speed:1800**
 _The speed of recalling the interval of the next slide. this option should be calculated with respect to FadeInSpeed and FadeOutSpeed options._
* **FadeInSpeed:500**
 _the speed of fade in animation._
* **FadeOutSpeed:500**
 _the speed of fade out animation._
* **DelayedStart:false**
 _should the plugin work on the first hover? or should it wait until the first interval passed.(usable when applying PlayOnHover option)._
* **childType:"div"**
 _the child selector which will be animated. (this child should be absolute positioned)._
* **OnSlidingDone:false**
 _function to be executed after slideing finished._
