// 뱃지
// _.throttle(함수, 시간)
// 시간마다 함수 실행되도록 지연설정
const badgeEL = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //뱃지 숨기기
    // badgeEL.style.display='none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEL,0.6,{
      opacity: 0,
      display: 'none'
    });
    gsap.to('#to-top', 0.2,{
      x: 0
    });
    } else{
    //뱃지 보이기
    // badgeEL.style.display='block';
    gsap.to(badgeEL,0.6,{
      opacity: 1,
      display: 'block'
    });
    gsap.to('#to-top', 0.2,{
      x: 100
    });
  }
},300));

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click',function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});


//visual 시간차
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
      // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1) * 0.7,
    opacity : 1
  });
});


new Swiper('.notice-line .swiper', {
 direction : 'vertical' ,
 autoplay : true,
 loop: true
});


new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination :{
    el: '.promotion .swiper-pagination',
    clickable : true   
  },
  navigation :{
    prevEl :'.promotion .swiper-prev',
    nextEl :'.promotion .swiper-next'
  }
 });


 new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
 });
 
 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
 let isHidePromotion = false;

 promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: .8 // 감시할 요소가 위에서 80%정도 올라오면 setClassToggle 동작
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

