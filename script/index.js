pla=new Image();
pla.src="image/play.png";

helps=new Image();
helps.src="image/help.png";

pla1=new Image();
pla1.src="image/play1.png";

helps1=new Image();
helps1.src="image/help1.png";

snake=new Image();
snake.src="image/sball.png";

bh=[];//array containing all the tiny box object
function init(){
var canvas=document.getElementById("board");
canvas.width=document.body.clientWidth;
canvas.height=document.body.clientHeight;
cw=canvas.width;
ch=canvas.height;
con=canvas.getContext("2d");
con.fillStyle="#dddddd"//"#fffaf0"//"#efdfbb";
con.fillRect(0,0,cw,ch);
if("ontouchstart" in window)
canvas.addEventListener("touchstart", touchHandler, false);
else
canvas.addEventListener("mousedown", touchHandler1, false);

//play button
play=Object.create(entity);
play.ini(pla, con,0,0,100,100,0,0,100,100);
play.calWithRatio("width",20);
play.x1=cw/2-play.w1/2;
play.y1=ch/2-play.h1/2;
play.draw();

//help button
help=Object.create(entity);
help.ini(helps, con,0,0,100,100,0,0,100,100);
help.calWithRatio("width",20);
help.x1=cw/2-play.w1/2;
help.y1=play.y1 + play.h1 + 3/100 *ch;
help.draw();

//help button
sna=Object.create(entity);
sna.ini(snake, con,0,0,100,100,0,0,100,100);
sna.calWithRatio("width",40);
sna.x1=cw/2-sna.w1/2;
sna.y1=play.y1 -sna.h1 -3/100 *ch;
sna.draw();


}
function press(){
play.changeImage(pla)
play.draw()
setTimeout( open,100);
}

function press1(){
help.changeImage(helps)
help.draw()
setTimeout(open1,100);
}


function open(){
window.location.href="snake.html";
}
function open1(){
window.location.href="help.html";
}

function touchHandler(e){
if(touchIt(play.x1,play.y1, play.w1, play.h1, e.touches[0].pageX, e.touches[0].pageY)){	
play.changeImage(pla1)
play.draw()
setTimeout( press,200);

}
else if(touchIt(help.x1,help.y1, help.w1,help.h1, e.touches[0].pageX, e.touches[0].pageY)){	
help.changeImage(helps1)
help.draw()
setTimeout( press1,200);

}
}

function touchHandler1(e){
if(touchIt(play.x1,play.y1, play.w1, play.h1, e.pageX, e.pageY)){	
play.changeImage(pla1)
play.draw()
setTimeout( press,200);

}
else if(touchIt(help.x1,help.y1, help.w1,help.h1, e.pageX, e.pageY)){	
help.changeImage(helps1)
help.draw()
setTimeout( press1,200);

}
}


