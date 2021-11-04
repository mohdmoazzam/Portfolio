$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY>20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");

        }
    });

    //slider up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
     //toggle
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });
     //typing animation script
     var typed = new Typed(".typing",{
        strings: ["YouTuber","Developer","Reader","Student"],
        backSpeed: 60,
        typeSpeed: 100,
        loop:true
      });
      var typed = new Typed(".typing-2",{
        strings: ["Youtuber","Developer","Reader","Student"],
        backSpeed: 60,
        typeSpeed: 100,
        loop:true
      });
     // List of sentences
/*var _CONTENT = [ 
	"Twinkle, twinkle, little star", 
	"How I wonder what you are", 
	"Up above the world so high", 
	"Like a diamond in the sky"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector(".typing");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);*/
     //owl carousel script
     $('.carousel').owlCarousel({
         margin:20,
         loop:true,
         autoplayTimeOut:2000,
         autoplayHoverPause:true,
         responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false
                }
         }

     });
});