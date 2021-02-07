function makePr(_a){
   let lm = prompt('Введите ограничительное число: ');
    lm = + lm;
    if (isNaN(lm)){
        alert('Введите число!');
        return;
    }
    let arr = [];
    for(let j = 2; j < lm; j++){
    let pm = false;
    for (let i = 2; i < j; i++){
        if(j % i == 0){
           // alert('Составное число: ' + j);
            pm = true;
            break;
        }
    }
    if(pm == false){
        //alert('Простое число: ' + j);
        arr.push(j);
    }
} 
alert('Массив простых чисел до ' + lm +'  ' + arr.join());
    }
