export const elements = {
  inputType: document.querySelector('.budget__type'),
  inputDesc: document.querySelector('.add__description'),
  inputValue: document.querySelector('.add__value'),
  inputBtn: document.querySelector('.add__btn')
};

export function getInput() {
  elements;
  return {
    type: elements.inputType.value,
    desc: elements.inputDesc.value,
    value: elements.inputValue.value
  };
}
