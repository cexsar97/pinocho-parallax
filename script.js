const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelector(".card__bg");
const range = 40;

 //funcion para calcular el valor de la posiscion del mosue en relacion a la ventana actual

 const calcValue = (a,b) => ((a/b)* range - range / 2).toFixed(1);

 let tiemeout;
 document.addEventListener("mousemove", ({x,y}) =>{
    if(tiemeout){
        window.cancelAnimationFrame(tiemeout);
    }
    tiemeout=window.requestAnimationFrame(()=>{
        const yValue = calcValue(y,window.innerHeight);
        const xValue = calcValue(x,window.innerWidth);
        cards.style.transform=`rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        [].forEach.call(images,(image)=>{
            image.style.transform =`translateX(${-xValue}px) translateY(${yValue}px)`
        });
        [].forEach.call(backgrounds,(item)=>{
            item.style.backgroundPosition = `${xValue*0.45}px ${-yValue * 0.45}`;
        })
    });
 },false);