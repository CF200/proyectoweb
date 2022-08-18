
//CARRUSEL DE CARTAS MARCAS


$(document).ready(function(){
  $('.carousel-111').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  arrows:true,
  autoplay:true,

  responsive: [
      {
        breakpoint: 1024,
        settings: {
          
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
   
        }
      },

      {
          breakpoint: 800,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          }
        },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  

  });
});


//MENU-PEGAJOSO
window.addEventListener("scroll",()=>{
  const tamaño=40;
  const scrolled =window.scrollY;
  const header=document.getElementById("header");
  const MENUCONTENEDOR=document.getElementById("MENU-CONTENEDOR");
  
  if (scrolled>tamaño){
      //alert("uno");
      console.log("blue");
      //HAMBURGUESA.style.background="blue"
      header.classList.add("color");
      MENUCONTENEDOR.classList.add("color");
  }

  else{
      //HAMBURGUESA.style.background="white"
      console.log("ggggggggg");
     //HAMBURGUESA.style.display="none";
     header.classList.remove("color");
      MENUCONTENEDOR.classList.remove("color");
  }

});     
   
//MENU LATERAL 1 SIN RESPONSIVE


//CARRITO DE COMPRAS PANTALLA GRANDE

const CARRITOCOMPRA=document.getElementById("CARRITOCOMPRA"),
LATERALcarritoContenedor=document.getElementById("LATERALcarrito"),
FondoBlanco=document.getElementById("Fondo-lateral-carrito-blanco"),
carritoLateral=document.getElementById("carrito-ventana"),
CERRAR2=document.getElementById("CERRAR2");

/*ACTIVAR Y DESACTIVAR MENU*/
     
CARRITOCOMPRA.addEventListener("click" ,(e) =>{
  FondoBlanco.classList.add("activo"),
  carritoLateral.classList.add("activo"),
  LATERALcarritoContenedor.classList.add("activo");
 // FondoBlanco.classList.add("ACTIVANDO-MENU-1"),
});

FondoBlanco.addEventListener("click",(e) => {
  FondoBlanco.classList.remove("activo"),
  carritoLateral.classList.remove("activo"),
  LATERALcarritoContenedor.classList.remove("activo");
});

CERRAR2.addEventListener("click",(e) => {
  FondoBlanco.classList.remove("activo"),
  carritoLateral.classList.remove("activo"),
  LATERALcarritoContenedor.classList.remove("activo");
});




//CARRITO DE COMPRAS PANTALLA pequeña

const CARRITOCOMPRA2=document.getElementById("CARRITOCOMPRA2"),
LATERALcarritoContenedor2=document.getElementById("LATERALcarrito2"),
FondoBlanco2=document.getElementById("Fondo-lateral-carrito-blanco2"),
carritoLateral2=document.getElementById("carrito-ventana2"),
CERRAR3resp=document.getElementById("CERRAR3resp");

/*ACTIVAR Y DESACTIVAR MENU*/
     
CARRITOCOMPRA2.addEventListener("click" ,(e) =>{
  FondoBlanco2.classList.add("activo2"),
  carritoLateral2.classList.add("activo2"),
  LATERALcarritoContenedor2.classList.add("activo2");
 // FondoBlanco.classList.add("ACTIVANDO-MENU-1"),
});

FondoBlanco2.addEventListener("click",(e) => {
  FondoBlanco2.classList.remove("activo2"),
  carritoLateral2.classList.remove("activo2"),
  LATERALcarritoContenedor2.classList.remove("activo2");
});

CERRAR3resp.addEventListener("click",(e) => {
  FondoBlanco2.classList.remove("activo2"),
  carritoLateral2.classList.remove("activo2"),
  LATERALcarritoContenedor2.classList.remove("activo2");
});


//MENU LATERAL 1 SIN RESPONSIVE
const contenedorSubMenuRR=document.querySelector("#MenuSubcategoriasResponsiveRR"),
      contenedorSubMenu2RR=document.getElementById("MenuSubcategoriasResponsive2RR"),
      contenedorSubMenuGatoRR=document.getElementById("MenuSubcategoriasResponsive2GatoRR"),
      //Menuresponsive=document.querySelector("#Menuresponsive"),
      HAMBURGUESACCRR=document.getElementById("HAMBURGUESA-celularRR"),
      menuLateralFondoOscuroRR=document.getElementById("menu-lateral-fondo-oscuroRR"),
      menuLateralColorRR=document.getElementById("menu-lateral-fondo-oscuro-colorRR"),
      menuLateralRR=document.getElementById("menu-lateralRR"),
      CERRAR1RR=document.getElementById("CERRAR1RR"),
      CERRARMenu=document.getElementById("CERRARMenu");
        

      /*ACTIVAR Y DESACTIVAR MENU*/
     
      HAMBURGUESACCRR.addEventListener("click" ,(e) =>{
        menuLateralFondoOscuroRR.classList.add("ACTIVANDO-MENU-1"),
        menuLateralColorRR.classList.add("ACTIVANDO-MENU-1");
        menuLateralRR.classList.add("ACTIVANDO-MENU-1");
      
      });

      menuLateralColorRR.addEventListener("click",(e) => {
        menuLateralFondoOscuroRR.classList.remove("ACTIVANDO-MENU-1"),
        menuLateralColorRR.classList.remove("ACTIVANDO-MENU-1"),
        menuLateralRR.classList.remove("ACTIVANDO-MENU-1");
        
        document.querySelectorAll("#MenuresponsiveRR .activo").forEach((elemento) => {elemento.classList.remove("activo")});
      });

      CERRAR1RR.addEventListener("click",(e) => {
        menuLateralFondoOscuroRR.classList.remove("ACTIVANDO-MENU-1"),
        menuLateralColorRR.classList.remove("ACTIVANDO-MENU-1"),
        menuLateralRR.classList.remove("ACTIVANDO-MENU-1");
        
        document.querySelectorAll("#MenuresponsiveRR .activo").forEach((elemento) => {elemento.classList.remove("activo")});
      });
