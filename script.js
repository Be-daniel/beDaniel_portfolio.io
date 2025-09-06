//======================== section progress bar=====================
document.querySelectorAll('.progress').forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.width = value + '%';
 });
function typeWriter(el, delay = 100) {
  const text = el.dataset.text || el.textContent;
  el.dataset.text = text; 
  el.textContent = ""; 
  let i = 0;

  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}


const ids = ["typewriter1","typewriter2", "typewriter3", "typewriter4", "typewriter5","typewriter6"];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => typeWriter(entry.target, 100), 200); 
    }
  });
}, { threshold: 0.5 });

ids.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.dataset.text = el.textContent;
    observer.observe(el);
  }
});

//========================== effect reveal=========================
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  function inViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
  }

  function scrollReveal() {
    reveals.forEach(el => {
      if (inViewport(el)) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); 
      }
    });
  }

  scrollReveal(); 
  window.addEventListener('scroll', scrollReveal, { passive: true });
  window.addEventListener('resize', scrollReveal);
});

//===================== effect slide left========================
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-in-left');

  function inViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
  }

  function scrollSlide() {
    slides.forEach((el, index) => {
      if (inViewport(el)) {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 80); 
      } else {
        el.classList.remove('visible');
      }
    });
  }

  scrollSlide(); 
  window.addEventListener('scroll', scrollSlide, { passive: true });
  window.addEventListener('resize', scrollSlide);
});


// ========================validation du formulaire===========================

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Récupérer les champs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Champs erreur
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  let valid = true;

  // Validation nom
  if (name === '') {
    nameError.textContent = 'Le nom est requis.';
    valid = false;
  }  else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = 'Le nom ne doit contenir que des lettres.';
    valid = false;
  }

  // Validation email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'L’email est requis.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Email invalide.';
    valid = false;
  }

  // Validation message
  if (message === '') {
    messageError.textContent = 'Le message est requis.';
    valid = false;
  }  else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = 'Le message ne doit contenir que des lettres.';
    valid = false;
  }
  // Si tout est valide
  if (valid) {
    formSuccess.textContent = 'Formulaire envoyé avec succès !';
    this.reset(); 
  }

});
