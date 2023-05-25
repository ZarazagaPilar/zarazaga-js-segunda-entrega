//DATOS CLIENTES VETERINARIA

//Constructor de clientes
class Cliente {
    constructor (nombre, apellido, dni, nombreMascota, edadMascota) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.dni = dni;
        this.nombreMascota = nombreMascota;
        this.edadMascota = edadMascota;
    }
}

//Algunos clientes ficticios con el constructor
const clienteZarazaga = new Cliente("pilar", "zarazaga", 30899271, "finita", 16);
const clienteLopez = new Cliente("tania", "lopez", 30899272, "clona",5);
const clienteProietti = new Cliente("josefina", "proietti", 30899273, "nilo", 3);
const clientePerotti = new Cliente("antonella", "perroti", 30899274, "gala", 8);

//Creamos array de clientes 
const arrayClientes =[];

//Ingresamos los clientes al array
arrayClientes.push(clienteZarazaga);
arrayClientes.push(clienteLopez);
arrayClientes.push(clienteProietti);
arrayClientes.push(clientePerotti);

//Funcion menu de opciones:
function menu() {
    let opcion = parseInt(prompt("Bienvenido a Kanus Veterinaria por favor ingrese la opcion que desea realizar: \n 1) Incripción como cliente \n 2) Baja  \n 3) Actualización de datos \n 4) Consultar sus datos \n 5) Salir"));
    return opcion;
}

//Inscripcion como cliente
function altaCliente () {
    let nombre = prompt("Ingrese su nombre: ").toLowerCase();
    let apellido = prompt("Ingrese su apellido: ").toLowerCase();
    let dni = parseInt(prompt("Ingrese su DNI: "));
    let nombreMascota = prompt("Ingrese el nombre de su mascota: ");
    let edadMascota = parseInt(prompt("Ingrese la edad de su mascota:"));
    let cliente = new Cliente (nombre, apellido, dni, nombreMascota, edadMascota);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

//Baja como cliente
function bajaCliente() {
    let dni = parseInt(prompt("Ingrese su DNI: "));
    let cliente= arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    alert("Usted ha sido dado de baja exitosamente");
    console.log(arrayClientes); 
}

//Actualizar datos 
function actualizarCliente() {
    let dni = parseInt(prompt("Ingrese su DNI: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese su nombre: ").toLowerCase();
    let apellido = prompt("Ingrese su apellido: ").toLowerCase();
    let nombreMascota = prompt("Ingrese el nombre de su mascota: ");
    let edadMascota = parseInt(prompt("Ingrese la edad de su mascota:"));
    let clienteactualizado = new Cliente (nombre, apellido, dni, nombreMascota, edadMascota);
    arrayClientes.splice(indice, 1, clienteactualizado);
    alert (`Se han actualizado exitosamente sus datos ${apellido} ${nombre}`)
    console.log(arrayClientes);
}

//Consultar datos 
function consultaCliente() {
    let dni = parseInt(prompt("Ingrese su DNI"));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    if (cliente){
        alert(`Se encuentra registrado como ${ cliente.apellido} ${cliente.nombre} propietario de ${cliente.nombreMascota} de ${cliente.edadMascota} años de edad`);
    } else { alert("No se encuentra registrado")};
}

//Salir del programa
function Salir() {
     alert("Gracias por confiar en Kanus Veterinaria");
}

function menuPrincipal() {
    let opcion;
    do {
      opcion = menu();
  
      switch (opcion) {
        case 1:
          altaCliente();
          break;
        case 2:
          bajaCliente();
          break;
        case 3:
          actualizarCliente();
          break;
        case 4:
          consultaCliente();
          break;
        case 5:
          Salir();
          break;
        default:
          alert("Opción inválida");
          break;
      }
    } while (opcion !== 5);
  }
  
menuPrincipal();

/*************************/
//CALCULO RANGO ETARIO

let rangoEdadTalla = "";

//Funcion para calcular 
function rangoEtario () {  
     alert("Calculemos el rango etario de tu mascota");

     //Pedimos DNI
     let dni = parseInt(prompt("Ingrese nuevamente su DNI para acceder a sus datos"));
     let cliente = arrayClientes.find(cliente => cliente.dni === dni);

     //pedimos categoria de raza 
     if (cliente) {let categoriaRaza = prompt("Ingrese la categoria a la que pertenece su mascota segun su talla: grande - mediana - chica");
     while (categoriaRaza !== 'grande' && categoriaRaza !=='mediana' && categoriaRaza !== 'chica') {  categoriaRaza = prompt("Ingrese la categoria a la que pertenece su mascota segun su talla: grande - mediana - chica");}
     
     //mostramos que rango estario pertenece
     if((cliente.edadMascota >= 15 && categoriaRaza === "chica") || (cliente.edadMascota >= 12 && categoriaRaza ==="mediana") || (cliente.edadMascota >= 8 && categoriaRaza ==="grande") ) { rangoEdadTalla = "geronte"} 
     else if ((cliente.edadMascota <= 1 && categoriaRaza === "chica") || (cliente.edadMascota <=2 && categoriaRaza ==="mediana") || (cliente.edadMascota <= 3 && categoriaRaza ==="grande")) {rangoEdadTalla= "cachorro"}
     else {rangoEdadTalla= "adulto"}; 
     
     //Mostramos en pantalla el Nombre del paciente y rango etario 
     alert(`${cliente.nombreMascota} es un perro ${rangoEdadTalla}`);}   
     else {alert("No se encuentra registrado")};
     return rangoEtario;
}

//llamamos a la funcion para que se ejecute
rangoEtario ();

//Caluculo de la Fluidoterapia 
let peso = parseFloat (prompt("Ingrese el peso de su mascota"));

//Funcion para el calculo de fluidoterapia
function fluidoterapia () { 
     const fluido = 10; //10 ml/kg/h
     const macrogotero= 20; //20 gotas x ml
     const segundosHora= 60; //segundos
     let calculoFluido= (macrogotero*((peso * fluido)/segundosHora)); 
     console.log (Math.round(calculoFluido));
}

//llamamos a la funcion para que se ejecute
fluidoterapia ()

//Calculo de dosis de fentanilo en bolo 

let dosisG = 5 //mcg/kg/h dosis geronte
let dosisA = 10 // mcg/kg/h dosis adulto
let concentracion = 50 //mcg/ml

//calculamos la dosis en relacion al peso del paciente y rango etario

function calculoDosis () {   
     if (rangoEdadTalla === "geronte"){
     let calculoFenta= ((peso*dosisG)/concentracion);
     console.log (calculoFenta.toFixed(2));}  
     else if (rangoEdadTalla === "adulto") {let calculoFenta= ((peso*dosisA)/concentracion);
     console.log (calculoFenta.toFixed(2))} 
     else {console.log ("es cachorro mejor no usar fentanilo")};
 }
//llamamos a la funcion para que se ejecute
 calculoDosis ();