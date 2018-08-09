var entity={
x:0,
y:0,
w:0,
h:0,
x1:0,
y1:0,
w1:0,
h1:0,
speed:10,
image:null,
co:null,
ini:function(image, context, x, y, w, h, x1, y1, w1, h1){//creates an entity
//path:path to image file
this.x=x;
this.y=y;
this.x1=x1;
this.h1=h1;
this.co=context;
this.image=image;
this.calculate(w, h, w1, h1);
},

//this draws a sprite
draw:function(){
this.co.drawImage(this.image, this.x, this.y, this.w, this.h,this.x1,this.y1,this.w1,this.h1);
},


animate:function(){

this.co.drawImage(this.image, this.x, this.y, this.w, this.h,this.x1,this.y1,this.w1,this.h1);
},
calculate:function(w,h, w1, h1){
this.w=(w/100 *this.image.width )
this.h=(h/100 *this.image.height )
this.w1=(w1/100*this.image.width)
this.h1=(h1/100 *this.image.height)

},

calWithRatio:function(width, c){
//c is the percentage you want to give width or height
if(width=="width"){
this.w1=c/100*cw;
this.h1=(this.w1*this.h)/this.w;

}
else if(width=="height"){
this.h1=c/100 *ch;
this.w1=(this.h1*this.w)/this.h
}
else{

console.error("Please Use only width or height as arguements")
}
},
leftScreen:function(){
if(this.y1>=ch)
return true;
else 
return false;
},
changeImage:function( image){

this.image=image;
},
}

//this function checks if there is a collision
//it uses the axis aligned bounding box I.e it checks collision
//between 2 rectangles
//it returns true if there is a collision
//x :x axis of the first rectangle
//y: y ""    "" ""   ""    ""
//width is the width of 1st rectangle
//height is the height of 1st rectangle
//while x2 y2 width2 and height2 is for 2nd rectangle
function checkCollision(x, y, width, height, x2, y2, width2, height2){
if(x < x2 + width2 && x + width > x2 && y < y2 + height2 && height + y > y2){
return true;
}
else
return false;
}


//this checks if a particular area of the screen was touched
//returns true if +ve.
function touchIt(x, y, width, height,pageX, pageY){
//x is d x coordinate
//y is the y coordinate
//width is the width
//and height is the height. 
//pageX and pageY are coordinates touched on the screen
if(pageX>x && pageX<(x +width) && pageY>y && pageY < (y+height))
return true;
else 
return false;
}

//this function gets the next point when given two coordiantes
function nextPoint(x, y, x1, y1, d){
var xt=x1-x;
var yt=y1-y;
var sq=Math.sqrt((Math.pow(xt,2) +Math.pow(yt,2)));
var r=d/sq
return[(r*xt)+x, (r*yt)+y];


}

