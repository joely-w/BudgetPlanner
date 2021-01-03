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
      console.log(response);
      if (response.success) {
        console.log(response);
      } else {
        $('#error').html('<strong class=\'red\'>Login failed!</strong>');
      }
    });
    return false;
  });
});
