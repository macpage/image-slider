const ul = document.querySelector('ul');
ul.addEventListener('click', () => {
  document.querySelectorAll('li').forEach((e) => {
    if (e.style.visibility != 'visible') {
      e.style.visibility = 'visible';
    } else {
      e.style.visibility = 'hidden';
    }
  });
});
