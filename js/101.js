//============================== header =========================
jQuery(document).ready(function(){
	"use strict";
	$(window).load(function(){
		$('.body-wrapper').each(function(){
			var header_area = $('.header');
			var main_area = header_area.children('.navbar');

			var logo = main_area.find('.navbar-header');
			var navigation = main_area.find('.navbar-collapse');
			var original = {
				nav_top: navigation.css('margin-top')
			};

			$(window).scroll(function(){
				if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() == 0 || $(this).width() < 750)){
					main_area.removeClass('bb-fixed-header').appendTo(header_area);
					navigation.animate({'margin-top': original.nav_top}, {duration: 100, queue: false, complete: function(){
						header_area.css('height', 'auto');
					}});
				}else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
					$(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top')) ){

					header_area.css('height', header_area.height());
					main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
					main_area.appendTo($('body')).animate({'opacity': 1});

					navigation.css({'margin-top': '0px'});
				}
			});
		});

		$(window).trigger('resize');
		$(window).trigger('scroll');
	});

});
//============================== SELECT BOX =========================
jQuery(document).ready(function() {
	$('.select-drop').selectbox();
});
//============================== SEARCH =========================
jQuery(document).ready(function(){
	$('.searchBox a').on("click",function() {
	    $(".searchBox .dropdown-menu").toggleClass('display-block');
	    $(".searchBox a i").toggleClass('fa-close').toggleClass("fa-search");
	});
});
//============================== ALL DROPDOWN ON HOVER =========================
	if($('.navbar').width() > 1007)
	  {
	    $('.nav .dropdown').on('mouseover', function() {
	          $(this).addClass('open');
	      }),
	    $('.nav .dropdown').on('mouseleave', function() {
	          $(this).removeClass('open');
	      });
	  }

	$('.nav-category .dropdown-submenu ').hover(function() {
    	$(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
		//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================

		    var allIcons = $("#faqAccordion .panel-heading i.fa");
		    $('#faqAccordion .panel-heading').click(function(){
		      allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		    });

		    var allIconsOne = $("#accordionOne .panel-heading i.fa");
		    $('#accordionOne .panel-heading').click(function(){
		      allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		    });

		    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
		    $('#accordionTwo .panel-heading').click(function(){
		      allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		    });

		    var allIconsThree = $("#togglesOne .panel-heading i.fa");
		    $('#togglesOne .panel-heading').click(function(){
		      allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		    });

		    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
		    $('#togglesTwo .panel-heading').click(function(){
		      allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		    });

		    $(function () {
			  $('[data-toggle="tooltip"]').tooltip()
			})

			$(document).ready(function(){
			  $(document).on('hidden.bs.modal', function () {
			    if ($('.modal').is(':visible')) $('body').addClass('modal-open');
			  });
			});
