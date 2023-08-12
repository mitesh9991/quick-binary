var card__price = document.getElementsByClassName("card__price");

// Get price elements
const card__description = document.querySelectorAll(".card__description");

const price_cut = document.querySelectorAll(".price_cut");

const priceEls = document.querySelectorAll(".card__price");

const button1 = document.getElementById("btnradio1");

const button2 = document.getElementById("btnradio2");

const button3 = document.getElementById("btnradio3");

const root = document.querySelector(":root");

// var buttons = document.querySelectorAll(".card__btn");

let activeRadioButtonId = "Monthly"; // Initialize with default value

const toggleGroup = document.querySelector(".toogle__buttons__group");
const radioButtons = toggleGroup.querySelectorAll(".toggle__checkbox");

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("click", function () {
    if (radioButton.checked) {
      activeRadioButtonId = radioButton.value; // Update the variable

      if (activeRadioButtonId === "Monthly") {
        console.log("Monthly plan selected");
      } else if (activeRadioButtonId === "Annually") {
        console.log("Annually plan selected");
      } else if (activeRadioButtonId === "One Time") {
        console.log("One Time plan selected");
      } else {
        console.log("Unknown plan selected");
      }
    }
  });
});

/* Instamojo start here */
function onOpenHandler() {
  alert("Payments Modal is Opened");
}

function onCloseHandler() {
  alert("Payments Modal is Closed");
}

function onPaymentSuccessHandler(response) {
  alert("Payment Success");
  console.log("Payment Success Response", response);
}

function onPaymentFailureHandler(response) {
  alert("Payment Failure");
  console.log("Payment Failure Response", response);
}
/* End client-defined Callback Handler Functions */

/* Configuring Handlers */
Instamojo.configure({
  handlers: {
    onOpen: onOpenHandler,
    onClose: onCloseHandler,
    onSuccess: onPaymentSuccessHandler,
    onFailure: onPaymentFailureHandler,
  },
});

function onButtonClick() {
  Instamojo.open("http://www.instamojo.com/@sampad");
}

/* Instamojo end here */

/* country code start */

let urlCountry = "https://api.country.is";
let myVariable; // Declare the variable outside the fetch function
function fetchData() {
  return fetch(urlCountry)
    .then((response) => response.json())
    .then((data) => {
      // Assign the retrieved data to the variable
      myVariable = data;

      console.log(myVariable.country);
    });
}
/* country code end */

