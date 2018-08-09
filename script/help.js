ss=new Image();
ss.src="image/ss.png";

ss1=new Image();
ss1.src="image/ss1.png";

tt=new Image()
tt.src="image/bu.png";

t1=new Image()
t1.src="image/bu1.png";

time=null; //this holds the handle to the timer
anim=undefined;// this tells how the animation
h=undefined;// used in the animate function
h1=undefined;//used in the animate function
h2=undefined;// used in the animate function

function init(){
var canvas=document.getElementById("board");
canvas.width=document.body.clientWidth;
canvas.height=document.body.clientHeight;
cw=canvas.width;
ch=canvas.height;
con=canvas.getContext("2d");
con.fillStyle="#dddddd"//"#fffaf0";
con.fillRect(0,0,cw,ch);
if("ontouchstart" in window)
canvas.addEventListener("touchstart", touchHandler, false);
else
canvas.addEventListener("mousedown", touchHandler, false);


s=Object.create(entity);
s.ini(ss, con,0,0,100,100,0,0,100,100);
s.calWithRatio("width",90);
s.x1=cw/2 -s.w1/2;
s.y1=ch/2-s.h1/2;
s.draw();



st=Object.create(entity);
st.ini(ss1, con,0,0,100,100,0,0,100,100);
st.calWithRatio("width",90);
st.x1=cw/2 -s.w1/2;
st.y1=ch/2-s.h1/2;

anim=1;
}


function touchHandler(e){
con.fillRect(0,0,cw,ch);
if(anim==1){
st.draw();
anim=2;
}
else{
s.draw();
anim=1;
}
} 
