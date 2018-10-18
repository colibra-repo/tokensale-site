function isFullyIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isNotIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewTop) || (elemTop >= docViewBottom));
}

$(document).ready(function() {
    
    var stickyHeaderTop = $('.header').height();

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyHeaderTop) { 
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed'); 
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
        if ($(window).width() < 1024) {
            if(isNotIntoView('#onePagerMobile')) {
                $('#onePagerHeader').addClass('visible');
            } else {
                $('#onePagerHeader').removeClass('visible');
            }
        } else {
            if(!isFullyIntoView('#onePagerDesktop')) {
                $('#onePagerHeader').addClass('visible');
            } else {
                $('#onePagerHeader').removeClass('visible');
            }
        }
        
    });
    // $('.section_body.home').css('height', $(window).height());

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
        speed: 300,
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

    init3d(false);
    
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

var object3d;
function init3d(isInited) {
    var scene = new THREE.Scene,
        camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1e3),
        renderer = new THREE.WebGLRenderer({
        alpha: true
    }),
    animationWrapper = document.getElementById('animation-wrapper'),
    animationLoader = document.getElementById('animation-loader'),
    $document = $(document),
    toRight = false,
    $window = $(window),
    $animationWrapper = $('#animation-wrapper');

    renderer.setSize(animationWrapper.offsetWidth, animationWrapper.offsetHeight); 
    animationWrapper.appendChild(renderer.domElement);
    camera.position.z = 100;
    
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false; 
    controls.autoRotateSpeed = 0.5; 
    controls.enabled = $document.width() > 768;
    controls.enableKeys = false;
    controls.enableZoom = false; 
    controls.enableDamping = true; 
    controls.minPolarAngle = 1.2; 
    controls.maxPolarAngle = 1.2; 
    controls.minAzimuthAngle = - Infinity; 
    controls.maxAzimuthAngle = Infinity;

    var ambiLight = new THREE.AmbientLight(0xf8f8f8);
    scene.add(ambiLight); 
    
    var dirLight = new THREE.DirectionalLight(0xf8f8f8, 0.5); 
    dirLight.position.set(-1, 1, 1); 
    scene.add(dirLight);    

    var backLight = new THREE.PointLight(0xf8f8f8, 1, 100);
    backLight.position.set(-1, 0.5, 1);
    scene.add(backLight);

    var material = new THREE.MeshPhongMaterial();
    material.map = new THREE.ImageUtils.loadTexture('css/3dmodel/color.png'); 
    material.color = new THREE.Color(0xf8f8f8); 
    material.opacity = 1; 
    material.transparent = true; 
    material.side = THREE.DoubleSide;
    
    var objLoader = new THREE.OBJLoader;
    objLoader.setPath('css/3dmodel/'); 

    $window.off('orientationchange').on('orientationchange', function() {
        $animationWrapper.addClass('hidden')
        setTimeout(() => {
            $('<div id="animation-wrapper"></div>').insertAfter('#animation-wrapper');
            $animationWrapper.remove();
            init3d(true);            
        }, 1);
    });
    if (!isInited) {
        objLoader.load('themis.obj', function(obj) {
            object3d = obj;
            object3d.position.y -= 109, 
            object3d.castShadow = true, 
            object3d.traverse(function(obj) {
                if (obj.isMesh) {
                    obj.material = material;
                    object3d.material = material;
                }      
            }); 
            
            object3d.scale.x = object3d.scale.y = object3d.scale.z = 0.061; 
            scene.add(object3d);
        }, function(req) {
            if (Math.round(100 * req.loaded / req.total) === 100) {
                animationLoader.className = "hidden-loader";
                animationWrapper.className = "visible";
            }        
        });
    } else {
        scene.add(object3d);
        animationLoader.className = "hidden-loader";
        animationWrapper.className = "visible";
    }

    setTimeout(() => {
        controls.autoRotate = true; 
        
    }, 500);

    //rotation change with mouse
    $document.on('mousemove', function(e) {
        toRight = e.clientX > $document.width() / 2;
        changeDirection();
    });
    
    function changeDirection() {
        if (toRight) {
            controls.autoRotateSpeed = 0.5;
        } else {
            controls.autoRotateSpeed = - 0.5;
        }
    }

    function slowDownRotation() {
        if (toRight) {
            controls.autoRotateSpeed = 0.15;
        } else {
            controls.autoRotateSpeed = - 0.15;
        }
    }

    var animate = function() {
        requestAnimationFrame(animate); 
        renderer.render(scene, camera);
        controls.update(); 
    };

    animate();
}

