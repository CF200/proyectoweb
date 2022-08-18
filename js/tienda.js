/*ORDEN*/
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});


/*ORDEN*/
const optionMenu2 = document.querySelector(".select-menu2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".seBtn-text2");

optionMenu2.addEventListener("click", ()=>{
        console.log("a")});


selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active")); 
options2.forEach(option2 =>{
    option2.addEventListener("click", ()=>{
        let selectedOption2 = option2.querySelector(".option-text2").innerText;
        sBtn_text2.innerText = selectedOption2;
        
        optionMenu2.classList.remove("active");
    });
});

//TIENDA FILTRO MOVIL

const filtro_movil=document.getElementById("filtro-movil"),
filtro_orden2=document.getElementById("filtro-orden2"),
fondo_lateral_filtro_orden2=document.getElementById("fondo-lateral-filtro-orden2"),
ventana_filtro_orden2=document.getElementById("ventana-filtro-orden2"),
CERRAR_filtro_orden2=document.getElementById("CERRAR-filtro-orden2");

/*ACTIVAR Y DESACTIVAR MENU*/
     
filtro_movil.addEventListener("click" ,(e) =>{
  filtro_orden2.classList.add("activo"),
  fondo_lateral_filtro_orden2.classList.add("activo"),
  ventana_filtro_orden2.classList.add("activo");
 // FondoBlanco.classList.add("ACTIVANDO-MENU-1"),
});

fondo_lateral_filtro_orden2.addEventListener("click",(e) => {
  filtro_orden2.classList.remove("activo"),
  fondo_lateral_filtro_orden2.classList.remove("activo"),
  ventana_filtro_orden2.classList.remove("activo");
});

CERRAR_filtro_orden2.addEventListener("click",(e) => {
  filtro_orden2.classList.remove("activo"),
  fondo_lateral_filtro_orden2.classList.remove("activo"),
  ventana_filtro_orden2.classList.remove("activo");
});
