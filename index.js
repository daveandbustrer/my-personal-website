const text = document.getElementById("text");
const pretext = document.getElementById("pretext");
const triggerPoint = 50;

window.addEventListener("scroll", () => {
    if (window.scrollY > triggerPoint) {
        triggerEffect(1,"#3498db");
    } 
    else if (window.scrollY <= triggerPoint) {
        triggerEffect(0,"#ad343e");
    }
});

function triggerEffect(ONorOFF,color) {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        setTimeout(() => {
            text.style.opacity = String(ONorOFF);
            if (ONorOFF){
            pretext.style.opacity = String(0);
        }else{
            pretext.style.opacity = String(1);
        }
        }, 150);
    }, 100);
}