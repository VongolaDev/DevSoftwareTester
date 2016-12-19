
var chai = require('chai');
global.expect = chai.expect;
chai.Should();







describe('Butardo\'s Login App Testing',function(){


describe('Should search user', function() {
	it('LOGINAPP-103', function() {
		browser.url('localhost:8080/Dashboard');
		browser.setValue('#searchval','sample');
		browser.click('#srchbtn');
	
	});
});

describe('Should show all', function() {
	it('LOGINAPP-103', function() {
		browser.url('localhost:8080/Dashboard');
		browser.click('#showbtn');
	
	});
});

describe('Should click register', function() {
	it('LOGINAPP-103', function() {
		browser.url('localhost:8080/Dashboard');
		browser.click('#regbtn');
	
		browser.setValue('#adduserval','botreg');
		browser.setValue('#addpassval','botpassword');
		browser.setValue('#addcpassval','botpassword');
		browser.click('#subbtn');
	
	});
});
describe('Should delete', function() {
	it('LOGINAPP-103', function() {
		browser.url('localhost:8080/Dashboard');
		browser.click('#del1');
		browser.click('#perform');
	
		
	
	});
});

describe('Should update', function() {
	it('LOGINAPP-103', function() {
		browser.url('localhost:8080/Dashboard');
		browser.click('#up1');
browser.setValue('#userval','botupdate');
browser.setValue('#passval','botupdate');

		browser.click('#subbtn');
	
		
	
	});
});


});











