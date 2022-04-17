let operacion = prompt ("Ingresar que quiere hacer") ;

if(operacion = "Login"){ 
    let NombreDeUsuario = prompt ("Ingresar nombre de usuario") ;
    while(NombreDeUsuario != "Russo"){ 
        alert("Nombre de usuario incorrecto") ;
        NombreDeUsuario = prompt ("Ingresar nombre de usuario") ;
    }while (NombreDeUsuario = "Russo"){ 
        alert("Nombre de usuario correcto") ;
        break ;
    } ;
} ;
let contraseña = prompt ("Ingresar contraseña") ;
while (contraseña != "123456"){ 
    alert("Contraseña incorrecta")  ;
    contraseña = prompt("Ingresar contraseña") ;
}while (contraseña = "123456"){ 
    alert("Contraseña correcta") ;
    break ;
} ;
alert("Bienvenido") ;
let opciones = prompt ("Elija una aplicacion \nImagenes\nBuscador\nRed social\nCoderhouse") ;
switch (opciones){ 
    case "Imagenes" :
        alert("Ingresaste a imagenes") ;
        break ;
    case "Buscador":
        alert("Ingresaste al buscador") ;
        break ;
    case "Red social":
      alert("Ingresaste a tu red social") ;
        break ; 
    case "Coderhouse" :
      alert("Ingresaste a Coderhouse") ; 
        break ;
} ;