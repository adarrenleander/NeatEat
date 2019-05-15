function scrollPageUpwards(){
    var pixels = 2140;
    while(pixels >= 0)
    {
        window.scrollBy(0, pixels)
        pixels = pixels - 1;
    }
}

function directScrollDownwards(){
    window.scrollBy(0, 2140);
}

var timeOut;
function scrollToTop() {
    document.onscroll = return;
	if (document.body.scrollTop!=2140 || document.documentElement.scrollTop!=2140){
		window.scrollBy(0,2);
		timeOut=setTimeout('scrollToTop()',1);
    }
	else clearTimeout(timeOut);
}

// directScrollDownwards();
scrollToTop();