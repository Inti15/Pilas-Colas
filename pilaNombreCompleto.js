var nombreCompleto = []; //Array vacio que guardará los nombres completos (nombre + apellido)
//Falta terminar de comentar 
function Stack(){
  var elementos = [];

  this.add = agregar;
  this.pop = sacar;
  // this.ver = mostrar;

  function agregar(e) {
    elementos.push(e);
  }

  function sacar(){
    return elementos.pop();
  }

  // function mostrar(){
  //   for(var x=0; x<elementos.length-1; x++){
  //     return elementos[x];
  //   }
  //
  // }
}

var nombre = new Stack();

nombre.add("Ximena");
nombre.add("Yao");
nombre.add("Mixcoatl");
nombre.add("Quetzal");
nombre.add("Inti");

var apellido = new Stack();

apellido.add("De la");
apellido.add("Mtz");
apellido.add("San");
apellido.add("De la");
apellido.add("Sol");

// console.log(nombre.ver());
// console.log(apellido.ver());

for(var i=0; i<5 ; i++){
    nombreCompleto.push(nombre.pop() +" " + apellido.pop());
}

console.log(nombreCompleto);
