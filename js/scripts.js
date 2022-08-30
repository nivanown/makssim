$(document).ready(function(){
	
	/*- main-navi-btn -*/
	var siteToggle = $('.main-navi-btn'),
		layer=$('.site__layer'),
		siteMenu= $('.header__right-col');

	siteToggle.on('click', function(){
		layer.toggleClass('active');
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hidden');
	});
	
	$('.site__layer').on('click', function(){
		layer.removeClass('active');
		siteToggle.removeClass('collapsed');
		siteMenu.removeClass('show');
		$('body').removeClass('overflow-hidden');
	});

	/*- view-all -*/
	$('.view-all').on('click', function(e) {
    	$('.brand-list__item.close').slideToggle(function() {
    		console.log($(e.target).is(':visible'));
        $(e.target).text($(this).is(':visible') ? 'HIDE' : 'VIEW ALL');
    	});
  	});

  	/*- rate -*/
	$('.rate').raty({ score: 4 });

	/*- more -*/
	$('.more').on('click', function(e) {
    	$('.text-hidden').slideToggle(function() {
    		console.log($(e.target).is(':visible'));
        $(e.target).text($(this).is(':visible') ? 'HIDE' : 'VIEW ALL');
    	});
  	});

  	$('.product-info__slider__big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-info__slider__small'
	});
	$('.product-info__slider__small').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-info__slider__big',
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});

});











