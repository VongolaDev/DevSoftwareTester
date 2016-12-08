
var chai = require('chai');
global.expect = chai.expect;
chai.Should();







describe.only('Butardo\'s Login App Testing',function(){


describe('Should Have LoginPage Presented', function() {
	it('LOGINAPP-103', function() {
		browser.url('localhost:8080/');
		browser.getTitle().should.be.equal('login');
		expect('#loginemail').to.exist;
		expect('#loginpassword').to.exist;
		console.log('LOGINAPP-103 SUCCESS');
	});
});
describe('Should Have Page Title', function() {
	it('LOGINAPP-102', function() {
		browser.url('localhost:8080/home');
		var des = browser.getText('#des');
		des.should.be.equal('home of the rising gallops');
		console.log('test1success');
		console.log('LOGINAPP-102 SUCCESS');
	});
});



describe('Should Have Page Title', function() {
	it('LOGINAPP-101', function() {
		browser.url('localhost:8080/home');
		browser.getTitle().should.be.equal('home');
		console.log('LOGINAPP-101 SUCCESS');
	});
});

describe('Should Click Login Button With Invalid Credentials and displays invalid credentials', function() {
	it('LOGINAPP-202', function() {
		browser.url('localhost:8080/');
		browser.setValue('#loginemail','xsample');
		browser.setValue('#loginpassword','xsample12');
		browser.click('#login');



		var a = browser.alertText()
		console.log(a)
		a.should.be.equal('Invalid Credentials');
		browser.alertAccept();
		console.log('LOGINAPP-202 SUCCESS');

	});
});



describe('Should click login button with empty credentials and displays missing credentials', function() {
	it('LOGINAPP-201', function() {
		browser.url('localhost:8080/');
		browser.click('#login');
		var a = browser.alertText()
		console.log(a)
		a.should.be.equal('Empty Fields');
		browser.alertAccept();
		console.log('LOGINAPP-201 SUCCESS');
	});
});

	describe('Should click login button with credentials and navigate to dashboard', function() {
		it('LOGINAPP-203', function() {
			browser.url('localhost:8080/');
			browser.setValue('#loginemail','sample');
			browser.setValue('#loginpassword','sample12');
			browser.click('#login');

			var a = browser.alertText()
			console.log(a)
			a.should.be.equal('You are logged In');
			browser.alertAccept();
			browser.getTitle().should.be.equal('dashboard');
			console.log('LOGINAPP-203 SUCCESS');
		});
	});



	describe('Should click logout button and redirect to home', function() {
		it('LOGINAPP-402', function() {
			browser.url('localhost:8080/dashboard');
			browser.click('#logout');
			browser.getTitle().should.be.equal('home');
			console.log('LOGINAPP-402 SUCCESS');
		});
	});

	describe('Logout button existing', function() {
		it('LOGINAPP-401', function() {
			browser.url('localhost:8080/dashboard');
			expect('#logout').to.exist;

			console.log('LOGINAPP-401 SUCCESS');
		});
	});

	describe('Should Register Successfully', function() {
		it('LOGINAPP-302', function() {
			browser.url('localhost:8080/reg');
			browser.setValue('#username','sample');
			browser.setValue('#password','sample12');
			browser.setValue('#cpassword','sample12');
			browser.click('#authorizing');
			var a = browser.alertText()
			console.log(a)
			a.should.be.equal('Registered');
			browser.alertAccept();
			browser.getTitle().should.be.equal('login');
			console.log('LOGINAPP-302 SUCCESS');
		});
	});

	describe('Should Not Register Successfully', function() {
	it('LOGINAPP-301', function() {
		browser.url('localhost:8080/reg');
		browser.click('#authorizing');
		var a = browser.alertText()
		console.log(a)
		a.should.be.equal('Empty Fields or Invalid Credentials');
		browser.alertAccept();

		console.log('LOGINAPP-301 SUCCESS');
	});
});


});











