document.addEventListener("DOMContentLoaded", function () {

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  menuBtn.innerHTML = menu.classList.contains('hidden')
    ? '<i class="fa-solid fa-bars"></i>'
    : '<i class="fa-solid fa-xmark"></i>';
});


const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

  
    const submission = {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };
    
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];

    submissions.push(submission);

    
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    
    alert('Message sent successfully!');

    contactForm.reset();
});


const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
const icon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-sun", "fa-moon");
    }
});

});
