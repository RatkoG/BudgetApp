import '../sass/main.scss';
import { getInput, elements, addListItem } from './uiController';
import { Expense, Income, addValues } from './budgetController';

const setupEventListeners = () => {
  elements.inputBtn.addEventListener('click', addItem);
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  });
};

// const natalia = new Expense(1, 1992, 'Developer');
//1.Get the field input data
let input, newItem;
const addItem = () => {
  const input = getInput();
  newItem = addValues(input.type, input.desc, input.value);
  addListItem(newItem, input.type);
};
//2.Add the item to the budget controller

//3.Add the item to the UI
//4.Calculate the budget
//5.Display the budget on the UI

setupEventListeners();
