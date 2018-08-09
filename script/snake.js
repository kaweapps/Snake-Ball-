bh=[];//array containing all the tiny box object
len=null;//length of each tiny box
state=["going_right","going_left","going_up","going_down"];
pause=new Image();
pause.src="image/pause.png";
pla= new Image();
pla.src="image/option.png";
mis=new Image();
mis.src="image/x.png";
paused=false;
gameover=false;
time=null;// timer function
function init(){
var canvas=document.getElementById("board");
canvas.width=document.body.clientWidth;
canvas.height=document.body.clientHeight;
cw=canvas.width;
ch=canvas.height;
con=canvas.getContext("2d");
con.fillStyle="#dddddd";//"#ffffff";
con.fillRect(0,0,cw,ch);
con.strokeStyle="#000000";
 cd=10/100 *cw;
var cd1=80/100* cw;
var cd2=10/100*ch;
 cd3=80/100 *ch;
len=cd1/40;// this is the width and height of each tiny box
 he=len *20;
var tes=ch/2-(he/2);
tes1=tes;//tes1 is used in d snake.animate function
jc=0;
coun=0;
con.strokeRect(cd,tes,(40*len), he);
if("ontouchstart" in window)
canvas.addEventListener("touchstart", touchHandler, false);
else
canvas.addEventListener("mousedown", touchHandler1, false);
for(var I=0; I<800; I++){
bh[I]= Object.create(bord);
bh[I].ini(cd+(jc*len),tes,len,len,I);
jc++;
coun++;
if(coun>=40){
tes=tes+len;
coun=0;
jc=0;
}
}
snake=Object.create(snakes);
snake.draw();
snake.drawBall();

pau=Object.create(entity)
pau.ini(pause, con,0,0,100,100,0,0,100,100);
pau.calWithRatio("width",2);
pau.x1=1/100*cw;
pau.y1=tes1;
pau.draw();

bac=Object.create(entity)
bac.ini(pla, con,0,0,100,100,0,0,100,100);
bac.calWithRatio("width",50);
bac.x1=cw/2-bac.w1/2;
bac.y1=ch/2-bac.h1/2;//10/100*ch;


m=Object.create(entity)
m.ini(mis, con,0,0,100,100,0,0,100,100);
m.calWithRatio("width",8);
m.x1=(bac.x1+bac.w1)-m.w1/2;
m.y1=bac.y1-m.h1/2;
ani();
}



function touchHandler(e){
if(!gameover && touchIt(pau.x1, pau.y1, pau.w1, pau.h1, e.touches[0].pageX, e.touches[0].pageY ) ){
paused=true;
bac.draw();
m.draw();
infos("Game Paused", cw/2,ch/2,"center",3/100*cw,"#ffffff");
return;
}
if(paused && touchIt(m.x1, m.y1, m.w1, m.h1, e.touches[0].pageX, e.touches[0].pageY) ){
paused=false;
return;

}
if(gameover && touchIt(m.x1, m.y1, m.w1, m.h1, e.touches[0].pageX, e.touches[0].pageY) ){
location.reload()
return;

}
for(var I=0; I< bh.length; I++){
if(bh[I].isTouched( e.touches[0].pageX, e.touches[0].pageY )){// this box was clicked 
var id =getRow(bh[I].id);//row where user clicked
var id1=getRow(snake.head);//row of snake head
var id2=getColumn(snake.head); //column of snake head 
var id3=getColumn( bh[I].id);// column where user clicked

if(snake.state==state[0] || snake.state==state[1] ){//if snake currently going right
if(id>id1){//user clicked a row below the snake
snake.state=state[3];

}
else if(id<id1){// user clicked a row above the snake 

snake.state=state[2];
}
else if( id==id1){//row user clicked is the same with the snake

}

}
else if (snake.state==state[3] || snake.state==state[2] ){//if snake going down

if(id3>id2){//user clicked a column greater than that of the snake head
snake.state=state[0];//snake now going right

}
else if(id3<id2){//column user clicked before the column of the snake head
//we use the for loop to correct a bug that occurs when the user is supposed to go right it goes left instead.
var iss=false;
var t1=40;
for( var Ii=0; Ii<20; Ii++){
if(snake.head==t1){
snake.state=state[0];//snake now going right
iss=true;
break;
}
t1=t1+40;
}
if(iss)
return;



snake.state=state[1];//snake now going left

}
else if(id3==id2){//column user clicked is the same as the snake head


}


}
}
}
}

