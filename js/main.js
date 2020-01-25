//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
function dz1 () {
  var a = 0
  var val = ''
  while (a <= 100) {
    if (
        (a > 1)
     && (a === 2 || Math.floor (a / 2) !== (a / 2)) 
     && (a === 3 || Math.floor (a / 3) !== (a / 3))
     && (a === 5 || Math.floor (a / 5) !== (a / 5))
     && (a === 7 || Math.floor (a / 7) !== (a / 7))
     && (a === 11 || Math.floor (a / 11) !== (a / 11))
    ) {
      val += ' ' + a
    }
    a++
  }
      console.log (val)
      //console.log ('2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 Проверка')
}

//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
function dz4 () {
  for (var a = 0; a <= 9; console.log (a), a++) { // здесь пусто
  }
}

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
/*
x
xx
xxx
xxxx
xxxxx
*/
function dz5 () {
  var a = 1
  var b = 1
  var c = ''
  while (a <= 20) {
    while (b <= a) {
      console.log (c += 'x')
      b++
    }
    a++
  }
}