async function myAsyncFunction() {
  await fetchData(); // Wait for the fetch operation to complete

  if (myVariable.country == "IN") {
    // payment for basic
    const button_basic = document.getElementsByClassName("card__btn__basic");

    button_basic[0].addEventListener("click", payBasic);

    function payBasic() {
      if (activeRadioButtonId == "Monthly") {
        Instamojo.open("https://quickbinary.mojo.page/basic-package");
      } else if (activeRadioButtonId == "Annually") {
        Instamojo.open("https://quickbinary.mojo.page/basic-package-yearly");
      } else if (activeRadioButtonId == "One Time") {
        Instamojo.open("https://quickbinary.mojo.page/basic-package-onetime");
      }
    }

    // payment for standard
    const button_standard = document.getElementsByClassName(
      "card__btn__standard"
    );

    button_standard[0].addEventListener("click", payStandard);

    function payStandard() {
      if (activeRadioButtonId == "Monthly") {
        Instamojo.open("https://quickbinary.mojo.page/standard-package-basic");
        
      } else if (activeRadioButtonId == "Annually") {
        Instamojo.open("https://quickbinary.mojo.page/standard-package-yearly");
      } else if (activeRadioButtonId == "One Time") {
        Instamojo.open("https://quickbinary.mojo.page/standard-package-onetime");

      }
    }

    // payment for ecommerece
    const button_bussiness = document.getElementsByClassName(
      "card__btn__bussiness"
    );

    button_bussiness[0].addEventListener("click", paybussiness);

    function paybussiness() {
      if (activeRadioButtonId == "Monthly") {
      
        Instamojo.open("https://quickbinary.mojo.page/e-commerce-business");
      } else if (activeRadioButtonId == "Annually") {
       
        Instamojo.open("https://quickbinary.mojo.page/e-commerce-business-yearly");
      } else if (activeRadioButtonId == "One Time") {
        Instamojo.open("https://quickbinary.mojo.page/e-commerce-business-onetime");
      }
    }

 
  } else {
    /* if $ is true than send form */

    const dialogBodyList = document.querySelectorAll(
      "dialog.dialog .dialog-body"
    );
    const modalList = document.querySelectorAll("dialog.dialog");
    modalList.forEach((item) => {
      item.addEventListener("click", () => {
        setCloseModal(item);
      });
    });
    dialogBodyList.forEach((item) => {
      item.addEventListener("click", () => {
        event.stopPropagation();
      });
    });

    const demoModal = document.querySelectorAll("#demo-modal");
    const btnModalShow = document.querySelectorAll("#btn-show");

    const btnModalCloseList = document.querySelectorAll(".btn-close");
    const showModalCustom = (incModal) => {
      incModal.showModal();
      incModal.classList.add("active");
    };
    const setCloseModal = (incModal) => {
      incModal.addEventListener("transitionend", closeModal);
      incModal.classList.remove("active");
    };
    const closeModal = () => {
      event.target.removeEventListener("transitionend", closeModal);
      event.target.close();
    };

    /*
const modalSubmit = document.getElementById("btn1");

modalSubmit.addEventListener("click", submitModal);

function submitModal() {}

*/

    // Toggle group button

    const forms = document.querySelectorAll(".myForm");

    forms.forEach(function (form) {
      const submitButton = form.querySelector(".submitButton");
      submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Replace 'YOUR_BOT_TOKEN' with your actual bot token
        const botToken = "6591968385:AAGXhMwXUtYEfFI86rK5LadlduGotAnvxp8";

        const nameInput = form.querySelector(".nameInput");
        const emailInput = form.querySelector(".emailInput");
        const phoneInput = form.querySelector(".phoneInput");
        const dropdownInput = form.querySelector(".form-select");

        const date = new Date();

        // Replace 'YOUR_CHAT_ID' with the chat ID where you want to receive the messages
        const chatId = "-1001935151652";
        const text = `Quick-Binary Pricing :  \nName: ${nameInput.value}\nEmail: ${emailInput.value} \nPhone: ${phoneInput.value}\nSubscription: ${activeRadioButtonId}\nPlan: ${dropdownInput.value} \nDate: ${date}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const data = new URLSearchParams({
          chat_id: chatId,
          text: text,
        });

        if (console.log("emty")) {
          alert("please Provide inputs");
        } else {
          fetch(url, {
            method: "POST",
            body: data,
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.ok) {
                // alert('Thank you for your message! We will get back to you soon.');

                alert(
                  "Thank you for your submission! We have received your information and will get in touch with you as soon as possible."
                );
              } else {
                alert("Something went wrong. Please try again later.");
              }
            })
            .catch((error) => {
              console.error("Error sending message:", error);
              alert("Something went wrong. Please try again later.");
            });

          (nameInput.value = ""),
            (emailInput.value = ""),
            (phoneInput.value = "");
        }

        // Send the message to the Telegram bot using the Telegram API
      });
    });

    btnModalShow.forEach((btnModal) => {
      btnModal.addEventListener("click", function () {
        const dataTarrgetID = btnModal.getAttribute("data-target");
        const targetModal = document.getElementById(dataTarrgetID);
        showModalCustom(targetModal);
      });
    });

    btnModalCloseList.forEach((item) => {
      item.addEventListener("click", () => {
        setCloseModal(item.parentElement);
      });
    });
  }

  /* if ruppee is than send istamojo */

  if (myVariable.country == "IN") {
    handler3();
    button1.onclick = function () {
      // Handle button1 click here

      handler3();
      root.style.setProperty("--month", '"month"');
    };
    button2.onclick = function () {
      // Handle button1 click here

      handler4();
      root.style.setProperty("--month", '"year"');
    };
    button3.onclick = function () {
      // Handle button1 click here

      handler5();
      root.style.setProperty("--month", '"One Time"');
    };
  } else {
    /*for usa */
    button1.onclick = function () {
      // Handle button1 click here

      handler1();
      root.style.setProperty("--month", '"month"');
    };
    button2.onclick = function () {
      // Handle button1 click here

      handler2();
      root.style.setProperty("--month", '"year"');
    };
    button3.onclick = function () {
      // Handle button1 click here

      handler6();
      root.style.setProperty("--month", '"One Time"');
    };
  }

  function handler1() {
    priceEls[0].textContent = "$25";
    priceEls[1].textContent = "$35";
    priceEls[2].textContent = "$49";

    // small description change
    card__description[0].textContent = "With a purchase of 3 months";
    card__description[1].textContent = "With a purchase of 3 months";
    card__description[2].textContent = "With a purchase of 3 months";

    // Price cut change
    price_cut[0].textContent = "$100";
    price_cut[1].textContent = "$180";
    price_cut[2].textContent = "₹300";
  }

  function handler2() {
    priceEls[0].textContent = "$199";
    priceEls[1].textContent = "$299";
    priceEls[2].textContent = "$399";

    // small description change
    card__description[0].textContent = "With an annual purchase";
    card__description[1].textContent = "With an annual purchase";
    card__description[2].textContent = "With an annual purchase";

    // Price cut change
    price_cut[0].textContent = "$400";
    price_cut[1].textContent = "$600";
    price_cut[2].textContent = "$1000";
  }

  function handler6() {
    priceEls[0].textContent = "$249 ";
    priceEls[1].textContent = "$349 ";
    priceEls[2].textContent = "$499 ";

    // small description change
    card__description[0].textContent = "+ AMC $35";
    card__description[1].textContent = "+ AMC $49";
    card__description[2].textContent = "+ AMC $69";

    // Price cut change
    price_cut[0].textContent = "$800";
    price_cut[1].textContent = "$1000";
    price_cut[2].textContent = "$2500";
  }

  function handler3() {
    priceEls[0].textContent = "₹999";
    priceEls[1].textContent = "₹1499";
    priceEls[2].textContent = "₹1999 ";

    // small description change
    card__description[0].textContent = "With a purchase of 3 months";
    card__description[1].textContent = "With a purchase of 3 months";
    card__description[2].textContent = "With a purchase of 3 months";

    // Price cut change
    price_cut[0].textContent = "₹5000";
    price_cut[1].textContent = "₹8000";
    price_cut[2].textContent = "₹10,000";
  }

  function handler4() {
    priceEls[0].textContent = "₹10,000";
    priceEls[1].textContent = "₹14,999";
    priceEls[2].textContent = "₹20,000";

    // small description change
    card__description[0].textContent = "With an annual purchase";
    card__description[1].textContent = "With an annual purchase";
    card__description[2].textContent = "With an annual purchase";

    // Price cut change
    price_cut[0].textContent = "₹20,000";
    price_cut[1].textContent = "₹35,000";
    price_cut[2].textContent = "₹45,000";
  }
  function handler5() {
    priceEls[0].textContent = "₹12,000 ";
    priceEls[1].textContent = "₹18,000 ";
    priceEls[2].textContent = "₹24,000 ";

    // small description change
    card__description[0].textContent = "+ AMC ₹1,999";
    card__description[1].textContent = "+ AMC ₹2,999";
    card__description[2].textContent = "+ AMC ₹3,999";

    // Price cut change
    price_cut[0].textContent = "₹25,000";
    price_cut[1].textContent = "₹50,000";
    price_cut[2].textContent = "₹1,00,000";
  }

  buttons.forEach(function (button, key) {
    button.addEventListener("click", (event) => {
      console.log(event);
      var currency = "";
      if (card__price[key].innerHTML.includes("$")) {
        currency = "USD";
      } else {
        currency = "INR";
      }

      const regex = /[$,₹]/g;
      let result;
      const text = card__price[key].innerHTML;
      if (currency == "USD") {
        result = text.replace(regex, "") * 100;
      } else {
        result = text.replace(regex, "") * 100;
      }

      const newVal = Math.floor(result).toString();
      let options = {
        key: "rzp_test_axpZvudUbglLue", //Paste your API key here before clicking on the Pay Button.
        name: "Razorpay Testing",
        amount: newVal,
        currency: currency,
        description: "Test Description",
        image: "https://i.imgur.com/n5tjHFD.png",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          console.log(response.razorpay_payment_id);
        },
        prefill: {
          contact: "+91",
          email: " ",
          name: " ",
        },
        notes: {
          address: "hello world",
        },
      };

      var rzp1 = new Razorpay(options);

      rzp1.open();
      event.preventDefault();
    });
  });

  // Access the variable outside the fetch function
}

myAsyncFunction();

/*
document.getElementById("Multisite__btn").onclick = function (e) {
  rzp1.open();
  e.preventDefault();
};*/

/*
var card__price = document.getElementsByClassName("card__price");

var buttons = document.querySelectorAll(".card__btn");

// Get price elements
const priceEls = document.querySelectorAll(".card__price");

// Get the first toggle button group
const toggleGroup1 = document.querySelectorAll(".toggle__button")[0];
const radioButtons1 = toggleGroup1.querySelectorAll(".toggle__checkbox");

// Get the second toggle button group
const toggleGroup2 = document.querySelectorAll(".toggle__button")[1];
const radioButtons2 = toggleGroup2.querySelectorAll(".toggle__checkbox");

const root = document.querySelector(":root");

// Function to handle the click event
function handleToggle() {
  // Retrieve the selected value from the first toggle button group
  const selectedValue1 = toggleGroup1.querySelector(
    "input:checked + label"
  ).textContent;
  const selectedValue2 = toggleGroup2.querySelector(
    "input:checked + label"
  ).textContent;
  ChangeCartValue(selectedValue1, selectedValue2);
}

// Add a click event listener to the radio buttons in the first toggle button group
radioButtons1.forEach((button) =>
  button.addEventListener("click", handleToggle)
);

// Add a click event listener to the radio buttons in the second toggle button group
radioButtons2.forEach((button) =>
  button.addEventListener("click", handleToggle)
);

const ChangeCartValue = (selectedValue1, selectedValue2) => {
  if (selectedValue1 === "India") {
    if (selectedValue2 === "Monthly") {
      console.log("month india");
      root.style.setProperty("--month", '"month"');

      handler3();
    } else {
      root.style.setProperty("--month", '"year"');
      console.log("year india");
      handler4();
    }
  } else {
    if (selectedValue2 === "Monthly") {
      root.style.setProperty("--month", '"month"');
      handler1();
    } else {
      root.style.setProperty("--month", '"year"');
      handler2();
    }
  }
};

function handler1() {
  priceEls[0].textContent = "$3.99";
  priceEls[1].textContent = "$6.99";
  priceEls[2].textContent = "$9.99";
}

function handler2() {
  priceEls[0].textContent = "$5.99";
  priceEls[1].textContent = "$12.99";
  priceEls[2].textContent = "$19.99";
}

function handler3() {
  priceEls[0].textContent = "₹3,099";
  priceEls[1].textContent = "₹6,499";
  priceEls[2].textContent = "₹99,999";
}

function handler4() {
  priceEls[0].textContent = "₹5,999";
  priceEls[1].textContent = "₹12,999";
  priceEls[2].textContent = "₹19,999";
}

buttons.forEach(function (button, key) {
  button.addEventListener("click", (event) => {
    console.log(event);
    var currency = "";
    if (card__price[key].innerHTML.includes("$")) {
      currency = "USD";
    } else {
      currency = "INR";
    }

    const regex = /[$,₹]/g;
    let result;
    const text = card__price[key].innerHTML;
    if (currency == "USD") {
      result = text.replace(regex, "") * 100;
    } else {
      result = text.replace(regex, "") * 100;
    }

    const newVal = Math.floor(result).toString();
    let options = {
      key: "rzp_test_axpZvudUbglLue", //Paste your API key here before clicking on the Pay Button.
      name: "Razorpay Testing",
      amount: newVal,
      currency: currency,
      description: "Test Description",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        contact: "+919999999999",
        email: "test@test.com",
      },

      notes: {
        address: "hello world",
      },
    };

    var rzp1 = new Razorpay(options);

    rzp1.open();
    event.preventDefault();
  });
});
*/
/*
window.onload(handler3()) */

/*=============== DARK LIGHT THEME ===============*/
themeButton.addEventListener("click", () => {
  if (getCurrentTheme() == "dark") {
    (document.getElementById("nav__logo").src =
      "assets/img/logo/QB_logo_Main.png"),
      (document.getElementById("nav__logo_price").src =
        "assets/img/logo/QB_logo_Main.png");

    // For dark
  } else {
    document.getElementById("nav__logo").src =
      "./assets/img/logo/QB_logo_light.png";
    document.getElementById("nav__logo_price").src =
      "./assets/img/logo/QB_logo_light.png";
  }

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());

  localStorage.setItem("selected-icon", getCurrentIcon());
});
