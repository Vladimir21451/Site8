function evennumArr(a){
    //alert('one');
    let Arr = [576, 866, 253,444, 0, null, 354,751,23,34];
    let cnt = Arr.length;
    let nl =0;
    let ev = 0;
    let nev = 0;
    for(let i = 0; i < cnt; i++){
        if(Arr[i] == 0){nl = nl + 1;}
        else{
            if(Arr[i] % 2 == 0){ev = ev + 1;}
        }
    }
    alert('Число четных элементов массива: ' + ev);
    alert('Число нулевых элементов массива: ' + nl);
}