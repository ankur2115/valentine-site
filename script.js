window.onload=function(){

/* SLIDE CHANGE */
window.nextSlide=function(a,b){
document.getElementById("slide"+a).classList.add("hidden");
document.getElementById("slide"+b).classList.remove("hidden");

if(b===2) typeText();
};

/* TYPE TEXT */
let text="You slowly became my favorite person and my happiest notification ❤️";
let i=0;

function typeText(){
const el=document.getElementById("typing");
el.innerHTML="";
i=0;

let t=setInterval(()=>{
el.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(t);
},35);
}

/* RUNNING BUTTON */
window.runAway=function(){
let btn=document.querySelector(".no");
btn.style.left=Math.random()*(window.innerWidth-120)+"px";
btn.style.top=Math.random()*(window.innerHeight-80)+"px";
};

/* YES CLICK */
window.yesClicked=function(){
nextSlide(3,4);
};

/* CURSOR LIGHT + HEART TRAIL */
const light=document.getElementById("cursorLight");

document.addEventListener("mousemove",(e)=>{
light.style.left=e.clientX+"px";
light.style.top=e.clientY+"px";

let heart=document.createElement("span");
heart.innerHTML="💖";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.style.transform="translateY(-60px)";
heart.style.opacity="0";
},10);

setTimeout(()=>heart.remove(),900);
});

/* AMBIENT PARTICLES */

setInterval(()=>{
let p=document.createElement("div");
p.className="particle";

p.style.left=Math.random()*window.innerWidth+"px";
p.style.bottom="-10px";

let size=Math.random()*5+3;
p.style.width=size+"px";
p.style.height=size+"px";

p.style.animationDuration=(Math.random()*8+10)+"s";

document.body.appendChild(p);

setTimeout(()=>p.remove(),18000);

},400);

};
/* =========================
   CINEMATIC MUSIC LOOP
========================= */

const music = new Audio("music.mp3");

/* PLAY RANGE */
const startPoint = 20; // 00:20
const endPoint = 43;   // 00:43

music.volume = 0.9;

/* jab page pe first interaction ho */
document.addEventListener("click", () => {

    music.currentTime = startPoint;
    music.play().catch(()=>{});

}, { once:true });

/* LOOP ONLY SELECTED PART */
music.addEventListener("timeupdate", () => {

    if (music.currentTime >= endPoint) {
        music.currentTime = startPoint;
        music.play();
    }

});
