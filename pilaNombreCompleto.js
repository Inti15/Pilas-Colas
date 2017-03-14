var nombreCompleto = []; //Array vacio que guardará los nombres completos (nombre + apellido)

function Stack(){//Se declara la estructura de la pila
  var elementos = []; // Se declara un arreglo vacio en el que se almacenarán los datos
//Se declaran las propiedades de la pila
  this.add = agregar;//add, propiedad que manda llamar a la función agregar
  this.pop = sacar;// pop, propiedad que manda llamar a la función sacar
  // this.ver = mostrar; propiedad a "pulir" para mostrar los elementos de la pila
  this.size = tamanio;

  function agregar(e) {//Función agregar que recibe un e (elemento)
    elementos.push(e);//Se realiza la operación .push(agregar elementos) en el arreglo elementos (ppreviamente definido en la linea 4)
  }

  function sacar(){//Función sacar
    return elementos.pop();//Se realiza la operación .pop(saca el último elemento de la pila)
  }

  // function mostrar(){//Función a "pulir" que ayudará a visualizar los elementos de la pila
  //   for(var x=0; x<elementos.length-1; x++){
  //     return elementos[x];
  //   }
  // }
  function tamanio() {
    return elementos.length;
  }
}

var nombre = new Stack();// Se define la variable nombre de "tipo pila" Se hace una instancia de la clase pila
//Mediante la propiedad add agregamos elementos a la pila
nombre.add("Ximena");
nombre.add("Yao");
nombre.add("Mixcoatl");
nombre.add("Quetzal");
nombre.add("Inti");

var apellido = new Stack();//Se define la variable apellido (se hace una instancia de la clase pila)
//Mediante la propiedad add agregamos elementos a la pila
apellido.add("De la");
apellido.add("Mtz");
apellido.add("San");
apellido.add("De la");
apellido.add("Sol");
//Código a pulir para poder visualizar los elementos de la pila
// console.log(nombre.ver());
// console.log(apellido.ver());
var tam = nombre.size();//Se declara la variable tam en la que se asigna el tamaño de la pila(antes de manipularlar) mediante la propiedad .size()
for(var i=0; i<tam ; i++){//Ciclo for que ayuda a realizar n número (para este caso 5) de veces la siguiente operación
    nombreCompleto.push(nombre.pop() +" " + apellido.pop());//Mediante la propiedad .push se agrega la concatenación de los elementos nombre y apellido de cada una de las pilas
}

console.log(nombreCompleto);// Se muestra en la consola el contenido del arreglo nombreCompleto
