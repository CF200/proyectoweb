const accordionItemHeaders = document.querySelectorAll(".accordion-item-header"),
accordionItemHeaders3 = document.querySelectorAll(".accordion-item-header3");

//Para zoom
/*const imgcontenidoEle=document.querySelector(".imgp");
const imgEle=document.querySelector(".imgp img");
const listaproductos=document.querySelector(".imgcuadros .cuadros");

//Porcentaje de zoom
const ZOOM = 200;

//Evento del mouse dentro
imgcontenidoEle.addEventListener("mouseenter", function(){
    imgEle.style.width=ZOOM + "%";
    imgEle.style.height=ZOOM+"%";
});

//Evento del mouse fuera
imgcontenidoEle.addEventListener("mouseleave", function(){
    imgEle.style.width="100%";
    imgEle.style.top="0";
    imgEle.style.left="0";
    imgEle.style.height="100%";
});
//Evento del mouse en ejecucion cambiando de posicion*/





//acordeon
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


//acordeon
accordionItemHeaders3.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

