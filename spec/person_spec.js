describe("Person", function() {
  var person;

  beforeEach(function() {
    person_metric = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90", function() {
    expect(person_metric.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person_metric.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
    person_metric.calculate_bmi();
    expect(person_metric.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person_metric.calculate_bmi();
    expect(person_metric.bmiMessage).toEqual("Overweight")
  });
});
