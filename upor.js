'use strict';

const UPOR = (el,duration,offset) => {

	 let scrollToTop = function() {

	  var scrollStep = -window.scrollY / (scrollDuration / 10);

	  var scrollInterval = setInterval(function(){
	    if ( window.scrollY != 0 ) {
	        window.scrollBy( 0, scrollStep );
	    }
	    else clearInterval(scrollInterval); 
	 },10);
	}

	let scrollDuration = duration;
	el.addEventListener("click", scrollToTop.bind(duration));

	window.addEventListener('scroll', () => {
		if(document.body.scrollTop > offset || document.documentElement.scrollTop > offset){
			const STYLE = {
				opacity : '1',
				transform : 'translateY(0)',
				visibility : 'visible'
			}
			Object.assign(el.style, STYLE);
		}else{
			const STYLE = {
				opacity : '0',
				transform : 'translateY(100%)',
				visibility : 'hidden'
			}
			Object.assign(el.style, STYLE);
		}
	})
}