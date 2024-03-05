        iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
        iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
        iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
    })

    actualizar.addEventListener("click" ,() => {
        iframe1.src = 'https://play.pixels.xyz/pixels/share/'+parametro1.value;
        iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
        iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
        iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
    })
};

function esValido(param) {
    if (!param) {
        return false;
    } else if (param <= 0 || param > 5000 ) {
        return false;
    } else {
        return true;
    }
}

function getRandomNumber(){
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 5000) + 1;

    return randomNumber;
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

async function copy(event){
    console.log(event.target)
    const div = event.target;    
    const text = div.textContent;
    console.log(text)
    await navigator.clipboard.writeText(text).then(() => {
        console.log(`Contenido copiado.`);
      }, () => {
        console.error("Error al copiar al portapapeles");
      });
}
  
  // Ejemplo de uso
//   const iframeElement = document.getElementById("myIframe");
//   zoomIframe(iframeElement, 1.5); 

obtenerParametros();
