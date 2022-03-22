$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

//pisanie na maszynie

const spanText = document.querySelector("span.description");
const spanCursor = document.querySelector(".cursor");
const txt =
  "Obecnie ukończyłem studia inżynierskie na kierunku informatyka i rozpoczynam studia magisterskie również na tym kierunku. Chciałbym rozwijać się w stronę front-end. Potrafię w dobrym stopniu posługiwać się HTML, CSS, Photoshop i zastosować RWD w projekcie. Jeśli chodzi o JavaScript ciągle staram się dokształcać przez kursy. W podstawowym stopniu potrafię GIT, MySql, Bootstrap, PHP, Python, Java i Wordpress. Dodatkowo jakiś czas temu rozpocząłem naukę frameworku React";

//Parametry
let indexText = 0;
const time = 40;

//Implementacja
const addLetter = () => {
  spanText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
  spanCursor.classList.toggle("active");
};

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