/*EQUIS*/
/*CERRARMenu.addEventListener("click",(e) => {
  menuLateralFondoOscuroRR.classList.remove("ACTIVANDO-MENU-1"),
  menuLateralColorRR.classList.remove("ACTIVANDO-MENU-1"),
  menuLateralRR.classList.remove("ACTIVANDO-MENU-1");
  
  document.querySelectorAll("#MenuresponsiveRR .activo").forEach((elemento) => {elemento.classList.remove("activo")});
});*/

/*document.querySelectorAll("#MenuresponsiveRR .MenucategoriasresponsiveRR .CERRARMenu").forEach((elemento)=>{
  elemento.addEventListener("click",(e) => {
    menuLateralFondoOscuroRR.classList.remove("ACTIVANDO-MENU-1"),
    menuLateralColorRR.classList.remove("ACTIVANDO-MENU-1"),
    menuLateralRR.classList.remove("ACTIVANDO-MENU-1");
  })
});*/
document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsiveRR .CERRARMenu").forEach((elemento)=>{
  elemento.addEventListener("click",(e) => {
    menuLateralFondoOscuroRR.classList.remove("ACTIVANDO-MENU-1"),
    menuLateralColorRR.classList.remove("ACTIVANDO-MENU-1"),
    menuLateralRR.classList.remove("ACTIVANDO-MENU-1");
    document.querySelectorAll("#MenuresponsiveRR .activo").forEach((elemento) => {elemento.classList.remove("activo")});
  })
});


/*EQUIS*/
    document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsiveRR .header-sideRR #atras-perroRR").forEach((boton) =>{
        boton.addEventListener("click",(e)=>{
            contenedorSubMenuRR.classList.remove("activo");
        });
    })
    
    document.querySelectorAll("#MenuresponsiveRR #MenuSubcategoriasResponsive2RR .header-side2RR #atras-perroRR").forEach((boton) =>{
        boton.addEventListener("click",(e)=>{
            contenedorSubMenu2RR.classList.remove("activo");
        });
    })

    document.querySelectorAll("#MenuresponsiveRR #MenuSubcategoriasResponsive2GatoRR .header-side2RR #atras-perroRR").forEach((boton) =>{
      boton.addEventListener("click",(e)=>{
          contenedorSubMenuGatoRR.classList.remove("activo");
      });
  })
    
    
    document.querySelectorAll("#MenuresponsiveRR .MenucategoriasresponsiveRR .aa .dd").forEach((elemento)=>{
      elemento.addEventListener("click",(e) => {
          contenedorSubMenuRR.classList.add("activo");/**/
         document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsiveRR .categoriaRR").forEach((categoria)=>{
              categoria.classList.remove("activo");
              if(categoria.dataset.categoria==e.target.dataset.categoria){
                  categoria.classList.add("activo")
              }
          });
      })
  });


   
    //Perro 
    document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsiveRR .item-submenuRR").forEach((elemento) => {
      elemento.addEventListener("click",(e) => {
        contenedorSubMenu2RR.classList.add("activo");
        document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsive2RR .categoria2RR").forEach((categoria)=>{
          categoria.classList.remove("activo");
          if(categoria.dataset.categoria==e.target.dataset.categoria){
              categoria.classList.add("activo")
          }
      });
        
      });
    });

    //Gato
    document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsiveRR .Gato  .items-submenuRR .item-submenuGatoRR").forEach((elemento)=>{
      elemento.addEventListener("click",(e) => {
        contenedorSubMenuGatoRR.classList.add("activo");/**/
          document.querySelectorAll("#MenuresponsiveRR .MenuSubcategoriasResponsive2GatoRR .categoria2GatoRR").forEach((categoria)=>{
            categoria.classList.remove("activo");
            if(categoria.dataset.categoria==e.target.dataset.categoria){
                categoria.classList.add("activo")
            }
        });
          
      })
  });



 