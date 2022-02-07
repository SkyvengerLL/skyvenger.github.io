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


$(document).ready( () =>{
   const calc = new Calculator;
   let field = '';
   $(".numero").on('click', function (){
      field += this.value;
      $('#campo_um').val(field);
   });;
   
   $(".operador").on('click', function (){
      if(calc._operation === undefined){
         calc.setOperation(this.value);
         calc.setOperand1($('#campo_um').val());
      }else{
         calc.setOperand2($('#campo_um').val());
         $('#campo_dois').val(calc.getResult());
         calc.setOperand1(calc.getResult());
         calc.setOperation(this.value);
      }
      field='';
      $('#campo_um').val(0);
   });

   $("#igual").on('click', function (){
      calc.setOperand2($('#campo_um').val());
      $('#campo_dois').val(calc.getResult());
      calc.setOperand1(calc.getResult());
      calc.setOperation(undefined);
      field='';
     $('#campo_um').val(0);
   });

   $('#resetar').on('click', ()=>{
      field='';
      $('#campo_um').val(0);
      $('$campo_dois').val(0);
      calc.clearCalculator();
   });
});