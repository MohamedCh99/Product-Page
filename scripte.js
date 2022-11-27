const iconPanier = document.querySelector(".header .bloc-right img");
const blocPanier = document.querySelector(".container .bloc-cart");
const overFlow = document.querySelector(".overflow");
const pageOverflow = document.querySelector(".photo-clicked");
const btntest = document.querySelector(".container .bloc-cart");
iconPanier.addEventListener("click", (e) => {
  blocPanier.classList.add("hover");
});
document.addEventListener("click", function (event) {
  // const outsideClick = !btntest.contains(event.target);
  // console.log(btntest);
  console.log(event.target);
  if (event.target != btntest && event.target === iconPanier) {
    blocPanier.classList.remove("hover");
  }
});

const sousImages = document.querySelectorAll(
  ".landing-page .bloc-left .sous-image .si"
);
sousImages.forEach((sousimage) => {
  sousimage.addEventListener("click", () => {
    overFlow.classList.add("display");
    pageOverflow.classList.add("display");
    const closeicon = document.querySelector(".photo-clicked i");
    closeicon.addEventListener("click", () => {
      overFlow.classList.remove("display");
      pageOverflow.classList.remove("display");
    });
    overFlow.addEventListener("click", () => {
      overFlow.classList.remove("display");
      pageOverflow.classList.remove("display");
    });
    // sousimage.classList.remove("border");
    // if (sousimage.dataset.click === "notyet") {
    //   sousimage.classList.add("border");
    //   let vrt = (sousimage.dataset.click = "clicked");
    // } else if (sousimage.dataset.click === "clicked") {
    //   sousimage.classList.remove("border");
    //   sousimage.dataset.click = "notyet";
    // }
  });
});

// Section Amout
const amout = document.querySelector(
  ".landing-page .bloc-bot .amout-total .amout"
);
const amoutPlus = document.querySelector(
  ".landing-page .bloc-bot .amout-total .plus"
);
const amoutMinus = document.querySelector(
  ".landing-page .bloc-bot .amout-total .minus"
);

//btn delete
const btnDelete = document.querySelector(".bloc-cart .bloc-filled .delete");
const blocFilled = document.querySelector(".bloc-cart .bloc-filled");
const blocVide = document.querySelector(".bloc-cart .bloc-vide p");
const btnAdd = document.querySelector(".landing-page .bloc-bot button");
const numberAmout = document.querySelector(".header .number-amout");

btnDelete.addEventListener("click", () => {
  blocFilled.style.opacity = "0";
  blocVide.classList.add("display");
  numberAmout.classList.remove("hover");
});

function addMore() {
  // console.log();
  amout.innerHTML = `${Math.floor(amout.innerHTML) + 1}`;
}
function MinusMore() {
  if (amout.innerHTML > 0) {
    amout.innerHTML = `${Math.floor(amout.innerHTML) - 1}`;
  }
}
amoutPlus.addEventListener("click", addMore);
amoutMinus.addEventListener("click", MinusMore);

// Section Add to cart

function addtocart() {
  let amoutNow = amout.innerHTML;
  if (amout.innerHTML > 0) {
    numberAmout.classList.add("hover");
    numberAmout.innerHTML = `${amoutNow}`;
    let nAmout = document.querySelector(
      ".bloc-cart .bloc-filled .text .n-amout"
    );

    nAmout.innerHTML = `${amoutNow}`;
    let priceTotal = document.querySelector(
      ".bloc-cart .bloc-filled .text .total-price"
    );
    priceTotal.innerHTML = `$${amoutNow * 125}.00`;
    blocFilled.style.opacity = "1";
    blocVide.classList.remove("display");
  }
}
btnAdd.addEventListener("click", addtocart);
