/**
 * Script to validate and submit registration form
 */
$(document).ready(() => {
  $('#register').on('submit', () => {
    const registrationForm = $('#register');

    if (!registrationForm[0].checkValidity()) {
      $('#register_button').click();
      return false;
    }
    const data = {
      user: {
        email: $('#email').val(),
        password: $('#password').val(),
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
      },
    };
    $.post('/api/register', data, (response) => {
      if (response.success) {
        $('.form').html('<h1>Registration successful!</h1><span>You can now <a href="login.html">login</a></span>');
      } else {
        $('#error').html(`<strong class="red">Error:</strong> ${response.error}`);
      }
    });
    return false;
  });
});
