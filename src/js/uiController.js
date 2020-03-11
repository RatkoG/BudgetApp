export const elements = {
  inputType: document.querySelector('.budget__type'),
  inputDesc: document.querySelector('.add__description'),
  inputValue: document.querySelector('.add__value'),
  inputBtn: document.querySelector('.add__btn'),
  inputList: document.querySelector('.panel'),
  budgetLabel: document.querySelector('.budget__value'),
  incomeLabel: document.querySelector('.budget__income--value'),
  expensesLabel: document.querySelector('.budget__expenses--value'),
  dateLabel: document.querySelector('.budget__month'),
  percentageLabel: document.querySelector('.budget__expenses--percentage'),
  deleteBtn: '.item__delete--btn',
  item: '.panel__item',
  percentages: '.panel__item__value-percentage'
};
const formatNumber = function(num, type) {
  let numSplit, int, dec;

  num = Math.abs(num);
  num = num.toFixed(2);

  numSplit = num.split('.');

  int = numSplit[0];

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
  }

  dec = numSplit[1];

  return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
};
const nodeListForEach = function(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
};

export const getInput = () => {
  return {
    type: elements.inputType.value,
    desc: elements.inputDesc.value,
    value: parseFloat(elements.inputValue.value)
  };
};

export const addListItem = (obj, type) => {
  const myHTML = `<div class="panel__item panel__item-${
    type === 'inc' ? 'income' : 'expense'
  }" id="${type === 'inc' ? 'inc' : 'exp'}-${obj.id}">
 	<div class="panel__item__details">
		<div class="panel__item__details-name">${obj.description}</div>
  </div>
  <div class="panel__item__value">
 <div class="panel__item__value-number">${formatNumber(obj.value, type)}</div>
${type === 'exp' ? '<div class="panel__item__value-percentage"></div>' : ''}
</div>
	<button class="item__delete--btn">
			<i class="ion-ios-close-outline"></i>
		</button>
 	</div>`;
  const myFragment = document.createRange().createContextualFragment(myHTML);
  document.querySelector('.panel').appendChild(myFragment);
};
export const clearFields = function() {
  let fields = document.querySelectorAll('.add__description, .add__value');
  fields = Array.from(fields).forEach(field => {
    field.value = '';
  });
  elements.inputDesc.focus();
};

export const displayBudget = function(obj) {
  let type;
  obj.budget > 0 ? (type = 'inc') : (type = 'exp');
  elements.budgetLabel.textContent = formatNumber(obj.budget, type);
  elements.incomeLabel.textContent = formatNumber(obj.totalInc, 'inc');
  elements.expensesLabel.textContent = formatNumber(obj.totalExp, 'exp');

  if (obj.percentage > 0) {
    elements.percentageLabel.textContent = obj.percentage + '%';
  } else {
    elements.percentageLabel.textContent = '---';
  }
};

export const displayPercentages = function(percentages) {
  const fields = document.querySelectorAll(elements.percentages);
  nodeListForEach(fields, function(current, index) {
    if (percentages[index] > 0) {
      current.textContent = percentages[index] + '%';
    } else {
      current.textContent = '---';
    }
  });
};
export const deleteListItem = function(selectorID) {
  const element = document.getElementById(selectorID);
  element.closest('.panel__item').remove();
};

export const displayDate = function() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'June',
    'August',
    'September',
    'October',
    'Novemberf',
    'Deceber'
  ];

  elements.dateLabel.textContent = months[month] + ' ' + year;
};
