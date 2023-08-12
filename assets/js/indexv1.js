


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((e) => e.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUpButton.classList.add("show-scroll")
    : scrollUpButton.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");



const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
  
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/


const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");





const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

  


if (selectedTheme) {
  
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}


// Change theame according to System Theme







if(getCurrentTheme() == "dark"){
  document.getElementById("nav__logo").src="assets/img/logo/QB_logo_light.png"
  document.getElementById("nav__logo_price").src="assets/img/logo/QB_logo_light.png"

  document.getElementById("home_img").src="assets/img/dark-home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/dark-time.png"
  document.getElementById("feature_img_2").src="assets/img/dark-customization.png"
  document.getElementById("feature_img_3").src="assets/img/dark-wallet.png"
}else{
  document.getElementById("nav__logo").src="assets/img/logo/QB_logo_Main.png",
  document.getElementById("nav__logo_price").src="assets/img/logo/QB_logo_Main.png"

document.getElementById("home_img").src="assets/img/home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/blue-time.png"
  document.getElementById("feature_img_2").src="assets/img/blue-customization.png"
  document.getElementById("feature_img_3").src="assets/img/blue-wallet.png"
}


themeButton.addEventListener("click", () => {
console.log("hello")
  
  if(getCurrentTheme() == "dark"){
    document.getElementById("nav__logo").src="./assets/img/logo/QB_logo_Main.png"
    document.getElementById("nav__logo_price").src="./assets/img/logo/QB_logo_Main.png"


    document.getElementById("home_img").src="assets/img/home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/blue-time.png"
  document.getElementById("feature_img_2").src="assets/img/blue-customization.png"
  document.getElementById("feature_img_3").src="assets/img/blue-wallet.png"


  // For dark

  }else{
    document.getElementById("nav__logo").src="./assets/img/logo/QB_logo_light.png"
    document.getElementById("nav__logo_price").src="./assets/img/logo/QB_logo_light.png"


    document.getElementById("home_img").src="assets/img/dark-home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/dark-time.png"
  document.getElementById("feature_img_2").src="assets/img/dark-customization.png"
  document.getElementById("feature_img_3").src="assets/img/dark-wallet.png"
  }

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  localStorage.setItem("selected-theme", getCurrentTheme());
  
  localStorage.setItem("selected-icon", getCurrentIcon());
});



/*=============== SCROLL REVEAL ANIMATION ===============
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal(
  ".home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info"
);
sr.reveal(".home__data", { origin: "bottom" });
sr.reveal(".about__data, .recently__data", { origin: "left" });
sr.reveal(".about__img,.recently__img", { origin: "right" });
sr.reveal(".popular__card", { interval: 100 });
*/
/*=============== EMAIL JS ===============
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("name"),
  contactEmail = document.getElementById("email"),
  contactProject = document.getElementById("message"),
  ContactPhone = document.getElementById("phone");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "Write all the input fields 📩";
  } else {
    emailjs
      .sendForm(
        "service_ck13an6",
        "template_knlm9ps",
        "#contact-form",
        "IhvmX5VIXZUQ_WTwx"
      )
      .then(
        () => {
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message Sent ✅";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("something went wrong...", error);
        }
      );
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
    contactProject.value = "";
    ContactPhone.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

*/



function sendMessage(event) {
  
  event.preventDefault();

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  const botToken = '6591968385:AAGXhMwXUtYEfFI86rK5LadlduGotAnvxp8';

  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const date = new Date()


  const contactForm = document.getElementById("contact-form");
 
const contactMessage = document.getElementById("contact-message");



  // Replace 'YOUR_CHAT_ID' with the chat ID where you want to receive the messages
  const chatId = '-1001935151652';
  const text = `New message from Quick-Binary.com:  \nName: ${name.value}\nEmail: ${email.value} \nPhone: ${phone.value}\nMessage: ${message.value}\nDate: ${date}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const data = new URLSearchParams({
      chat_id: chatId,
      text: text
  });

 



  

  
  if (

    name.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "Write all the input fields 📩";
  } else {
    fetch(url, {
      method: 'POST',
      body: data
  })
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          // alert('Thank you for your message! We will get back to you soon.');
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message Sent ✅";
  
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
      } else {
          alert('Something went wrong. Please try again later.');
      }
   
  })
  .catch(error => {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
  });

    name.value = "";
    email.value = "";
    message.value = "";
    phone.value = "";

  }

  // Send the message to the Telegram bot using the Telegram API
 
}




/*

//form validation
function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");

  if (name.value === "") {
    alert("Please enter your name");
    name.focus();
    return false;
  }else if (email.value === "") {
    console.log("Please enter your email")
    alert("Please enter your email");
    email.focus();
    return false;
  }else if (phone.value === "") {
    alert("Please enter your phone number");
    phone.focus();
    return false;
  }else if (message.value === "") {
    alert("Please enter a message");
    message.focus();
    return false;
  }else if (isNaN(phone.value) || phone.value.length < 10) {
    alert("Please enter a valid phone number");
    phone.focus();
    return false;
  }

  // If all validation checks pass, you can proceed with submitting the form
  // Uncomment the next line to submit the form
  // document.querySelector('.contact__form').submit();
  showSuccessPopup();
  return true;
}

// succespoppup function

function showSuccessPopup() {
  var popup = document.createElement("div");
  popup.innerHTML = "Success!";
  popup.className = "success-popup";
  document.body.appendChild(popup);

  setTimeout(function() {
    popup.remove();
  }, 3000); // Remove the popup after 3 seconds
}

*/
