const datos = document.getElementById("datos")
const contador = document.getElementById("count-down")
const nombreHabilidad = document.getElementById("nombre-habilidad")
const nombreModulo = document.getElementById("nombre-modulo")


let horasv = document.getElementById("horas")
let minutosv = document.getElementById("minutos")
let segundosv = document.getElementById("segundos")
const boton= document.getElementById("startButton")






boton.addEventListener("click", ()=>{
    const  habilidad = document.getElementById("habilidad-input").value
    const modulo = document.getElementById("modulo-input").value
    let horas = document.getElementById("horas-input").value
    let minutos = document.getElementById("minutos-input").value
    let segundos = document.getElementById("segundos-input").value
    datos.classList.add("disabled")
    contador.classList.remove("disabled")
    nombreHabilidad.innerHTML = habilidad
    nombreModulo.innerHTML = modulo
     horasv.innerHTML = horas.toString().padStart(2, "0");
  minutosv.innerHTML = minutos.toString().padStart(2, "0");
  segundosv.innerHTML = segundos.toString().padStart(2, "0")

            
            
           if(segundos == 0 && minutos == 0 && horas == 0){

           }else if (segundos >=0) {
            setInterval(()=>{
                if(segundos <= 60 && segundos > 0){
                    result = (segundos - 1);
                    segundosv.innerHTML = result.toString().padStart(2, "0");;
                    segundos = result;
                    
                    
                }
                if(segundos == 0 && minutos == 0 && horas == 0){

                } else if(segundos == 0){
                    segundosv.innerHTML = 60;
                    segundos = 60
                    result = (segundos - 1);
                    segundosv.innerHTML = result.toString().padStart(2, "0");
                    segundos = result;
                    
                    setTimeout(()=>{
                        if(minutos <= 60 && minutos > 0){
                            result = (minutos - 1);
                            minutosv.innerHTML = result.toString().padStart(2, "0");
                            minutos = result;
                        }
                        if(segundos == 0 && minutos == 0 && horas == 0){

                        }else if(minutos == 0 && horas != 0){
                            minutosv.innerHTML = 60;
                            minutos = 60
                            result = (minutos - 1);
                            minutosv.innerHTML = result.toString().padStart(2, "0");
                            minutos = result;
                            
                            setTimeout(()=>{
                                if(horas <= 24 && horas > 0){
                                    result = (horas - 1);
                                    horasv.innerHTML = result.toString().padStart(2, "0");
                                    horas = result;
                                
                                }
                                
                            }, 10)
                        }
                        
                    }, 10)
                }
                
                
            }, 1000)      
        }
           
            
        })

        