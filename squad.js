document.addEventListener('DOMContentLoaded', function() {
  
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.player-node').forEach(player => {
    player.addEventListener('click', function() {
      const playerName = this.querySelector('.player-name').textContent;
      const playerRating = this.querySelector('.player-rating').textContent;
      alert(`Player: ${playerName}\nRating: ${playerRating}`);
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.player-node, .sub-player').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px) scale(0.9)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });

});