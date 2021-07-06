/* ----------------------------------

Name: custom.js

------------------------------------- */


/*====================================================


	Table of Contents



		01. Pie Charts

			+ Pie Chart Style 01
			+ Pie Chart Style 02
			+ Pie Chart Style 03

		02. Counter

		03. Scroll to top

		04. Loading Screen

*/



jQuery(document).ready(function($) {


	$("form.contact-form").on("submit", function(e){
		e.preventDefault();
		e.stopPropagation();

      $.post({
        url: "/php/contact.php",
        data: {
        	firstname : $("#contact-first-name").val(),
					lastname : $("#contact-last-name").val(),
					email : $("#contact-email").val(),
					message : $("#contact-message").val(),
        }
      }).done(function(result) {
        alert(result.message);
	  });
	});

	$("form.notify-form").on("submit", function(e){
		e.preventDefault();
		e.stopPropagation();

      $.post({
        url: "/php/contact.php",
        data: {
        	name : $("#notify-name").val(),
					email : $("#notify-email").val(),
        }
      }).done(function(result) {
        alert(result.message);
	  });
	});



/*======================

	01. Pie Charts

========================*/


/* Pie Chart Style 01
-------------------------*/


	0<$(".chart-style-1").length&&$(".chart-style-1").easyPieChart( {
		lineCap:"round", barColor:"#444444", trackColor:"transparent", lineWidth:2, size:130, scaleColor:!1, easing:"easeOutBounce", scaleLength:1, animate: {
			duration: 1500, enabled: !0
		}
		, onStep:function(a, b, c) {
			$(this.el).find(".percent").text(Math.round(c))
		}
	}

	);


/* Pie Chart Style 02
-------------------------*/


   0<$(".chart-style-2").length&&$(".chart-style-2").easyPieChart( {
		barColor:"#1769ff", scaleLength:1, lineCap:"round", trackColor:"transparent", scaleColor:!1, easing:"easeOutCirc", lineWidth:18, size:150, animate: {
			duration: 2e3, enabled: !0
		}
		, onStep:function(a, b, c) {
			$(this.el).find(".chart-style-2").text(Math.round(c))
		}
	}

	);



/* Pie Chart Style 03
-------------------------*/


    0<$(".chart-style-3").length&&$(".chart-style-3").easyPieChart( {
		size:200, trackColor:"", lineWidth:2, scaleColor:!1, scaleLength:1, lineCap:"round", easing:"easeOutCirc", barColor:"#232323", animate: {
			duration: 2e3, enabled: !0
		}
		, onStep:function(a, b, c) {
			$(this.el).find(".percent").text(Math.round(c))
		}
	}

	);


/*======================

	02. Counter

========================*/


	$(function() {
		animatecounters()
	});

	function animatecounters() {
		$(".timer").each(function(a) {
			var b = $(this);
			a = $.extend({}, a || {}, b.data("countToOptions") || {}), b.countTo(a)
		})
	}
	$(".timer").appear(), $(document.body).on("appear", ".timer", function() {
		$(this).hasClass("appear") || (animatecounters(), $(this).addClass("appear"))
	});


/*======================

	03. Scroll to top

========================*/


	$(window).scroll(function() {
		50 <= $(this).scrollTop() ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
	}), $("#return-to-top").on("click", function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	});



/*======================

	04. Loading Screen

========================*/


	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);



});
