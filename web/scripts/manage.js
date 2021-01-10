/**
 * Script to handle account management page
 * IMPORTANT NOTE: This script replaces main.js for the manage.html page
 * so as to remove repeated AJAX calls
 */
function loadDetails(userDetails) {
  $('.details.firstname').text(userDetails.first_name);
  $('.details.lastname').text(userDetails.last_name);
  $('.details.email').text(userDetails.email);
}

$.post('/api/status', (response) => {
  if (response.logged_in) {
    $(document).ready(() => {
      $('.account').toggle();
      $('.account.only a span').text(response.first_name);
    });
    loadDetails(response);
    $('#logout').click(() => {
      $.post('/api/logout', (logoutResponse) => {
        if (logoutResponse.success) {
          window.location.replace('/');
        }
      });
    });
  }
});
