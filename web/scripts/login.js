$(document).ready(() => {
  $('#login').on('submit', () => {
    const loginForm = $('#login');

    if (!loginForm[0].checkValidity()) {
      $('#login_button').click();
      return false;
    }
    const data = {
      email: $('#email').val(),
      password: $('#password').val(),
    };
    $.post('/api/login', data, (response) => {
      if (response.logged_in) {
        $('.form').html(`<h1>Login successful!</h1><span>Welcome, ${response.first_name}!</span><br/><a href="/">Go home</a>`);
      } else {
        $('#error').html('<strong class=\'red\'>Login failed!</strong>');
      }
    });
    return false;
  });
});
