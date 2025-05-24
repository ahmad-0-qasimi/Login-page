document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const loginBtn = document.querySelector('.login-btn');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Animate button
      loginBtn.innerText = "Logging in...";
      loginBtn.style.transform = "scale(0.95)";
      loginBtn.style.background = "linear-gradient(135deg, #43e97b, #38f9d7)";
      
      setTimeout(() => {
        loginBtn.innerText = "Success!";
        loginBtn.style.background = "linear-gradient(135deg, #56ab2f, #a8e063)";
        loginBtn.style.boxShadow = "0px 15px 30px rgba(0, 255, 100, 0.3)";
        form.reset();
  
        // Reset after delay
        setTimeout(() => {
          loginBtn.innerText = "Login";
          loginBtn.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
          loginBtn.style.transform = "scale(1)";
          loginBtn.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.15)";
        }, 2000);
      }, 1500);
    });
  });