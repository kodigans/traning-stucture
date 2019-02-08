const MAX_MOBILE_WINDOW_WIDTH = 680;
const MIN_MOBILE_WINDOW_WIDTH = 320;
const MAX_SCROLL_WITH_TOP = 100;

function isScrollMore() {
  const currentScrollWithTop = document.documentElement.scrollTop;

  if (currentScrollWithTop > MAX_SCROLL_WITH_TOP) {
    return true;
  }
}

function  isMobileWindowSize() {
  const currentWindowWidth = document.documentElement.clientWidth;

  if ((currentWindowWidth >= MIN_MOBILE_WINDOW_WIDTH) && (currentWindowWidth <= MAX_MOBILE_WINDOW_WIDTH)) {
    return true;
  }
}

function  fixedMainMenuPage() {
    const pageMenu =  document.getElementsByTagName('nav')[0];

    if (isMobileWindowSize() && isScrollMore()) {
        pageMenu.style.top = '0';
        pageMenu.style.position = 'sticky';
    } else {
        pageMenu.style.position = 'relative';
    }
}


export  { fixedMainMenuPage }
