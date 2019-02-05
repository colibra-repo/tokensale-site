
$(document).ready(function() {
    
    var stickyHeaderTop = $('.header').height();

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if ($(window).width() > 1023) {
            
            if (scrollTop > stickyHeaderTop) { 
                $('.header').addClass('header-fixed');
            } else {
                $('.header').removeClass('header-fixed'); 
            }
        } else {
            if (scrollTop > stickyHeaderTop) { 
            } else {
                // $('.header').removeClass('header-white'); 
                // $('.home').removeClass('active');
            }
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();   
    });
    //menu desktop
    $('.nav_trigger').click(function (e) {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
        e.preventDefault();
    });
    //lang-nav
    $('.lang_btn').click(function (e) {
        $('.lang_list').toggleClass('active');
    });
    
    $('.lang_btn-fixed').click(function (e) {
        $('.lang_list').toggleClass('active');
    });
    //problem section 
    //video
    $(".video1").fancybox({
        width:"1080",
        height:'600',
        autoSize    : false,
        closeClick  : true,
        openEffect  : 'none',
        closeEffect : 'none',
        type: "iframe",
        iframe : {
          preload: false,
        },
       
    });
    //section4
    $(".video2").fancybox({
        width:"1080",
        height:'600',
        autoSize    : false,
        closeClick  : true,
        openEffect  : 'none',
        closeEffect : 'none',
        type: "iframe",
        iframe : {
          preload: false,
          autoplay:"1",
        }
    });
    //slider
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        autoplay:3500,
        speed: 800,
        loop: true,
    });

    // solution section
    var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');   
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}  
	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
    }
    $('#cd-vertical-nav a').on('click',function(e) {
        e.preventDefault();
        var offset = 66;
        var target = this.hash;
        if ($(this).data('offset') != undefined) offset = $(this).data('offset');
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - offset
        }, 500, 'swing', function() {
        });
    });

    // Team & Adivisors section
    // flip on-off a card on hover

    if (($(window).outerWidth() < 1000)) {
        $('.card_grid').flip({
            trigger: 'click'
        });
    } else {
        $('.card_grid').flip({
            trigger: 'hover'
        });
    }
    // Whitelist section
    //open register form
    $('.btn.toggleForm').click(function(){
        $('.section_foot').toggleClass('visible');
        $(this).hide();
    });

    var delays = ["60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180"];
    var refunds = [ 21, 22, 22, 23, 24, 25, 25, 26, 27, 28, 28, 29, 30, 30, 31, 32, 33, 33, 34, 35, 36, 36, 37, 38, 38, 39, 40, 41, 41, 42, 43, 44, 44, 45, 46, 46, 47, 48, 49, 49, 50, 51, 52, 52, 53, 54, 54, 55, 56, 57, 57, 58, 59, 60, 60, 61, 62, 62, 63, 64, 65, 65, 66, 67, 68, 68, 69, 70, 70, 71, 72, 73, 73, 74, 75, 76, 76, 77, 78, 78, 79, 80, 81, 81, 82, 83, 84, 84, 85, 86, 86, 87, 88, 89, 89, 90, 91, 92, 92, 93, 94, 94, 95, 96, 97, 97, 98, 99, 100, 100, 101, 102, 102, 103, 104, 105, 105, 106, 107, 108, 109];
    
    $("#slider").slider({ 
        range: false,
        min: 60, 
        max: 180, 
        value: 120, 
        step: 1,
        slide: function(event, ui) {
            $(".min").html(ui.value + '<span class="green-label">min</span>');
            var delayIndex = delays.indexOf(ui.value.toString());
            $(".currency").html('<span class="euro-label">&euro;</span>'+refunds[delayIndex]);
        }
    }).slider("pips", {
        rest:"label",
        suffix: "min",
        step: 30
    }).slider("float", {
        suffix: "min",

    }).on("slidechange", function( e, ui ) {
    });

    var verticalDelays = ["60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180"];
    var verticalRefunds = [ 21, 22, 22, 23, 24, 25, 25, 26, 27, 28, 28, 29, 30, 30, 31, 32, 33, 33, 34, 35, 36, 36, 37, 38, 38, 39, 40, 41, 41, 42, 43, 44, 44, 45, 46, 46, 47, 48, 49, 49, 50, 51, 52, 52, 53, 54, 54, 55, 56, 57, 57, 58, 59, 60, 60, 61, 62, 62, 63, 64, 65, 65, 66, 67, 68, 68, 69, 70, 70, 71, 72, 73, 73, 74, 75, 76, 76, 77, 78, 78, 79, 80, 81, 81, 82, 83, 84, 84, 85, 86, 86, 87, 88, 89, 89, 90, 91, 92, 92, 93, 94, 94, 95, 96, 97, 97, 98, 99, 100, 100, 101, 102, 102, 103, 104, 105, 105, 106, 107, 108, 109];
    $("#vertical-slider")
    .slider({ 
        orientation: "vertical",
        min: 60, 
        max: 180, 
        value: 120, 
        step: 1,
        slide: function(event, ui) {
            $(".min").html(ui.value+'<span class="green-label">min</span>');
            var verticaldelayIndex = verticalDelays.indexOf(ui.value.toString());
            $(".currency").html('<span class="euro-label">&euro;</span>'+verticalRefunds[verticaldelayIndex]);
        }
    }).slider("pips", {
        rest: "label",
        suffix: "min",
        labels: verticalDelays,
        step: 30 
    }).slider("float", {
        suffix: "min"
    }).on("slidechange", function( e, ui ) {
    });
    $("#vertical-slider").draggable();
});

var lastScrollTop = 0;
var direction = '';
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
        direction = 'down';
   } else {
        direction = 'up';
   }
   lastScrollTop = st;
});

function scrollToEl(id) {
    // console.log(direction);
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top - 66
    }, 1000);
    if ($('.nav').hasClass('active')){
        $('.nav').removeClass('active');
        $('.nav_trigger').removeClass('active');
    }
}

