class Calculator{
   constructor(){
      this._operand1 = undefined;
      this._operand2 = undefined;
      this._operation = undefined;
   }
   setOperand1(val_operand1){
      this._operand1 = Number(val_operand1);
   }
   setOperand2(val_operand2){
      this._operand2 = Number(val_operand2);
   }
   setOperation(_operation){
      this._operation=_operation;
   }
   getResult(){
      switch (this._operation){
         case 'soma':

            return (this._operand1+this._operand2);
         case 'subtracao':
            return (this._operand1-this._operand2);
         case 'divisao':
            return (this._operand1/this._operand2);
         case 'multiplicacao':
            return (this._operand1*this._operand2);
         default:
            return (this._operand1);
      }
   }
   clearCalculator(){
      this.setOperand1(undefined);
      this.setOperand2(undefined);
      this.setOperation(undefined);
   }
}

const calc = new Calculator;
const operadores = document.getElementsByClassName("operador");
const elements = document.getElementsByClassName("numero");
const equal = document.getElementById("igual");
let field = '';

console.log(calc);

for (let i=0; i < 10; i++){
   elements[i].addEventListener('click', ()=>{
      field +=elements[i].innerHTML
      document.getElementById('campo_um').value=field;
   });
}

for (let i=0; i < 4; i++){
   operadores[i].addEventListener('click', ()=>{
      if(calc._operation === undefined){
         calc.setOperation(operadores[i].value);
         calc.setOperand1(document.getElementById('campo_um').value);
      }else{
         calc.setOperand2(document.getElementById('campo_um').value);
         document.getElementById('campo_dois').value = calc.getResult();
         calc.setOperand1(calc.getResult());
         calc.setOperation(operadores[i].value);
      }
      field='';
      document.getElementById('campo_um').value=0;
   });
}

equal.addEventListener('click', ()=>{
   calc.setOperand2(document.getElementById('campo_um').value);
   document.getElementById('campo_dois').value = calc.getResult();
   calc.setOperand1(calc.getResult());
   calc.setOperation('equal');
   field='';
   document.getElementById('campo_um').value=0;
});

document.getElementById('resetar').addEventListener('click', ()=>{
   field='';
   document.getElementById('campo_um').value=0;
   document.getElementById('campo_dois').value = 0;
   calc.clearCalculator();
});