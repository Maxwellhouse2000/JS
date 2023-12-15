function f() {
     let x = prompt('ВВЕДИТЕ x:','');
     let y = prompt('ВВЕДИТЕ y:','');
     if(x == 0 || y == 0)
         alert((x == 0 && y == 0) ? 'Центр координат' : 'ось ' + ((x == 0 ? 'Y' : 'X')));
     else{
         let horizontal = (x > 0 ? [1,2] : [3,4]);
         let vertical = (y > 0 ? [1,4] : [2,3]);
         horizontal.forEach(el => {if(vertical.includes(el)) alert(el + ' четверть')});
     }
 }
 f();

// let x = +prompt("введите значение х:");
// console.log(x);
// let y = +prompt("введите значение y:");
// console.log(y);
// if (x > 0 && y > 0) {
//   console.log("данная точка расположена в первой четверти");
// } else if (x < 0 && y > 0) {
//   console.log("данная точка расположена в второй четверти");
// } else if (x < 0 && y > 0) {
//   console.log("данная точка расположена в третий четверти");
// } else if (x > 0 && y > 0) {
//   console.log("данная точка расположена в четвертой четверти");
// } else {
//   console.log("данная точка расположена в начале координат");
// }
