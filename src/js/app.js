import '../sass/main.scss';
import { getInput, elements } from './uiController';

//1.Get the field input data
const addItem = function() {
  const input = getInput();
  console.log(input);
};

//2.Add the item to the budget controller
//3.Add the item to the UI
//4.Calculate the budget
//5.Display the budget on the UI

elements.inputBtn.addEventListener('click', addItem);
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    addItem();
  }
});
