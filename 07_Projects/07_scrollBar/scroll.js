const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / totalHeight) * 100;

  progress.style.width = scrollPercent + '%';
});