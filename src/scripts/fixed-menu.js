const MAX_MOBILE_WINDOW_WIDTH = 480;
const MIN_MOBILE_WINDOW_WIDTH = 320;
const MAX_SCROLL_WITH_TOP = 0;

function isScrollMore() {
  const currentScrollWithTop = document.documentElement.scrollTop;

  if (currentScrollWithTop > MAX_SCROLL_WITH_TOP) {
    return true;
  }
}

function isMobileWindowSize() {
  const currentWindowWidth = document.documentElement.clientWidth;

  if (
    currentWindowWidth >= MIN_MOBILE_WINDOW_WIDTH &&
    currentWindowWidth <= MAX_MOBILE_WINDOW_WIDTH
  ) {
    return true;
  }
}

function fixedMainMenuPage() {
  const pageMenu = document.getElementsByTagName('nav')[0];
  const mobileLogo = document.getElementsByClassName('navigation-logo-for-mobile')[0];

  if (isMobileWindowSize() && isScrollMore()) {
    if (window.pageYOffset > pageMenu.offsetTop) {
      pageMenu.classList.add('sticky');
      mobileLogo.style.visibility = 'visible';
    }
  } else {
    pageMenu.classList.remove('sticky');
      mobileLogo.style.visibility = 'hidden'
  }
}

export { fixedMainMenuPage };
