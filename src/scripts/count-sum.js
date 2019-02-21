const result = document.getElementById('result');

function countSum(multipliers) {
  let currentValue = 0;

  result.value = '';
  multipliers.forEach(elem => {
    currentValue += +elem.value;
  });
  result.value = currentValue; // add parametr function such as sumElementsValue
}

export default countSum;
