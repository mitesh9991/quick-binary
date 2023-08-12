


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




if(getCurrentTheme() == "dark"){
  document.getElementById("home_img").src="assets/img/dark-home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/dark-time.png"
  document.getElementById("feature_img_2").src="assets/img/dark-customization.png"
  document.getElementById("feature_img_3").src="assets/img/dark-wallet.png"
}else{
document.getElementById("home_img").src="assets/img/home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/blue-time.png"
  document.getElementById("feature_img_2").src="assets/img/blue-customization.png"
  document.getElementById("feature_img_3").src="assets/img/blue-wallet.png"
}


themeButton.addEventListener("click", () => {

  if(getCurrentTheme() == "dark"){
    document.getElementById("home_img").src="assets/img/home-img-reverse.png"
  document.getElementById("feature_img_1").src="assets/img/blue-time.png"
  document.getElementById("feature_img_2").src="assets/img/blue-customization.png"
  document.getElementById("feature_img_3").src="assets/img/blue-wallet.png"


  }else{
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
/*=============== EMAIL JS ===============*/
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

