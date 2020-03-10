import '../sass/main.scss';
import { getInput, elements, addListItem, clearFields } from './uiController';
import {
  Expense,
  Income,
  addValues,
  calculateBudget,
  getBudget
} from './budgetController';

const setupEventListeners = () => {
  elements.inputBtn.addEventListener('click', addItem);
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  });
};

const updateBudget = function() {
  calculateBudget();
  let budget = getBudget();
  console.log(budget);
};

let input, newItem;
const addItem = () => {
  const input = getInput();
  if (input.desc !== '' && input.value > 0) {
    newItem = addValues(input.type, input.desc, input.value);
    addListItem(newItem, input.type);
    clearFields();
    updateBudget();
  }
};

setupEventListeners();
