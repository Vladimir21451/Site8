function reverseStr(str){
    str=prompt("Введите строку");
    var newStr = '', i;
        for (i = str.length - 1; i >= 0; i--) {
            newStr += str.charAt(i);
        }
        return newStr;
}
    alert('Реверсивная строка: ', newStr);
