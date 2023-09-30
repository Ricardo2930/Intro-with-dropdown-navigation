/*----CONST OF DROPDOWN FEATURES-----*/
const featuresNav = document.querySelector(".menu-nav-ul-link");
const arrowUp = document.querySelector(".arrow-down");
const featuresNavItems = document.querySelector(
  ".menu-nav-ul-li-item-features"
);
const container = document.querySelector(".container");

/*----EVENT OF DROPDOWN FEATURES OPEN IN SITE-----*/
featuresNav.addEventListener("click", (e) => {
  e.preventDefault();
  arrowUp.classList.toggle("arrow-down-rotate");
  featuresNavItems.classList.toggle("menu-nav-ul-li-item-features-bg");
});

/*----CONST OF DROPDOWN COMPANY-----*/
const companyNav = document.querySelector(".menu-nav-ul-link-company");
const arrowUpCompany = document.querySelector(".arrow-down-company");
const companyNavItems = document.querySelector(".menu-nav-ul-li-item-company");

/*----EVENT OF DROPDOWN COMPANY OPEN IN SITE-----*/
companyNav.addEventListener("click", (e) => {
  e.preventDefault();
  arrowUpCompany.classList.toggle("arrow-down-rotate");
  companyNavItems.classList.toggle("menu-nav-ul-li-item-company-bg");
});

const buttonOpen = document.querySelector(".container-nav-btn-open");
const buttonClose = document.querySelector(".container-nav-ul-close");
const menuMobile = document.querySelector(".container-nav-ul");

/*----EVENT OPEN MENU IN SITE-----*/
buttonOpen.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.add("container-nav-ul-visible");
});

/*----EVENT CLOSE MENU IN SITE-----*/
buttonClose.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.remove("container-nav-ul-visible");
  featuresNavItems.classList.remove("menu-nav-ul-li-item-features-bg");
  companyNavItems.classList.remove("menu-nav-ul-li-item-company-bg");
  arrowUp.classList.remove("arrow-down-rotate");
  arrowUpCompany.classList.remove("arrow-down-rotate");
});
