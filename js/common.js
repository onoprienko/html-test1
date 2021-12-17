//slider
var swiper = new Swiper(".slider__2inrow", {
    slidesPerView: 1,
    spaceBetween: 62,
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        }
    },
});

var swiper = new Swiper(".slider__infinite", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 160,
    loop: true,
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        }
    },
});

var swiper = new Swiper(".slider__1inrow", {
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
    },
});
//slider end

//customselect
customSelect('.select',{
    containerClass: 'select-c',
    openerClass: 'select-c__opener',
    panelClass: 'select-c__panel',
    optionClass: 'select-c__option',
    optgroupClass: 'select-c__optgroup',
    isSelectedClass: 'select-c__option_selected',
    hasFocusClass: 'select-c__option_focus',
    isDisabledClass: 'select-c__option_disabled',
    isOpenClass: 'select-c_open'
});

const customSelectEl = document.getElementsByClassName('select');
for(let scrollEl of customSelectEl){
    const cstSel =  scrollEl.customSelect
    cstSel.container.addEventListener('custom-select:open',(e) => { 
        setCustomScroll()
    });
}
//customselect end

//custom scroll
const setCustomScroll = ()=>{
    const customScrollEl = document.getElementsByClassName('select-c__panel');
    for(let scrollEl of customScrollEl){
        new SimpleBar(scrollEl, { autoHide: false });
    }
}
//custom scroll emd