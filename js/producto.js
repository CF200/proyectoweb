
var fullImg = document.getElementById("imagenGrande");

function myFunction(smallImg)
{

    fullImg.src = smallImg.src;
}

document.querySelectorAll(".contenedor-producto .mini").forEach((elemento)=>{
  elemento.addEventListener("mouseover",(e) => {
    console.log("a")
      elemento.classList.add("color");})
  elemento.addEventListener("mouseleave",(e)=>{
      elemento.classList.remove("color");
      
  })
});
