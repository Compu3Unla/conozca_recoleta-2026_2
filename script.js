
/* ========================================== */
/* BOTONES INTERACTIVOS - GASTRONOMÍA         */
/* ========================================== */

/*
Este script pertenece a la sección Gastronomía
del sitio web Conozca Recoleta.

Su función es controlar la interacción de los
botones "Compartir" y "Guardar" de cada restaurante.

Al hacer clic, el botón cambia su apariencia
del estado normal al activo, modificando el
fondo verde por violeta y el ícono violeta
por crema, según el diseño realizado en Figma.

Al volver a hacer clic, recupera su estado original.

Cada botón funciona de manera independiente.
La interacción es únicamente visual.
*/

document.querySelectorAll(".boton-icono").forEach(boton => {

    boton.addEventListener("click", function() {

        this.classList.toggle("activo");

        const activo = this.classList.contains("activo");

        this.setAttribute("aria-pressed", activo);

    });

});



/* ========================================== */
/* MONOGRAMA RECOLETA - GALERÍA GASTRONÓMICA  */
/* ========================================== */

/*
Este script incorpora el monograma institucional
de Conozca Recoleta en todas las fotografías
de la sección Gastronomía.

El SVG está definido directamente en JavaScript,
por lo que no requiere archivos externos ni
modificaciones adicionales en el HTML.

El monograma aparece en la esquina inferior
derecha de cada fotografía.
*/

// SVG ORIGINAL DEL MONOGRAMA RECOLETA

const monogramaRecoleta = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="36"
     height="51"
     viewBox="0 0 36 51"
     fill="none"
     aria-hidden="true">

  <g opacity="0.6">

    <path d="M10.8538 5.5951L9.74074 5.01878C8.58183 4.41877 7.55175 2.63112 6.86233 0.0247761L6.85587 0L6.8494 0.0247761C6.16052 2.63112 5.13045 4.41877 3.971 5.01878L2.85791 5.5951L3.971 5.80677C5.12991 6.02706 6.15998 6.68363 6.8494 7.6402L6.85587 7.64936L6.86233 7.6402C7.55121 6.68309 8.58129 6.02706 9.74074 5.80677L10.8538 5.5951Z" fill="#F6F4F0"/>

    <path d="M23.8898 44.1758C23.8451 43.4535 23.8715 42.7205 23.8914 41.9971C24.0052 37.9107 23.2689 33.9228 19.6191 31.5077C17.7956 30.3012 16.0055 30.0453 15.1252 29.9791H12.1455V27.6867H14.4251C16.9428 27.5386 18.7637 26.7501 19.7749 26.2136C21.1645 25.4763 24.038 23.9509 24.7765 20.9051C25.0811 19.648 24.9237 18.5379 24.7576 17.8334C24.5771 18.0973 23.7103 19.3059 22.0587 19.6458C20.0816 20.053 18.6068 18.8804 18.4138 18.7216C19.5442 18.2869 20.3182 17.3804 20.3743 16.3985C20.453 15.0278 19.1275 14.0895 18.748 13.9231C16.7127 13.0306 14.0267 13.594 12.1455 14.6125C12.2382 13.8784 12.5083 12.5485 13.4295 11.2079C13.4942 11.1137 14.3189 9.93626 15.6998 9.04755C18.8472 7.02183 23.7216 7.24482 27.4291 9.26677C28.3928 9.79245 30.0832 10.7533 31.4006 12.7284C33.7691 16.2784 33.8569 21.5116 31.1111 25.1639C29.4288 27.4018 27.1865 28.3751 25.951 28.7898C26.6782 29.155 27.7465 29.7954 28.782 30.8699C31.3683 33.5544 31.8701 37.0009 31.9854 40.5746C32.0431 42.3564 32.1461 44.2178 32.8231 45.888C33.0015 46.3281 33.209 46.689 33.43 47.0094C34.1631 48.0732 35.087 48.671 35.6778 48.9845C35.4929 49.1197 35.2573 49.27 34.97 49.4063C34.6752 49.5463 34.4024 49.6352 34.1766 49.6928C34.1766 49.6928 32.9611 50.0876 31.7014 50.1528C28.6435 50.3111 25.2967 49.2447 24.2289 46.0545C24.0251 45.4464 23.9302 44.8151 23.8909 44.1758H23.8898Z" fill="#F6F4F0"/>

    <path d="M10.6283 40.3316V41.8462C10.61 42.5837 10.6615 44.3539 11.7066 46.1527C12.4387 47.4129 13.3526 48.1594 13.9089 48.5448C13.7281 48.6842 11.6596 50.2227 9.33896 49.2891C7.9139 48.7155 7.18675 47.5295 6.95444 47.1091C6.72213 47.529 5.99499 48.7155 4.56992 49.2891C2.2488 50.2227 0.180796 48.6842 0 48.5448C0.556752 48.1594 1.47014 47.4129 2.20224 46.1527C3.24739 44.3539 3.2989 42.5837 3.28057 41.8462V15.0563C3.2989 14.3189 3.24739 12.5487 2.20224 10.7498C1.47014 9.48965 0.556256 8.74318 0 8.35776C0.180796 8.21833 2.2493 6.67981 4.56992 7.61342C5.99499 8.18705 6.72213 9.37301 6.95444 9.79343C7.18675 9.37354 7.9139 8.18705 9.33896 7.61342C11.6601 6.67981 13.7281 8.21833 13.9089 8.35776C13.3521 8.74318 12.4387 9.48965 11.7066 10.7498C10.6615 12.5487 10.61 14.3189 10.6283 15.0563V16.571" fill="#F6F4F0"/>

  </g>
</svg>
`;


/* INSERTAR MONOGRAMA EN TODAS LAS FOTOGRAFÍAS */

document.querySelectorAll(".gastronomia .foto-local").forEach(imagen => {

    // Evitar duplicar contenedores
    let contenedor = imagen.closest(".contenedor-foto");

    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.classList.add("contenedor-foto");

        imagen.parentNode.insertBefore(contenedor, imagen);
        contenedor.appendChild(imagen);
    }

    // Insertar monograma una sola vez por fotografía
    if (!contenedor.querySelector(".monograma")) {

        const marca = document.createElement("div");
        marca.classList.add("monograma");

        marca.innerHTML = monogramaRecoleta;

        contenedor.appendChild(marca);
    }

});
