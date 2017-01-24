const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case

  //Testing for mult of 15
  it('should divise a number by 15 and return fizz-buzz', function() {
    [15, 30, 45].forEach(function(input) {
    	fizzBuzzer(input).should.equal('fizz-buzz');
    });
   });
    
  //testing for mult of 5
    it('should divise a number by 5 and return buzz', function() {
    	[5, 10, 15].forEach(function(input) {
    		fizzBuzzer(input).should.equal('buzz');
    	});
    });

    //Testing for mult of 3
    it('should divise a number by 3 and return fizz', function() {
    	[3, 6, 9, 12].forEach(function(input) {
    		fizzBuzzer(input).should.equal('fizz');
    	});
    });

    //Testing for nums not mult of 3 & 5
  it('should raise error if numbers are not divisible by 5 and 3', function() {
    	[2, 4, 7, 8].forEach(function(input) {
    		fizzBuzzer(input).should.equal(input);
    	});
    });
    // prove that an error is raised for bad inputs
    it('should produce error if input is not number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});