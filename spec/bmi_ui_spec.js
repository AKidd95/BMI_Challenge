
describe('BMI_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#Metric').trigger('click');
        $('#weight').val('90');
        $('#height').val('186');
        $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
    });
});

describe('BMI_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#Imperial').trigger('click');
        $('#weight').val('144');
        $('#height').val('69');
        $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 21.26');
    });

    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Normal');
    });
});
