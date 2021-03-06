
describe("BMICalculator", function() {
  var calculator;
  var person_metric;
  var person_imperial;

  beforeEach(function() {
    person_metric = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight: 144, height: 69});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person_metric);
    expect(person_metric.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person_imperial);
    expect(person_imperial.bmiValue).toEqual(21.26);
  });
});