function touchHandler1(e){
if(!gameover && touchIt(pau.x1, pau.y1, pau.w1, pau.h1, e.pageX, e.pageY ) ){
paused=true;
bac.draw();
m.draw();
infos("Game Paused", cw/2,ch/2,"center",3/100*cw,"#ffffff");
return;
}
if(paused && touchIt(m.x1, m.y1, m.w1, m.h1, e.pageX, e.pageY) ){
paused=false;
return;

}
if(gameover && touchIt(m.x1, m.y1, m.w1, m.h1, e.pageX, e.pageY) ){
location.reload()
return;

}
for(var I=0; I< bh.length; I++){
if(bh[I].isTouched( e.pageX, e.pageY )){// this box was clicked 
var id =getRow(bh[I].id);//row where user clicked
var id1=getRow(snake.head);//row of snake head
var id2=getColumn(snake.head); //column of snake head 
var id3=getColumn( bh[I].id);// column where user clicked

if(snake.state==state[0] || snake.state==state[1] ){//if snake currently going right
if(id>id1){//user clicked a row below the snake
snake.state=state[3];

}
else if(id<id1){// user clicked a row above the snake 

snake.state=state[2];
}
else if( id==id1){//row user clicked is the same with the snake

}

}
else if (snake.state==state[3] || snake.state==state[2] ){//if snake going down

if(id3>id2){//user clicked a column greater than that of the snake head
snake.state=state[0];//snake now going right

}
else if(id3<id2){//column user clicked before the column of the snake head
//we use the for loop to correct a bug that occurs when the user is supposed to go right it goes left instead.
var iss=false;
var t1=40;
for( var Ii=0; Ii<20; Ii++){
if(snake.head==t1){
snake.state=state[0];//snake now going right
iss=true;
break;
}
t1=t1+40;
}
if(iss)
return;



snake.state=state[1];//snake now going left

}
else if(id3==id2){//column user clicked is the same as the snake head


}


}
}
}
}



