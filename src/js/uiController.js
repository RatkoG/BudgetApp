export const elements = {
  inputType: document.querySelector('.budget__type'),
  inputDesc: document.querySelector('.add__description'),
  inputValue: document.querySelector('.add__value'),
  inputBtn: document.querySelector('.add__btn'),
  inputList: document.querySelector('.panel')
};

export const getInput = () => {
  elements;
  return {
    type: elements.inputType.value,
    desc: elements.inputDesc.value,
    value: elements.inputValue.value
  };
};

export const addListItem = (obj, type) => {
  //TODO: TESTING
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
