const target_rtl = '.splide-b';
const target_ltr = '.splide-a';
 
//共通オプション
const commonOptions = {
  type: 'loop',
  arrows: false,
  drag: 'free',
  flickPower: 5000,
  pagination: false,
  autoWidth: true,
  autoHeight: true,
  autoScroll: {
    speed: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
  breakpoints: {
    767: {
      autoScroll: {
      }
    }
  }
}

// スライド方向：右から左
const rtlOptions = {
  ...commonOptions,
  direction: 'rtl'
};
// スライド方向：左から右
const ltrOptions = {
  ...commonOptions,
  direction: 'ltr'
};
 
const rtlSplide = new Splide(target_rtl, rtlOptions);
rtlSplide.mount(window.splide.Extensions);
 
const ltrSplide = new Splide(target_ltr, ltrOptions);
ltrSplide.mount(window.splide.Extensions);