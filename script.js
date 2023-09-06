 document.querySelector('.submit-button').addEventListener('click', () => {
  document.querySelector('.thank-you-container').classList.remove('hide');
  document.querySelector('.rating-card').style.display = 'none';
  document.querySelector('.thank-you-container p').innerHTML = "You selected " + document.querySelector('input[name=radioRating]:checked').value + " out of 5";
});
