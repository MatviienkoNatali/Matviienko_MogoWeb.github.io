$(document).ready(function(){

	$('.accordion-bl').on('click', function(){
		//скрываем все кроме того, что должны открыть
		$('.accordion-bl').removeClass('accordion-active');
		$(this).addClass('accordion-active');

		$('.accordion-text').not($(this).next()).slideUp(300);
		// открываем или скрываем блок под заголовком, по которому кликнули
		$(this).next().slideDown(300);
	});
 


var show = true;
    var countbox = ".statistic-bl";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.number').css('opacity', '1');
            $('.number').spincrement({
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });


$('.menu-btn').on('click', function(){
	$('.menu').slideToggle(300).toggleClass('active');
	
	
});

});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-btn").length) {
    $('.menu').hide();
  }
  e.stopPropagation();
});


