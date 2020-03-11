import '../sass/main.scss';
import {
  getInput,
  elements,
  addListItem,
  clearFields,
  displayBudget,
  deleteListItem
} from './uiController';
import {
  addValues,
  calculateBudget,
  getBudget,
  deleteValues
} from './budgetController';

const setupEventListeners = () => {
  elements.inputBtn.addEventListener('click', addItem);
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  });
  elements.inputList.addEventListener('click', deleteItem);
};

const updateBudget = function() {
  calculateBudget();
  let budget = getBudget();
  console.log(budget);
  displayBudget(budget);
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

const deleteItem = function(e) {
  let itemID, splitID, type, ID;
  itemID = e.target.parentNode.parentNode.id;
  if (itemID) {
    splitID = itemID.split('-');
    type = splitID[0];
    ID = parseInt(splitID[1]);
    deleteValues(type, ID);
    deleteListItem(itemID);
    updateBudget();
  }
};

displayBudget({
  budget: 0,
  totalIn: 0,
  totalExp: 0,
  percentage: -1
});
setupEventListeners();
