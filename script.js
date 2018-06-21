$(document).ready(function() {

	$('#navi-name').click(scrollToTop);
	$('#about-me-link').click(scrollToAboutMe);
	$('#projects-link').click(scrollToProjects);
	$('#skills-link').click(scrollToSkills);
	$('#experience-link').click(scrollToExperience);
	$('#education-link').click(scrollToEducation);
	$('#extracurriculars-link').click(scrollToExtracurriculars);
	$('#contact-link').click(scrollToContact);

	$('#mobile-navi-name').click(scrollToTop);
	$('#mobile-about-me').click(scrollToAboutMe);
	$('#mobile-skills').click(scrollToSkills);
	$('#mobile-projects').click(scrollToProjects);
	$('#mobile-experience').click(scrollToExperience);
	$('#mobile-education').click(scrollToEducation);
	$('#mobile-extracurriculars').click(scrollToExtracurriculars);
	$('#mobile-contact').click(scrollToContact);

	$('#arrow-up').click(scrollToTop);
	$('#arrow-down').click(scrollToBottom);

	// Mobile
	$('#mobile-menu-open').click(function() {
		$(this).hide();
		$('#mobile-menu-close').show();
		$('#links').show();
	})
	$('#mobile-menu-close').click(function() {
		$(this).hide();
		$('#mobile-menu-open').show();
		$('#links').hide();
	})

	$(document).mouseup(function (e)
	{
	    var container = $('#links');

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.hide();
	        $('#mobile-menu-close').hide();
			$('#mobile-menu-open').show();
	    }
	});

	$("#slideshow > div:gt(0)").hide();
	setInterval(function() {
		$('#slideshow > div:first')
	    	.fadeOut(1000)
	    	.next()
	    	.fadeIn(1000)
	    	.end()
	    	.appendTo('#slideshow');
	},  3500);

	$('#letter-unopened').hover(function() {
		$(this).hide();
		$('#letter-opened').show();
	});
	$('#letter-opened').mouseleave(function() {
		$(this).hide();
		$('#letter-unopened').show();
	})

	$('.arrow').hover(function() {
		$(this).css('opacity', 1.0);
	}, function() {
		$(this).css('opacity', 0.6);
	});

	$('.icon').hover(function() {
		$('.icon').addClass('icon-not-selected');
		$(this).removeClass('icon-not-selected');
	}, function() {
		$('.icon').removeClass('icon-not-selected');
	});


	$(window).scroll(function() {

	    var top_of_element = $(".progress").offset().top;
	    var bottom_of_element = $(".progress").offset().top + $(".progress").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();

	    // if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element))
	    if (isElementInViewport($('#java'))) {
	        $('#java').slideOver('90%');
	    }
	    if (isElementInViewport($('#python'))) {
	        $('#python').slideOver('80%');
	    }
	    if (isElementInViewport($('#html5'))) {
	        $('#html5').slideOver('40%');
	    }
	    if (isElementInViewport($('#css3'))) {
	        $('#css3').slideOver('50%');
	    }
	    if (isElementInViewport($('#sql'))) {
	        $('#sql').slideOver('30%');
	    }
	    if (isElementInViewport($('#javascript'))) {
	        $('#javascript').slideOver('70%');
	    }
	    if (isElementInViewport($('#scheme'))) {
	        $('#scheme').slideOver('20%');
	    }
	    if (isElementInViewport($('#jsp'))) {
	        $('#jsp').slideOver('60%');
	    }

	    if (isElementInViewport($('.tools-header'))) {
	        $('#tools-and-other').animate({
				marginRight: '3%'
			}, 500, function() {});
	    }
	});

	$('[name=contact-form').submit(function() {
		$('#submit').prop('value', 'SENT!');
	});

	$('.submit button').on('click', function(e){
       // e.preventDefault() //this prevents the form from submitting normally, but still allows the click to 'bubble up'.

       //lets get our values from the form....
       var name = $('#name').val();
       var email = $('#email').val();
       var message = $('#message').val();

       //now lets make our ajax call
        $.ajax({
        	type: "POST",
         	url: "form.php",
          	data: { name: name, email: email, message: message }
        }).done(function() {

           //replace submit button with some text...
           // $('[name=submit]').val('Sent!');
           // $('.submit').after('<span class="messageSent">Message Sent!</span>');

        });
    });

});

$.fn.slideOver = function(amount) {
	$(this).animate({
		width: amount
	}, 1000, function() {});
}

function submitForm() {
	$('.submit').hide();
}

// function animate
function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

var closeMenu = function() {
	$('#mobile-menu-close').hide();
	$('#mobile-menu-open').show();
	$('#links').hide();
}

var scrollToTop = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop:0}, 500);
};
var scrollToAboutMe = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('.canvas').offset().top
    }, 500);
};
var scrollToProjects = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 500);
};
var scrollToSkills = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 500);
};
var scrollToExperience = function() {
	closeMenu();
	$('#links').hide();
    $('html, body').animate({
        scrollTop: $('#experience').offset().top
    }, 500);
};
var scrollToEducation = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#education').offset().top
    }, 500);
};
var scrollToExtracurriculars = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#extracurriculars').offset().top
    }, 500);
};
var scrollToContact = function() {
	closeMenu();
	$('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 500);
}
var scrollToBottom = function() {
	closeMenu();
	$('html, body').animate({
        scrollTop: $('.footer').offset().top
    }, 500);
}
