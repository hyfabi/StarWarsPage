$(document).ready(function(){
	$("body").prepend(lol);
	console.log('lol');
});

$(document).mousemove(function (event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
	inCursor = false;
});
var lol ="<img id='xf' style='-webkit-user-select: none;position: absolute; height: 30px; z-index: -1;' src='../pictures/background/x-fighter.png'><span hidden style='width: 300px; float: right;' id='f'></span>";
	
var mouseX = 0;
var mouseY = 0;
var absX;
var absY;
var angle;
var x = 100;
var y = 100;
var velX;
var velY;
var inCursor = false;

var timer = setInterval(function () {
	paint();
	rotation();
	debug();
}, 0.01);
var timer2 = setInterval(function () {movement()}, 1);

function paint() {
	$("#xf").css("left",x);
	$("#xf").css("top",y);
	$("#xf").css("transform","rotate(" + angle +"deg)");
}

function rotation() {
	angle = ((Math.atan2(mouseY - y,mouseX - x)*180/Math.PI)+90);
};

function debug () {
	$("#f").html("A: " + angle +
	"<br> X: " + x + "<br> Y: " +y +
	"<br> VelX: " + Math.cos(angle)*10 + "<br> VelY: " + Math.sin(angle)*10 
	+ "<br> MX: " + mouseX+ "<br> MY: " + mouseY + 
	"<br> absX: " + absX + "<br> absY: " +absY +
	"<br>In Cursor: " + inCursor
	);
}

function movement(){
	absX = mouseX-x;
	absY = mouseY-y;
	if(absX < 5 && absY < 5 && absX > -5 && absY > -5)
		inCursor = true;
	if(inCursor){
		velX = 0;
		velY = 0;
	}else{
		velX = Math.sin(angle);
		velY = Math.cos(angle);
	}

	if((mouseX<x&&velX>0)||(mouseX>x&&velX<0))
		velX*=-1;
	if((mouseY>y&&velY<0)||(mouseY<y&&velY>0))
		velY*=-1;
	y += velY;
	x += velX;
}


