const btnEl = document.getElementById("btn");

btnEl.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
    
    btnEl.style.setProperty("--xPosition", x + "px");
    btnEl.style.setProperty("--yPosition", y + "px");
});

