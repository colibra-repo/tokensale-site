// function isFullyIntoView(elem){
//     var $elem = $(elem);
//     var $window = $(window);

//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();

//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// function isNotIntoView(elem){
//     var $elem = $(elem);
//     var $window = $(window);

//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();

//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();

//     return ((elemBottom <= docViewTop) || (elemTop >= docViewBottom));
// }

$(document).ready(function() {
    
    var stickyHeaderTop = $('.header').height();

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if ($(window).width() > 1023) {
            
            if (scrollTop > stickyHeaderTop) { 
                $('.header').addClass('header-fixed');
                // $('.home').addClass('active');
            } else {
                $('.header').removeClass('header-fixed'); 
                // $('.home').removeClass('active');
            }
        } else {
            if (scrollTop > stickyHeaderTop) { 
                // $('.header').addClass('header-white');
                // $('.home').addClass('active');
            } else {
                // $('.header').removeClass('header-white'); 
                // $('.home').removeClass('active');
            }
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
        // if ($(window).width() < 1024) {
        //     if(isNotIntoView('#onePagerMobile')) {
        //         $('#onePagerHeaderMobile').addClass('visible');
        //     } else {
        //         $('#onePagerHeaderMobile').removeClass('visible');
        //     }
        // } else {
        //     if(!isFullyIntoView('#onePagerDesktop')) {
        //         $('#onePagerHeaderDesktop').addClass('visible');
        //     } else {
        //         $('#onePagerHeaderDesktop').removeClass('visible');
        //     }
        // }
        
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

                // setTimeout(function(){
                //     window.scrollBy(0, 150);
                // }, 1000);
                
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
            // window.location.hash = target;
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

    //contact form
    $("#contactForm").formValidation({
        framework: "bootstrap",
        icon: {
          valid: "fa fa-check",
          invalid: "fa fa-times",
          validating: "fa fa-refresh"
        },
        fields: {
          firstName: {
            validators: {
              notEmpty: {
                message: "First name is required"
              }
            }
          },
          email: {
            validators: {
              emailAddress: {
                message: "E-mail is required"
              },
              notEmpty: {
                message: "E-mail is required"
              },
              regexp: {
                regexp: "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$",
                message: "Enter a valid E-mail"
              }
            }
          },
          lastName: {
            validators: {
              notEmpty: {
                message: "Last name is required"
              }

            },
          },
          
        }
    });

    // init3d(false);


   
    var delays = ["60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180"];
    var refunds = [ 21, 22, 22, 23, 24, 25, 25, 26, 27, 28, 28, 29, 30, 30, 31, 32, 33, 33, 34, 35, 36, 36, 37, 38, 38, 39, 40, 41, 41, 42, 43, 44, 44, 45, 46, 46, 47, 48, 49, 49, 50, 51, 52, 52, 53, 54, 54, 55, 56, 57, 57, 58, 59, 60, 60, 61, 62, 62, 63, 64, 65, 65, 66, 67, 68, 68, 69, 70, 70, 71, 72, 73, 73, 74, 75, 76, 76, 77, 78, 78, 79, 80, 81, 81, 82, 83, 84, 84, 85, 86, 86, 87, 88, 89, 89, 90, 91, 92, 92, 93, 94, 94, 95, 96, 97, 97, 98, 99, 100, 100, 101, 102, 102, 103, 104, 105, 105, 106, 107, 108, 109];
    
    // $("#slider")
    // .slider({ 
    //     min: 60, 
    //     max: 180, 
    //     value: 120, 
    //     step: 30 
    // })
    // .slider("pips", {
    //     rest: "label",
    //     suffix: "min",
    //     labels: delays
       
    // })
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
        // $(".min").text(ui.value);
        //var delayIndex = delays.indexOf(ui.value.toString());
        // $(".currency").text(refunds[delayIndex]); 
    });

    
    
   // vertical slider
    // var verticalDelays = [ "180", "150", "120", "90", "60"], mine="120";
    // var verticalRefunds = [ 75, 90, 120, 150, 180];
    
    //var verticalDelays= ["180","179","178","177","176","175","174","173","172","171","170","169","168","167","166","165","164","163","162","161","160","159","158","157","156","155","154","153","152","151","150","149","148","147","146","145","144","143","142","141","140","139","138","137","136","135","134","133","132","131","130","129","128","127","126","125", "124","123","122","121","120","119","118","117","116","115","114","113","112","111","110","109","108","107","106","105","104","103","102","101","100","99","98","97","96","95","94","93","92","91","90","89","88","87","86","85","84","83","82","81","80","79","78","77","76","75","74","73","72","71","70","69","68","67","66","65","64","63","62","61","60"]; 
    var verticalDelays = ["60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180"];
    //var verticalRefunds = [109, 108, 107, 106, 105, 105 ,104, 103, 102, 102, 101, 100, 100, 99, 98, 97, 97, 96, 95, 94, 94, 93, 92, 92, 91, 90, 88, 87, 86, 86, 85, 84, 84, 83, 82, 81, 81, 80, 79, 78, 78, 77, 76, 76, 75, 74, 73, 73, 72, 71, 70, 70, 69, 68, 68, 67, 66, 65, 65, 64, 63, 62, 62, 61, 60, 60, 59, 58, 57, 57, 56, 55, 54, 54 , 53, 52, 52, 51, 50, 49, 49, 48, 47, 46, 46, 45, 44, 44, 43, 42, 41, 41, 40, 39, 38, 38, 37, 36, 36, 35, 34, 33, 33, 32, 31, 30, 30, 29, 28, 28, 27, 26, 25, 25, 24, 23, 22, 22, 21];   
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
        // $(".min").text(ui.value);
        // var verticaldelayIndex = verticalDelays.indexOf(ui.value.toString());
        // $(".currency").text(verticalRefunds[verticaldelayIndex]);  
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
    console.log(direction);
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top - 66
    }, 1000);
    if ($('.nav').hasClass('active')){
        $('.nav').removeClass('active');
        $('.nav_trigger').removeClass('active');
    }
}

