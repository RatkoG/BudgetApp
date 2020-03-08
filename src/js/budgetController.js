export class Expense {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
}
export class Income {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
}

export const data = {
  allValues: {
    exp: [],
    inc: []
  },

  total: {
    exp: 0,
    inc: 0
  }
};

export const addValues = function(type, des, val) {
  let newItem, ID;
  // Creating New ID
  if (data.allValues[type].length > 0) {
    ID = data.allValues[type][data.allValues[type].length - 1].id + 1;
  } else {
    ID = 0;
  }
  if (type === 'exp') {
    newItem = new Expense(ID, des, val);
  } else if (type === 'inc') {
    newItem = new Income(ID, des, val);
  }
  data.allValues[type].push(newItem);
  return newItem;
};
