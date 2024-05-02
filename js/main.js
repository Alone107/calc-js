let item = document.querySelector('.calc__select');
let img = document.querySelector('.calc__img');
let options = item.options;
let mass = 50;
let index;

let ploshad = document.getElementById('Ploshad');
let tolshina = document.getElementById('tolshina')

let rasxod = 0;
let sum = 0;
let sum1 = 0;
let col = 0;
let money = 0;






function imgChange () {
  img.src = 'images/' + item.value + '.jpg'
  index = item.selectedIndex;
  img.getAttribute('mass')
  mass = options[index].getAttribute('mass')
  
  console.log(mass)
}

function buttonUse () {
  sum = +ploshad.value * 5;
  sum1 = +tolshina.value * 2;
  rasxod = sum + sum1;
  col = Math.ceil( rasxod / mass )
  money = 500 * col;


  
  document.querySelector('.text-1').innerHTML = 'Расход : ' + rasxod + "кг" 
  document.querySelector('.text-2').innerHTML = 'Количество мешков: '+ col + ' мешка / мешков'
  document.querySelector('.text-3').innerHTML = 'Цена: ' + money + 'рублей'
  
}

document.querySelector('.calc__btn').addEventListener('click', buttonUse)
item.onchange = imgChange;

