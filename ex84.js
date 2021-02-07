function randomInteger(min, max) {
    // случайное число от min до (max+1)
    min=prompt("Введите нижнюю границу");
    max=prompt("Введите верхнюю границу");
    min = Math.ceil(min);
    max = Math.floor(max);
      let rand = Math.floor((Math.random() * (max - min + 1)) + min);
      alert('Ваше случайное число: ' + rand); 
      return Math.floor(rand);
    }
 // alert( randomInteger(0, 100));