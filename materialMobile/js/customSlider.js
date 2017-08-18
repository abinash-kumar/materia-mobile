

//1. set ul width 
//2. image when click prev/next button
var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(sliderName,sliderWidth,prev,next){
	li_width=document.getElementById(sliderWidth).clientWidth;
	ul = document.getElementById(sliderName); 
	li_items = ul.children;
	imageNumber = li_items.length;
	for(i=0;i < imageNumber; i++){
	li_items[i].style.width =li_width + 'px';
	}
	
	imageWidth = li_items[0].children[0].clientWidth;
	
	li_width=document.getElementById(sliderName);
	prevbtn = document.getElementById(prev);
	nextbtn = document.getElementById(next);
	//.onclike = slide(-1) will be fired when onload;
	/*
	prev.onclick = function(){slide(-1);};
	next.onclick = function(){slide(1);};*/
	prevbtn.onclick = function(){ onClickPrev();};
	nextbtn.onclick = function(){ onClickNext();};
}

function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration;
		if (progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.delay || 17);
	//return id;
}

function slideTo(imageToGo){
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:300,
		delta:function(p){return p;},
		step:function(delta){
			ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
		},
		callback:function(){currentImage = imageToGo;}	
	};
	animate(opts);
}

function onClickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}

var myElement = document.getElementById('swipe2');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("swipeleft swiperight", function(ev) {
if(ev.type =='swiperight'){
		if (currentImage == 0){
		//slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

if(ev.type =='swipeleft'){
	if (currentImage == imageNumber - 1){
		//slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}	

}

});




window.onload = init;

