/**
 * Get and convert datepicker date to the MySQL date format (YYYY-MM-DD)
 */
function getDate() {
  const date = new Date($('#datepicker').datepicker('getDate'));
  return date.toJSON().slice(0, 10);
}

/**
 * Put date into readable format
 * @param {string} dateString
 */
function beautifyDate(dateString) {
  const date = new Date(dateString);
  const dateArray = date.toDateString().split(' ');
  return `${dateArray[2]} ${dateArray[1]} ${dateArray[3]}`;
}
function loadRecord(record) {
  $('#records').append(`<tr>
                <td class="${record.amount > 0 ? 'green' : 'red'}">${record.amount}</td>
                <td>${record.name}</td>
                <td>${beautifyDate(record.start_date)}</td>
                <td>${record.description.substring(0, 20)}</td>
                </tr>`);
}

$(document).ready(() => {
  $('#datepicker').datepicker();
  $.post('/api/finance/records/getAll', (response) => {
    const payments = response[0];
    for (let i = 0; i < response.length; i += 1) {
      loadRecord(payments[i]);
    }
  });
  $('#record').submit((e) => {
    e.preventDefault();
    // Determine if amount is positive or negative
    const sign = $('#sign').val() === 'in' ? 1 : -1;

    // Store data from form
    const record = {
      amount: sign * $('#amount').val(),
      name: $('#name').val(),
      description: $('#description').val(),
      recurrence: $('#occurrence').val(),
      currency: 'GBP',
      start_date: getDate(),
    };

    // Submit to server
    $.post('/api/finance/records/add', record, (response) => {
      if (response.success) {
        console.warn('Response received');
      }
      console.log(response);
    });
  });
});
