/*  
  // hover event property is not working properly
	$("document").ready(function(){
		
		
		$('#cricket').hover(function(){
			
			$('#cricket').hide();
			
			$('<div id="cricketers"></div>').appendTo(".mainContent .news")
											.html("<p>I work because i love and nothing else</p>")
											.css({
												'font-family':'Segoe Script',
												'font-size':'1.3em',
												'text-align':'center',
											});
			$('#cricketers p').css('margin-top','100px');
			
			
						 	
		},function(){
			
		});
		
	});
*/

$("document").ready(function(){
	
	
	$('.newsBox1').hover(function(){
		
		var quoteC = '<p>CRICKET peoples champioin is always a true champion so be that one</p>',
		    quoteF = '<p> Play Like GOD Win Like A Winner </p>'
		
		var position = $(this).css("position"),
			display = $(this).css("display"),
			width = $(this).css("width"),
			height = $(this).css("height"),
			top = $(this).css("top"),
			left = $(this).css("left"),
			overflow = $(this).css("overflow");
		
		$('<div id="cric"></div>').appendTo('.news')
								  .css({
									 'position':position,
									 'display':display,
									 'width':width,
									 'height':height,
									 'top':top,
									 'left':left,
									 'overflow':overflow,
									 'cursor':'pointer'		
									 
								  })
								  .html(quoteC);
		
	},function(){
		
		$('#cric').remove();
		
	});
});