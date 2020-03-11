export class Expense {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  }
  calcPercentage(totalIncome) {
    totalIncome > 0
      ? (this.percentage = Math.round((this.value / totalIncome) * 100))
      : (this.percentage = -1);
  }
  getPercentage() {
    return this.percentage;
  }
}
export class Income {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
}

export let data = {
  allValues: {
    exp: [],
    inc: []
  },

  total: {
    exp: 0,
    inc: 0
  },
  budget: 0,
  percentage: -1
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

const calculateTotal = function(type) {
  let sum = 0;
  data.allValues[type].forEach(function(current) {
    sum += current.value;
  });
  data.total[type] = sum;
};

export const calculateBudget = function() {
  calculateTotal('exp');
  calculateTotal('inc');
  data.budget = data.total.inc - data.total.exp;
  if (data.total.inc > 0) {
    data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
  } else {
    data.percentage = -1;
  }
};
export const calculatePercentages = function() {
  data.allValues.exp.forEach(function(current) {
    current.calcPercentage(data.total.inc);
  });
};
export const getBudget = function() {
  return {
    budget: data.budget,
    totalInc: data.total.inc,
    totalExp: data.total.exp,
    percentage: data.percentage
  };
};
export const getPercentage = function() {
  let allPerc = data.allValues.exp.map(function(current) {
    return current.getPercentage();
  });
  return allPerc;
};
export const deleteValues = function(type, id) {
  let ids = data.allValues[type].map(function(current) {
    return current.id;
  });

  let index = ids.indexOf(id);

  if (index !== -1) {
    data.allValues[type].splice(index, 1);
  }
};
