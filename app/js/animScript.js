	// var tl = new TimelineMax();
	
	// $('.btn_go').click(function() {
	// 	var tl = new TimelineMax();
	// 	tl.to('#start_bar', 1, {right:-900}).to('#second_bar', 1, {right:0});
	// });

	// $('.btn-next').click(function() {
	// 	var tl = new TimelineMax();
	// 	tl.to('.info_block', 1, {opacity:0}).to('#second_bar', 1, {right:-900}).to('#third_bar', 1, {right:0});
	// });

	// $('#radio1').click(function() {

	// 	tl.to('#btnNext', 0, {opacity:1}).to('#countB', 0, {scale: 0}).to('#countC', 0, {scale: 0}).to('#countA', 1, {scale: 1});

	// 	tl.staggerFromTo('.count__value .letter', 0, {y: 20,opacity: 0,}, {y:0,opacity: 1,ease: Back.easeOut.config(1)},0.05);
	// });

	// $('#radio2').click(function() {
	// 	tl.to('#btnNext', 0, {opacity:1}).to('#countA', 0, {scale: 0}).to('#countC', 0, {scale: 0}).to('#countB', 1, {scale: 1});

	// 	tl.staggerFromTo('.count__value .letter', 1, {y: 20,opacity: 0,}, {y:0,opacity: 1,ease: Back.easeOut.config(1)},0.05);
	// });

	// $('#radio3').click(function() {
		
	// 	tl.to('#btnNext', 0, {opacity:1}).to('#countA', 0, {scale: 0}).to('#countB', 0, {scale: 0}).to('#countC', 1, {scale: 1});

	// 	tl.staggerFromTo('.count__value .letter', 1, {y: 20,opacity: 0,}, {y:0,opacity: 1,ease: Back.easeOut.config(1)},0.05);
	// });


$(document).ready(function(){

	$('.content_block:not(.block-signup) input').click(function(){
		$(this).closest('.content_block').find('.btn_next').addClass('active');
		if($(this).is('[data-statistic-count]') && $(this).is('[data-statistic-text]')){
			answerInfo($(this));
		}
	});

	function answerInfo(elem){
		counterAnimate(elem.data('statistic-count'));
		typeTextAnimate(elem.data('statistic-text'));
		$('.counter_block .counter_value span').html(elem.data('statistic-count'));
		$('.counter_block p').html(elem.data('statistic-text'));
		$('.counter_block').addClass('active');
	};

	function counterAnimate(val) {
		var parseVal = parseFloat(val),
			count = 0;
		var _t = setInterval(function() {
			if(count >= parseVal){
				$('.counter_block .counter_value span').html(val);
				clearInterval(_t);
			}else{
				count += 1;
				$('.counter_block .counter_value span').html(count);
			}
		}, 10);
	};

	function typeTextAnimate(text) {
		var i = 0,
			temporaryText = [];
		var _t = setInterval(function() {
			if(i == text.length){
				clearInterval(_t);
			}else{
				temporaryText[temporaryText.length] = text[i];
				$('.counter_block p').html(temporaryText);
				i++;
			}
		}, 20);
	};
});