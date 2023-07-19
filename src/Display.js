/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual= displayValorActual;
        this.displayValorAnterior= displayValorAnterior;
        this.calculador = new Calculadora();
        //para que no aparezca ningun tipo de operacion
        this.tipoOperacion = undefined;
        this.valorActual= "";
        this.valorAnterior= "";
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        
    }
    }  
    //metodo:

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodoC() {
        this.valorActual= '';
        this.valorAnterior ='';
        //borrar todo tipo de oepracio
        this.tipoOperacion= undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior= this.valorActual || this.valorAnterior;
        this.valorActual= '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
 
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`
    }
    
    //calcular(): tomar los valores el diplay y darselos a la calculadora para que haga el calculo
    calcular(){
        //parsarlo: es decir que deje ser string y vuelva ser un numero
        const valorAnterior= parseFloat(this.valorAnterior);
        const valorActual= parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        //si tiene valores toca hacer una actualizacion
        this.valorActual= this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    } 

}

//linea 1 instanciar(todo objeto que derive de algun otro, todo objeto son instancias de algun otro, menos la clase Object((que es la madre de todas))) la clase
//cuando solicitemos la clase, vamos a pasarle valores para solicitarla: linea 2