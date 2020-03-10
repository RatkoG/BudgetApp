export const elements = {
  inputType: document.querySelector('.budget__type'),
  inputDesc: document.querySelector('.add__description'),
  inputValue: document.querySelector('.add__value'),
  inputBtn: document.querySelector('.add__btn'),
  inputList: document.querySelector('.panel'),
  budgetLabel: document.querySelector('.budget__value'),
  incomeLabel: document.querySelector('.budget__income--value'),
  expensesLabel: document.querySelector('.budget__expenses--value'),
  percentageLabel: document.querySelector('.budget__expenses--percentage')
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
  }" id="income-${obj.id}">
 	<div class="panel__item__details">
		<div class="panel__item__details-name">${obj.description}</div>
  </div>
  <div class="panel__item__value">
 <div class="panel__item__value-number">${obj.value}</div>
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
  elements.budgetLabel.textContent = obj.budget;
  elements.incomeLabel.textContent = obj.totalInc;
  elements.expensesLabel.textContent = obj.totalExp;
  if (obj.percentage > 0) {
    elements.percentageLabel.textContent = obj.percentage + '%';
  } else {
    elements.percentageLabel.textContent = '---';
  }
};
