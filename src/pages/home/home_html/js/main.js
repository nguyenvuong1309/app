var notifyOptions = {
  effect: "fade",
  speed: 300,
  showCloseButton: true,
  autoclose: true,
  autotimeout: 5000,
  gap: 20,
  distance: 20,
  position: "right top",
};

$(document).ready(function(){
	new WOW().init();	

	action_page();

	$(window).scroll(function() {
		action_page();
	});

	$("a").on("click",function(e){
		if(""!==this.hash){
			e.preventDefault();
			var i=this.hash;
			$("html, body").animate({scrollTop:$(i).offset().top - 80},1e3,function(){})
		}
	});

	$('button.toggle').click(function(event) {
		$(this).toggleClass("active");
		$( ".rd-menu" ).toggleClass('active', $(this).hasClass('active'));

    if($('.rd-menu').hasClass('active')) {
      $('.rd-menu').slideDown()
    } else {
      $('.rd-menu').slideUp()
    }
	});

	$(".scroll-to-target").on('click', function() {
    var target = $(this).attr('data-target');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1500);
	});

  $(".house-sidebar__field").on('click', '.house-sidebar__field--showmore', function() {
    var $framField = $(this).closest('.house-sidebar__field').find('.house-sidebar__field--frame')
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $framField.removeClass('hidden').slideDown(200);
      $(this).find('.more-label').html('fewer');
    } else {
      $(this).addClass('active');
      $(this).find('.more-label').html('more');
      $framField.addClass('hidden').slideUp(200);
    }
	});

  var $input = $('.form-group__content input')
  $input.on('input', function() {
    if ($(this).val() != '') {
      $(this).closest('.form-group__content').addClass('typing');
    } else {
      $(this).closest('.form-group__content').removeClass('typing');
    }
  });

  $('.form-group__content .clearVal').click(function() {
    $(this).closest('.form-group__content').find('input').val('');
    $(this).closest('.form-group__content').removeClass('typing');
  })  

  // popup
  $(document).on('click', function () {
    $('.popup, .popup-required, .house-sidebar').removeClass('active');
  });

  $('.popup-frame, .open-popup, .button-filter, .house-sidebar').click(function(e) {
    e.stopPropagation();
  });

  $('.open-popup').on('click', function () {
    $('.popup-house').addClass('active');
  });
  
  $('.popup-close').on('click', function () {
    $('.popup').removeClass('active');
  });
  
  // select2
  $(".isSelect2").select2({});
  
  // lazy load
	$('.lazy').lazy();

  // slick
	$('.house-list .item-thumb__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true,
  });

  $('.box-testimonial .box-testimonial__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: true,
    responsive: [
     {
        breakpoint: 1315,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

function action_page() {
	// $top_height = $('.header').height();
	$top_height = 0;
	if($(window).scrollTop() > $top_height){
		$('header').addClass('stick');
		$('.main_menu').addClass('stick');
	}else{
		$('header').removeClass('stick');
		$('.main_menu').removeClass('stick');
	}

	if($(this).scrollTop() >= 200){
		$('.scroll-to-target').addClass('active');
	}else{
		$('.scroll-to-target').removeClass('active');
	}
}

function action_add_cart() {
    var totalOffset =  $("#detail_add_cart").offset().top;
    var height_box_cart = $('.sticky-add-to-cart').height();
    var nFilter = document.getElementById('footer');
    if($(window).scrollTop() >= totalOffset){
      $('.sticky-add-to-cart').addClass('sticky-add-to-cart--active');
      var styles = {
        'padding-bottom': height_box_cart +'px'
      }
      addStyles(nFilter,styles);
    }else{
      var styles = {
        'padding-bottom': 0
      }
      $('.sticky-add-to-cart').removeClass('sticky-add-to-cart--active');
      addStyles(nFilter,styles);
    }
}

function addStyles(element,styles){
  for(id in styles){
    element.style[id] = styles[id];
  }
}
function register(form, param) {

	var uri = url + "/gui-lien-he";
	var email_regex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

	if(param.fullname == "") {
		$(form + ' input[name="fullname"]').addClass('error');
		$(form + ' input[name="fullname"]').focus();
		return false;
	}else{
		$(form + ' input[name="fullname"]').removeClass('error');
	}
	if(param.phone == "") {
		$(form + ' input[name="phone"]').addClass('error');
		$(form + ' input[name="phone"]').focus();
		return false;
	}else{
		$(form + ' input[name="phone"]').removeClass('error');
	}
	if(!email_regex.test(param.from_email) && param.from_email != "") {
		$(form + ' input[name="from_email"]').addClass('error');
		$(form + ' input[name="from_email"]').focus();
		return false;
	}else{
		$(form + ' input[name="from_email"]').removeClass('error');
	}

	$(form + ' #loading').fadeIn('fast');
	$.post(uri, param, function(data){
			$(form + ' #loading').fadeOut('fast');
			if(data == "true") {
				$(form + " .notice.success").slideDown('slow').delay(3000).slideUp('slow');
				clear_form();
			} else {
				$(form + " .notice.error").slideDown('slow').delay(3000).slideUp('slow');
			}
			clear_form(form);
	});
}

function clear_form(form = '') {
	$(form + ' input[name="fullname"]').val('');
	$(form + ' input[name="phone"]').val('');
	$(form + ' input[name="from_email"]').val('');
	$(form + ' textarea[name="content"]').val('');
}

// click cart
function clickCart(_obj,price, qty, attr_id, _s){
  var self = $(_obj);
  if( self.hasClass('disable') ){
    return false;
  }

  $('.btn-buy-product').addClass('disable');
  var parent  = $(_obj);
  var code    = $(_obj).attr('code'); 
  var img     = $(_obj).attr('ref'); 
  
  if ($(window).width() > 1000)
  	var cart = $('.main_menu .plugin-cart');
  else 
  	var cart = $('.rd-panel .plugin-cart');

  $("<img/>", {
    class: "item-fly-product",
    src: img
  }).appendTo("body").css({
    'top':parent.offset().top,
    'left':parent.offset().left+parent.width() - 50
  });

  setTimeout(function(){
    $(document).find('.item-fly-product').css({
      'top': cart.offset().top,
      'left': cart.offset().left
    });
    setTimeout(function(){
      $(document).find('.item-fly-product').remove();
          
      $('.btn-buy-product').removeClass('disable');
      
      $.ajax({
        url: 			url + "/cap-nhat-gio-hang",
        type: 		"post",
        dataType: "html",
        data: {
			itemAction:'add',itemPrice: price, itemQuantity: qty, itemID:code, itemAtributes_id:attr_id, itemProduct: _s
        },
        success: function (result){
          $.post(url + "/xem-gio-hang", null, function(cart){
            $('.cart-total-items').html(cart.cart_total_items);
          }, "json");
        }
      });
    },1200)
  }, 500);

  return false;
}
function buyNow(_obj,qty,quality,attr_id=null) {
  var product_id    = $(_obj).attr('code'); 
  uri = url + '/mua-ngay/' + product_id+ '/' + qty+'/' + quality+ '/' +attr_id;
  window.location.href = uri ;
}

$(window).on('load', function() {
  $('.loading__page#loading').hide(); 

  var hideTimeout = setTimeout(function() {
    $('.loading__page#loading').hide();
  }, 3000);

  $(window).on('load', function() {
    clearTimeout(hideTimeout);
    $('.loading__page#loading').hide();
  });
});