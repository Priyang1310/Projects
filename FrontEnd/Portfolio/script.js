//page-next and page-previous button

const pageTurnBtn = document.querySelectorAll(".arrow");

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

//contact-me button

const pages = document.querySelectorAll(".book-page.page-right");
const contactbtn = document.querySelector("#contactbtn");

contactbtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//backtoprofile button

const totalpages = pages.length;
let pagenumber = 0;

function reverseIndex() {
  pagenumber--;
  if (pagenumber < 0) {
    pagenumber = totalpages - 1;
  }
}

const backprofilebtn = document.querySelectorAll(".back-to-profile");

backprofilebtn.forEach((btn) => {
  btn.onclick = () => {
    pages.forEach((_, index) => {
      setTimeout(() => {
        reverseIndex();
        pages[pagenumber].classList.remove("turn");
        setTimeout(() => {
          reverseIndex();
          pages[pagenumber].style.zIndex = 10 + index;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  };
});

//opening animation

const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//opening animation (cover right animation)


//

setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pagenumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pagenumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
