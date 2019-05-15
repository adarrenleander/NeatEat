var timeOut;
// Initial scrolling state
var scrollPos = 0;
var scroll = true;

// Adding the scrol event
window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos)
          scroll = false;
      // saves the new position for iteration.
      scrollPos = (document.body.getBoundingClientRect()).top;
  });

function scrollToBot() {
    if(scroll == false){
        return;
    }
    
    var x = document.body.scrollTop;
    var y = document.documentElement.scrollTop;

	if (x !=2140 || y!=2140){
		window.scrollBy(0,2);
		timeOut=setTimeout('scrollToBot()',1);
    }
    else clearTimeout(timeOut);
}

scrollToBot();


