function assocArr(){
myMap = new Map();
let arr =[];
let ar = [];
myMap.set('key1','value1');
myMap.set(1, 'value2');
myMap.set(true, 456);
myMap.set('key2', 'value3');
alert('Размер массива:  ' + myMap.size);
for(name of myMap.keys()){
    arr.push(name);
}
for(name of myMap.values()){
    ar.push(name);
}
alert('Список ключей: ' + arr.join());
alert('Список значений:  ' + ar.join());
}