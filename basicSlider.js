$(function(){
	
	var width=1000,
		animationSpeed=2000,
		pause=3000,
		currentSlide=1;
		
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
		
    
	var interval;

		function startSlider(){
								
									interval=setInterval(function(){
										$slideContainer.animate({'margin-left':'-=' +width},animationSpeed,function(){
											currentSlide++;
											if(currentSlide === $slides.length){
												currentSlide=1;
												$slideContainer.css('margin-left',0);
											}
											
										});
									},pause);
	
								}
		function stopSlider() {
			clearInterval(interval);
		}						
	
	$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);
	startSlider();
	
});