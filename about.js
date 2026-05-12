document.addEventListener('DOMContentLoaded', function() {
  
  const registrationForm = document.getElementById('registrationForm');
  
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(registrationForm);
      const data = Object.fromEntries(formData);
      
      console.log('Registration Data:', data);
      
      alert('Registration Successful!\n\nWelcome to Liverpool FC family!\nYou will be redirected to homepage...');
      
      window.location.href = 'index.html';
    });
    
    const formInputs = registrationForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
    });
  }
  
  const membershipOptions = document.querySelectorAll('.membership-option input[type="radio"]');
  membershipOptions.forEach(option => {
    option.addEventListener('change', function() {
      membershipOptions.forEach(opt => {
        opt.parentElement.classList.remove('selected');
      });
      if (this.checked) {
        this.parentElement.classList.add('selected');
      }
    });
  });
  
  console.log('🔴 Liverpool FC Registration Page Loaded');
  console.log('⚽ You\'ll Never Walk Alone');
  
});