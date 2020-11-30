const calc = () => {
    const calcBlock = document.querySelector('.calc-block'),
        checkboxOne = document.getElementById('myonoffswitch'),
        checkboxTwo = document.getElementById('myonoffswitch-two'),
        secondWell = document.getElementById('second-well'),
        calcResult = document.getElementById('calc-result'),
        diameterOne = document.querySelector('.diameter-one'),
        ringsOne = document.querySelector('.rings-one'),
        diameterTwo = document.querySelector('.diameter-two'),
        ringsTwo = document.querySelector('.rings-two');
  
  
    checkboxTwo.checked = false;

    const countSumm = () => {
        let result = 0; // итоговая сумма

        //выбранный диаметр и кол-во колец первой и второй камер
        let diameterOneInd = diameterOne.options.selectedIndex, 
              ringsOneInd = ringsOne.options.selectedIndex, 
              diameterTwoInd = diameterTwo.options.selectedIndex, 
              ringsTwoInd = ringsTwo.options.selectedIndex; 

        if (checkboxOne && checkboxOne.checked) { // выбрано две камеры
          secondWell.style.display = 'block';
          result = 15000;
        } else if (checkboxOne && !checkboxOne.checked) { // выбрана одна камера
          secondWell.style.display = 'none';
          result = 10000;
        }
        // диаметр
        if (diameterOne && diameterOneInd === 0) {
          result = result * 1; // диаметр 1й камеры 1,4 метра - цена не меняется
        } else if (diameterOne && diameterOneInd === 1) {
          result = result + (result * 0.2); // диаметр 1й камеры 2 метра - к цене прибавляется 20%
        }

        if (diameterTwo && diameterTwoInd === 0) {
          result = result * 1; // диаметр 2й камеры 1,4 метра - цена не меняется
        } else if (diameterTwo && diameterTwoInd === 1) {
          result = result + (result * 0.2); // диаметр 2й камеры 2 метра - к цене прибавляется 20%
        }
        // кольца
        if (ringsOne && ringsOneInd === 0) {
          result = result * 1; // одно кольцо у первой камеры - цена не меняется
        } else if (ringsOne && ringsOneInd === 1) {
          result = result + (10000 * 0.3); // 2 кольца у первой камеры - добавляется 30% от 10000
        } else if (ringsOne && ringsOneInd === 2) {
          result = result + (10000 * 0.5); // 3 кольца у первой камеры - добавляется 50% от 10000
        }

        if (ringsTwo && ringsTwoInd === 0) {
          result = result * 1; // одно кольцо у 2й камеры - цена не меняется
        } else if (ringsTwo && ringsTwoInd === 1) {
          result = result + (5000 * 0.2); // 2 кольца у 2й камеры - добавляется 20% от 5000
        } else if (ringsTwo && ringsTwoInd === 2) {
          result = result + (5000 * 0.4); // 3 кольца у 2й камеры - добавляется 40% от 5000
        }

        if (checkboxTwo.checked && !checkboxOne.checked) { // выбрано днище - одна камера
          result = result + (result * 0.1); 
        } else if (checkboxTwo.checked && checkboxOne.checked) { // выбрано днище - две камеры
          result = result + (result * 0.2); 
        } else if (checkboxTwo && !checkboxTwo.checked) { // днище не выбрано
          result = result ; 
        }

        calcResult.value = result;
    };
  
  calcBlock.addEventListener('change', (event) => {
    let target = event.target;

    if(target.matches('select') || target.matches('input')){
      countSumm();
    }
  });
}; 

export default calc;