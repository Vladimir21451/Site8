function istype(a) {
    a = prompt('Введите значение аргумента: число или строку, или true/false');
    let d; 
    let lg = false;
    d = a;
    a = +a; 
    switch (d) {
        case 'true':
            alert('Вы ввели логический тип');
            lg = true;
            break;
         case 'false':
            alert('Вы ввели логическийтип');
            lg = true;
            break;
         case 'null':
            alert('Вы ввели тип null');
            lg = true;
            break;
        case '':
            alert('Вы ничего не ввели')
            lg = true;
            break;  
    }

     if(lg == true){return;}
    if((typeof(d) == 'string')&&(isNaN(a))){
        alert('Вы ввели строку');
    } else if(typeof(a) == 'number'){
        alert('Вы ввели число');
    }
    else{alert('Тип не определен');}
}