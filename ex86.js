function analisArr(a){
let Arr = ['one', 'two', 'three', 'four', 'five', 'two']
let cnt= Arr.length;
let sov = 0;
for (var i = 0; i < Arr.length; i++) {
     for(let j = 0;j < Arr.length;j++){
         if((Arr[i] == Arr[j])&&(i != j)){
            sov = sov + 1;
            alert('Совпадающий элемент  ' + Arr[j]);
         }
        }
        sov =sov/2;
        sov = Math.round(sov);
     }  
     alert('Количество совпадающих элементов массива: ' + sov);
    }                                            