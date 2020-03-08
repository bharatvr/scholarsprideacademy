/*! Scholars Pride Academy v0.0.1 | (c) 2020 Shuaib Anwar | MIT License | http://link-to-your-git-repo.com */
console.log('another-file.js file loaded');

$("#contactForm").validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		},
		email: {
			required: true,
			email: true
		},
		mobile: {
			required: true,
			number: true,
			minlength: 10,
			maxlength: 12
		},
		message: {
			required: true
		}
	},
	messages: {
		name: {
			required: 'Please enter name',
			minlength: 'Please enter atleast two charactor'
		},
		email: {
			required: 'Please enter email address',
			email: 'Please enter valid email address'
		},
		mobile: {
			required: 'Please enter mobile',
			number: 'Please enter only number',
			minlength: 'Please enter valid mobile number',
			maxlength: 'Mobile number can not be more than 12 digit'
		},
	},
  submitHandler: function(form) {
    form.submit();
  }
 });