snakes={
box:[],
ball_pos:undefined, 
length:0, //length of the snake
head:0,//the first 
state:state[0],// snake is going right
old_head:null,//holds the former position of the snake head
draw:function(){
for(var I=0; I<3; I++){
this.box[I]=I;
}
for(var I=0; I< this.box.length; I++){
bh[this.box[I]].draw();

}
this.length=this.box.length;
this.head= bh[this.box.length].id;
},
animate:function(){	
this.clearScreen();//clear the whole screen
con.strokeRect(cd,tes1,(40*len), he);
pau.draw();
if(this.collide()){ //check if there is collision between the snake's head and the ball
this.reArrange();
this.drawBall();

}
this.old_head= this.box[this.box.length-1];
if(this.state==state[0]){//If snake going right

this.box[this.box.length-1]=this.box[this.box.length-1]+1;
for(var I=0; I<this.box.length-1; I++){

this.box[I]=this.box[I+1];
this.head= this.box[I]//this.box.length-1;
}
}
else if(this.state==state[3]){//if snake going down
this.box[this.box.length-1]=this.goDown(this.box[this.box.length-1]);
this.head= this.box[this.box.length-1];
for(var I=0; I<this.box.length-1; I++){
this.box[I]=this.box[I+1];
}
}
else if (this.state==state[2]){ // snake going up
this.box[this.box.length-1]=this.goUp(this.box[this.box.length-1]);
this.head= this.box[this.box.length-1];
for(var I=0; I<this.box.length-1; I++){
this.box[I]=this.box[I+1];
}
}
else if(this.state==state[1]){//snake going left
this.box[this.box.length-1]=this.box[this.box.length-1]-1;
this.head= this.box[this.box.length-1];
for(var I=0; I<this.box.length-1; I++){
this.box[I]=this.box[I+1];
this.head= this.box[I]
}
}
if(this.checkGameOver()){
GameOver();
return;
}
for(var I=0; I<this.box.length; I++){
bh[this.box[I]].draw();

}


},
clearScreen:function(){//clears the whole screen
con.fillStyle="#dddddd";
con.fillRect(0,0,cw,ch);


},
drawBall:function(){//randomly draws ball position

this.ball_pos=Math.floor((Math.random() *800)+1) -1;
bh[this.ball_pos].draw();
},
ball:function(){
if(this.ball_pos==undefined){
console.error("ball_pos is undefined");
return;
}
bh[this.ball_pos].draw();
},
goDown:function(id){//id is the snake head
var er=  getRow(id);//get the row of the snake
var er1= (40 *er)-1;// get the id of the last box in the row
var er2=er1-id;//the number of boxes between snake head and the last box in the column
var er3=id -(er1-40); //the number of boxes between the first box in the row and the snakes head
return (id + er2 + er3);//return the new position of the snake head
},
goUp:function(id){// id of the snake head
var er=  getRow(id);//get the row of the snake head
var er1= (40 *er)-1;// get the id of the last box in the row
var er2=er1-id;//the number of boxes between snake head and the last box in the column
var er3=id -(er1-40); //the number of boxes between the first box in the row and the snakes head
return id-(er2+er3);
},
collide:function(){//check if snake head collide with ball
if(snake.head==this.ball_pos)
return true;
else
return false;

},
reArrange:function(){
var er=this.box.length;
while(er> 0){
this.box[er]=this.box[er-1];
er--;
}
},
checkGameOver:function(){//this checks game over
if(bh[snake.head]==undefined)
return true;
if(this.hitVerticalWall()){//checks if any of the 2 vertical was hit
return true;
}
else
return this.hitVerticalWall2();
/*
for(var I=0; I<this.box.length-1; I++){
if(this.head==this.box[I]){
alert(this.box[ I] +"_"+ this.head)
return true;
break;
}

}
*/



},
hitVerticalWall:function(){//returns true if the right of the vertical wall was hit otherwise it returns false
var t=40;
var is=false;
for(var I=0; I<20; I++){
if(this.head==t){
is=true;
break;
}
t=t+40;
}
if(!is)
return false;
if((this.old_head+1)==t)
return true;
else
return false;
},
hitVerticalWall2:function(){//returns true if  the left vertical wall was hit otherwise it returns false
var t=39;//checks collision on the left wall
var is=false;
for(var I=0; I<20; I++){
if(this.head==t){
is=true;//wall on the right hand side was clicked
break;
}
t=t+40;
}
if(!is)
return false;
if((this.old_head)==t+1){
if(snake.state=state[0])
return false;
else
return true;

}
else 
return false;
}
}

bord={
x:0,//x position of each tiny box
y:0,//y position of each tiny box
w:0,//width of each tiny box
h:0,//height of tiny box
id:undefined,
ini:function(x,y, w, h, id){
var he=len *10;
this.w=w;
this.h=h;
this.x=x;
this.y=y;
this.id=id;
},
draw:function(){
con.fillStyle="#000000";
con.fillRect(this.x,this.y,this.w,this.h);
con.fillStyle="#ffffff";

},
clear:function(){//clears just a single box
con.fillRect(this.x,this.y,this.w,this.h);
con.strokeStyle="#ffffff";
con.strokeRect(this.x,this.y,this.w,this.h);
con.strokeStyle="#000000";
},
isTouched:function(e, e1){// if this box has been touched 
if(touchIt(this.x,this.y,this.w,this.h, e, e1)){

return true;
}
return false;
}

}
function ani(){
time=setInterval( function(){animate()},1000/10);

}

function animate(){
if(paused || gameover)
return;
snake.animate();
snake.ball();

}
// this gets the row of a box
/*  
□□□□□□□□□□□□□□□ ----->ROWS
*/
function getRow(id){
return  Math.ceil(id/40);
}

//this gets the column
/*
------> COLUMNS
□
□
□
□
□
□
*/
function getColumn(id){
var r=getRow(id);
var r1=id-(40*(r-1));//40 is used because the no rows or boxes horizontally is 40
return r1;//r1 is the column 
}

function infos(mess, x, y, position, size, color){
con.fillStyle = color; 
con.font="bold "+size+"px san-serif";
con.textAlign= position;
con.fillText(mess, x, y);

}
function GameOver(){
clearInterval(time);
bac.draw();
m.draw();
gameover=true;
infos("Game Over", cw/2,ch/2,"center",3/100*cw,"#ffffff");

}
