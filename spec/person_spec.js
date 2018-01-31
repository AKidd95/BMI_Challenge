describe("Person", function() {
  var person;

  beforeEach(function() {
    person_metric = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight: 144, height: 69});
  });

  it("should have weight of 90", function() {
    expect(person_metric.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person_metric.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
    person_metric.calculate_bmi('metric');
    expect(person_metric.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person_metric.calculate_bmi('metric');
    expect(person_metric.bmiMessage).toEqual("Overweight")
  });

  it("should have weight of 144", function() {
    expect(person_imperial.weight).toEqual(144);
  });

  it("should have height of 69", function() {
    expect(person_imperial.height).toEqual(69);
  });

  it("should calculate BMI value", function() {
    person_imperial.calculate_bmi('imperial');
    expect(person_imperial.bmiValue).toEqual(21.26)
  });

  it("should have a BMI Message", function() {
    person_imperial.calculate_bmi('imperial');
    expect(person_imperial.bmiMessage).toEqual("Normal")
  });

});
