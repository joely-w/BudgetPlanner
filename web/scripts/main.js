/**
 * Script to run on every page
 */
$.post('/api/user/status', (response) => {
  $(document).ready(() => {
    if (response.logged_in) {
      $('.account').toggle();
      $('.account.only a span').text(response.first_name);
    }
  });
});
