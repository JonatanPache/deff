(function($) {
    'use strict';

    // Mean Menu JS
    jQuery('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

    // Navbar Area
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >150){  
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });

    // Search Overlay JS
	$(".side-nav .search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
    });

    // Others Option For Responsive JS
	$(".side-nav-responsive .dot-menu").on("click", function(){
		$(".side-nav-responsive .container .container").toggleClass("active");
	});
    
    // Brand Slider
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            768:{
                items: 4
            },
            992:{
                items: 5
            },
            1200:{
                items: 6
            }
        },
        navText: [
            "<i class='flaticon-left'></i>",
            "<i class='flaticon-arrow'></i>"
        ],
    })

    // Brand Slider
    $('.brand-logo-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            768:{
                items: 4
            },
            992:{
                items: 5
            },
            1200:{
                items: 6
            }
        },
    })

    // Team Slider 
     $('.team-slider').owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            568:{
                items: 2
            },
            992:{
                items: 3
            },
            1200:{
                items: 5
            },
            1600:{
                items: 6
            }
        },
    })

    // Team Slider Two
    $('.team-slider-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            568:{
                items: 2
            },
            992:{
                items: 3
            },
            1000:{
                items: 4
            },
        },
        navText: [
            "<i class='bx bx-plus'></i>",
            "<i class='bx bx-plus'></i>"
        ],
    })

    // Testimonial Slider 
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        navText: [
            "",
            "<i class='bx bx-plus'></i>"
        ],
    })

    // Testimonial Slider 
    $('.testimonial-slider-two').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
    })

    // Popup Video
    $('.popup-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });

    // Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});
    
    // Count Time JS
	function makeTimer() {
		var endTime = new Date("august  30, 2022 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
        
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Back To Top Js
    $('body').append('<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>');
    $(window).on('scroll',function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // WOW JS
    new WOW().init();

    // Preloader JS
    jQuery(window).on('load',function(){
        jQuery(".preloader").fadeOut(500);
    });


    // Switch Btn
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('zinka_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('zinka_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

let chatbotVisible = false;
const userIconUrl = "{% static 'assets/js/user_icon.png' %}";
const botIconUrl = "{% static 'assets/js/bot_icon.png' %}";

function toggleChatbot() {
    const chatContainer = document.getElementById('chatContainer');
    const floatingButton = document.getElementById('floatingButton');

    if (!chatbotVisible) {
        chatContainer.style.display = 'block';
        floatingButton.innerHTML = '&#10006;'; // Icono de cerrar
    } else {
        chatContainer.style.display = 'none';
        floatingButton.innerHTML = '&#9998;'; // Icono de chat
    }

    chatbotVisible = !chatbotVisible;
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);
    respondToUser(userInput);
    document.getElementById('userInput').value = '';
}

function appendMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.innerHTML = sender === 'user' ? '<img src="' + userIconUrl + '">' : '<img src="' + botIconUrl + '">';
    messageElement.appendChild(avatar);

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = message;
    messageElement.appendChild(content);

    chatMessages.appendChild(messageElement);

    // Scroll al final del contenedor de mensajes
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function respondToUser(userInput) {
    let response;
    if (userInput.toLowerCase().includes('enfoque principal') || userInput.toLowerCase().includes('campo del machine learning')) {
        response = "El enfoque principal de DEFF en el campo del machine learning es desarrollar soluciones personalizadas que optimicen procesos empresariales mediante análisis avanzados de datos.";
    } else if (userInput.toLowerCase().includes('tipos de soluciones') || userInput.toLowerCase().includes('ofrece de machine learning')) {
        response = "DEFF ofrece soluciones en áreas como predicción de datos, análisis de sentimientos, reconocimiento de imágenes y optimización de procesos mediante algoritmos de machine learning.";
    } else if (userInput.toLowerCase().includes('ejemplos de proyectos exitosos')) {
        response = "Algunos proyectos exitosos de DEFF incluyen la optimización de cadenas de suministro, personalización de recomendaciones en plataformas de comercio electrónico y detección de fraudes financieros.";
    } else if (userInput.toLowerCase().includes('garantiza la calidad') || userInput.toLowerCase().includes('precisión de sus modelos')) {
        response = "DEFF asegura la calidad y precisión de sus modelos de machine learning mediante rigurosos procesos de validación y pruebas con datos reales.";
    } else if (userInput.toLowerCase().includes('tecnologías y herramientas')) {
        response = "DEFF utiliza tecnologías como TensorFlow, PyTorch y scikit-learn, junto con herramientas personalizadas para la implementación eficiente de modelos de machine learning.";
    } else if (userInput.toLowerCase().includes('diferenciar a deff') || userInput.toLowerCase().includes('otras empresas')) {
        response = "DEFF se distingue por su enfoque personalizado, expertise técnico y capacidad para integrar soluciones de machine learning de manera efectiva en diferentes sectores industriales.";
    } else if (userInput.toLowerCase().includes('colaborar con deff')) {
        response = "Puedes comenzar a colaborar con DEFF contactando a nuestro equipo a través de nuestro sitio web o enviando un correo electrónico a contacto@deffml.com.";
    } else if (userInput.toLowerCase().includes('privacidad y seguridad')) {
        response = "La privacidad y seguridad de los datos son fundamentales para DEFF. Implementamos medidas estrictas para proteger la información confidencial de nuestros clientes durante todo el ciclo de vida del proyecto.";
    } else if (userInput.toLowerCase().includes('impacto y retorno de inversión')) {
        response = "DEFF evalúa el impacto y el retorno de inversión de nuestras soluciones de machine learning mediante métricas específicas y casos de estudio que demuestran mejoras significativas en eficiencia y rentabilidad.";
    } else if (userInput.toLowerCase().includes('filosofía o visión')) {
        response = "Nuestra visión en DEFF es liderar la innovación en machine learning, aplicando tecnologías avanzadas para resolver desafíos complejos y crear valor sostenible para nuestros clientes.";
    } else {
        response = "Gracias por tu pregunta. Para obtener información más detallada, te recomendamos visitar nuestro sitio web o contactar directamente con nuestro equipo.";
    }

    setTimeout(() => {
        appendMessage('bot', response);
    }, 500);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}


// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('zinka_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();
