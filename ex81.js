function isnumber(a) {
   a=prompt("Введите значение аргумента:");
   b = + a;
   if (isNaN(b)) {
      alert('Это не число.Замените аргумент');
      return;  
   }
   if((typeof b) === 'number'){
      /*alert(b + ' -это число');
      return;*/
      if (b%2 == 0) {
        alert(b + ' -это ЧЁТНОЕ число');
      }else{
        alert(b + ' -это НЕЧЁТНОЕ число'); 
      }
   }
}