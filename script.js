// Gérer la navigation entre les pages et les données de formulaire
document.getElementById('rental-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  sessionStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData)));
  window.location.href = 'recap.html';
});

document.getElementById('validate').addEventListener('click', function() {
  if (document.getElementById('cgu-cgv').checked) {
    window.location.href = 'payment.html';
  } else {
    alert('Vous devez accepter les CGU et CGV.');
  }
});
