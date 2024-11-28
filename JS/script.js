//Домашнее задание
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
//let city1 = {}
//city1.name = "ГородN";
//city1.population = "10 млн";
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
//let city2 = {
//name: "ГородM",
//population: 1e6
//};
// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.
//function getName() {
//     return this.name; 
//    }
//    function getName() {
//        return this.name; 
//       }
//    city1.getName = getName;
//   city2.getName = getName;
//console.log(city1.getName)

// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.
//function exportStr() {
//    return `name=${this.name}\npopulation=${this.population}\n`;
//}
//city1.exportStr = exportStr;
//city2.exportStr = exportStr;
// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..
//function getObj() {
//    return this;
//}
//city1.getCity = getObj;
//city2.getCity = getObj;


// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

//let d1 = [45,78,10,3]
//d1.push(100)
//console.log(d1)
//console.log(d1.indexOf(6))
//console.log(d1.indexOf(7))
// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
//let d2 = [45,78,10,3];
//function d2Sum(d2){
//let sum = 0;
//for(let i = 0; i < d2.length; i++){
//    sum += d2[i];
//    }
//console.log(sum);
//}
//d2Sum(d2);
// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
//let d3 = [45, 78, 10, 3]
//d3[7] = 100
//let sum3 = 0
//for(let el in d3) {
//    sum3 += d3[el]
//} 
//console.log(sum3) 

// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
//let d4 = [45,78,10,3];
//d4.soft(function my(a, b) {
//   return a - b; 
//});
//console.log(d4)

ДЗ урок 22

//Задача 1
//function buttonClick() {
//    let elem = document.getElementById('elem');
//    elem.innerHTML = 'Ку-ку! А я <b>жирный</b>!'
//}

//Задача 2
//function buttonClick() {
//   let elem = document.getElementById('elem');
//  elem.innerHTML = 'Абзац превратился в h3!'
//    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>'
//}

//Задача 3
//function buttonClick() {
    //let elem = document.getElementById('elem1');
    //elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>'
    //}

//Задача 4
//function buttonClick() {
//document.forms.elements[0].value = 2 
//document.forms.elements[1].value = 4
//let span = document.getElementById('span');
//span.innerHTML = '=6'
//}

//Задача 5
let elem = document.getElementById('elem3');
function buttonClick() {
for(let i = 0; i<elem3.length; i++){
             elem3[i].innerHTML = i+1;
       }
    }