// var object3d;
// function init3d(isInited) {
//     var scene = new THREE.Scene,
//         camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1e3),
//         renderer = new THREE.WebGLRenderer({
//         alpha: true
//     }),
//     animationWrapper = document.getElementById('animation-wrapper'),
//     animationLoader = document.getElementById('animation-loader'),
//     $document = $(document),
//     toRight = false,
//     $window = $(window),
//     $animationWrapper = $('#animation-wrapper');

//     renderer.setSize(animationWrapper.offsetWidth, animationWrapper.offsetHeight); 
//     animationWrapper.appendChild(renderer.domElement);
//     camera.position.z = 100;
    
//     var controls = new THREE.OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = false; 
//     controls.autoRotateSpeed = 0.5; 
//     controls.enabled = $document.width() > 768;
//     controls.enableKeys = false;
//     controls.enableZoom = false; 
//     controls.enableDamping = true; 
//     controls.minPolarAngle = 1.2; 
//     controls.maxPolarAngle = 1.2; 
//     controls.minAzimuthAngle = - Infinity; 
//     controls.maxAzimuthAngle = Infinity;

//     var ambiLight = new THREE.AmbientLight(0xf8f8f8);
//     scene.add(ambiLight); 
    
//     var dirLight = new THREE.DirectionalLight(0xf8f8f8, 0.5); 
//     dirLight.position.set(-1, 1, 1); 
//     scene.add(dirLight);    

//     var backLight = new THREE.PointLight(0xf8f8f8, 1, 100);
//     backLight.position.set(-1, 0.5, 1);
//     scene.add(backLight);

//     var material = new THREE.MeshPhongMaterial();
//     material.map = new THREE.ImageUtils.loadTexture('css/3dmodel/color.png'); 
//     material.color = new THREE.Color(0xf8f8f8); 
//     material.opacity = 1; 
//     material.transparent = true; 
//     material.side = THREE.DoubleSide;
    
//     var objLoader = new THREE.OBJLoader;
//     objLoader.setPath('css/3dmodel/'); 

//     $window.off('orientationchange').on('orientationchange', function() {
//         $animationWrapper.addClass('hidden')
//         setTimeout(() => {
//             $('<div id="animation-wrapper"></div>').insertAfter('#animation-wrapper');
//             $animationWrapper.remove();
//             init3d(true);            
//         }, 1);
//     });
//     if (!isInited) {
//         objLoader.load('themis.obj', function(obj) {
//             object3d = obj;
//             object3d.position.y -= 109, 
//             object3d.castShadow = true, 
//             object3d.traverse(function(obj) {
//                 if (obj.isMesh) {
//                     obj.material = material;
//                     object3d.material = material;
//                 }      
//             }); 
            
//             object3d.scale.x = object3d.scale.y = object3d.scale.z = 0.061; 
//             scene.add(object3d);
//         }, function(req) {
//             if (Math.round(100 * req.loaded / req.total) === 100) {
//                 animationLoader.className = "hidden-loader";
//                 animationWrapper.className = "visible";
//             }        
//         });
//     } else {
//         scene.add(object3d);
//         animationLoader.className = "hidden-loader";
//         animationWrapper.className = "visible";
//     }

//     setTimeout(() => {
//         controls.autoRotate = true; 
        
//     }, 500);

//     //rotation change with mouse
//     $document.on('mousemove', function(e) {
//         toRight = e.clientX > $document.width() / 2;
//         changeDirection();
//     });
    
//     function changeDirection() {
//         if (toRight) {
//             controls.autoRotateSpeed = 0.5;
//         } else {
//             controls.autoRotateSpeed = - 0.5;
//         }
//     }

//     function slowDownRotation() {
//         if (toRight) {
//             controls.autoRotateSpeed = 0.15;
//         } else {
//             controls.autoRotateSpeed = - 0.15;
//         }
//     }

//     var animate = function() {
//         requestAnimationFrame(animate); 
//         renderer.render(scene, camera);
//         controls.update(); 
//     };

//     animate();
// }

