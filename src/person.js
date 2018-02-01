function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function(unit_system) {
  calculator = new BMICalculator();
  if (unit_system === 'metric'){
    calculator.metric_bmi(this);
  } else {
    calculator.imperial_bmi(this);
  }
};
