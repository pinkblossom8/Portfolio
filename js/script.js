  // $("#fullpage").fullpage({
  //   menu: ".line"
  // });
  
  function Particles__init() {


  // 더 많은 옵션은 https://particles.js.org/ 참고

  tsParticles.load("tsparticles", {
    // 전체 화면 여부
    fullScreen: {
      enable: false,
      // zIndex: -1
    },

    // 배경 관련 옵션
    background: {
      // 색상
      // color: "#000",

      // 이미지
      // image: "url('../img/background-img.png')",
      // size: "cover",
      // position: "50% 50%",
      // repeat: "no-repeat"
    },

    // 배경 마스크 여부
    // backgroundMask: {
    //   enable: true,
    //   cover: {
    //     value: {
    //       r: 255,
    //       g: 255,
    //       b: 255
    //     }
    //   }
    // },

    // 인터렉션 관련 옵션
    interactivity: {
      events: {
        // 클릭 시
        onClick: {
          enable: true,
          mode: "push"
        },
        // 호버 시
        onHover: {
          enable: true,
          mode: "repulse"
        },
        // 효과 세부 설정
        // modes: {
        //   push: {
        //     quantity: 6
        //   },
        //   repulse: {
        //     distance: 100
        //   }
        // }
      }
    },

    // particles = 입자 관련 옵션
    // 아래 particle 옵션 중 원하는 한 가지만! 적용

    // 기본 애니메이션
    particles: {
      color: {
        value: ["#FDFFBC", "#fbed96", "#FFDCB8", "#F7FD04"],
      },
      shape: {
        type: ["circle", "star"] // heart, star도 가능
      },

      // 개수
      number: {
        value: 50,
        // 밀도
        density: {
          enable: true,
          value_area: 1000
        }
      },

      // 움직임 여부
      move: {
        enable: true,
        speed: {
          min: 1,
          max: 3
        }
      },

      // 투명도
      opacity: {
        value: {
          min: 0.1,
          max: 1
        }
      },

      // 사이즈
      size: {
        value: {
          min: 2,
          max: 3
        }
      },


    },


  });
}


function Chart__init() {
  let chart1AllowRerender = false;

// 건들지 마세요
let chart1Rendered = false;

$("#fullpage").fullpage({
  
    menu: ".line",
    
    afterLoad: function(ignored, destination){
      // 애니메이션이 재생되길 원하는 data anchor의 위치 입력
      if ( destination.anchor == 'section-2' ) {
        if ( chart1AllowRerender ) {
          // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
          $(".circle").circleProgress({value: 0.9});
          $(".circle-2").circleProgress({value: 0.7});
          $(".circle-3").circleProgress({value: 0.9});
          $(".circle-4").circleProgress({value: 0.7});
        }
        else {
          if ( chart1Rendered == false ) {
            // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
            $(".circle").circleProgress({value: 0.9});
            $(".circle-2").circleProgress({value: 0.7});
            $(".circle-3").circleProgress({value: 0.9});
            $(".circle-4").circleProgress({value: 0.7});
            chart1Rendered = true;
          }
        }
      }
      else {
        if ( chart1AllowRerender ) {
          // circle 차트 클래스명 확인
          $(".circle").circleProgress({value: 0});
          $(".circle-2").circleProgress({value: 0});
          $(".circle-3").circleProgress({value: 0});
          $(".circle-4").circleProgress({value: 0});
        }
      }
    },
  
});



// circle 커스텀 value를 0으로 설정해야 합니다!
$(".circle")
  .circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI / 2,
    // 방향 반전 여부
    reverse: true,
    // 그래프 수치
    value: 0,
    // 그래프 사이즈
    size: 150,
    // 그래프 모서리, 지울 시 각진 모양
    lineCap: "round",
    // 그래프 두께
    thickness: 20,
    // 그래프 색상
    fill: {
      gradient: ["#a8edea", "#f9d423"]
    }
  })

    // 그래프 수치 출력
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find(".percent")
        .text(parseInt(stepValue * 100) + "%");
    });

  $(".circle-2")
  .circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI / 2,
    // 방향 반전 여부
    reverse: true,
    // 그래프 수치
    value: 0,
    // 그래프 사이즈
    size: 150,
    // 그래프 모서리, 지울 시 각진 모양
    lineCap: "round",
    // 그래프 두께
    thickness: 20,
    // 그래프 색상
    fill: {
      gradient: ["#a8edea", "#f9d423"]
    }
  })

  // 그래프 수치 출력
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .find(".percent")
      .text(parseInt(stepValue * 100) + "%");
  });

  $(".circle-3")
  .circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI / 2,
    // 방향 반전 여부
    reverse: true,
    // 그래프 수치
    value: 0,
    // 그래프 사이즈
    size: 150,
    // 그래프 모서리, 지울 시 각진 모양
    lineCap: "round",
    // 그래프 두께
    thickness: 20,
    // 그래프 색상
    fill: {
      gradient: ["#a8edea", "#f9d423"]
    }
  })

  // 그래프 수치 출력
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .find(".percent")
      .text(parseInt(stepValue * 100) + "%");
  });


  $(".circle-4")
  .circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI / 2,
    // 방향 반전 여부
    reverse: true,
    // 그래프 수치
    value: 0,
    // 그래프 사이즈
    size: 150,
    // 그래프 모서리, 지울 시 각진 모양
    lineCap: "round",
    // 그래프 두께
    thickness: 20,
    // 그래프 색상
    fill: {
      gradient: ["#a8edea", "#f9d423"]
    }
  })

  // 그래프 수치 출력
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .find(".percent")
      .text(parseInt(stepValue * 100) + "%");
  });
}


function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    }
  });

  swiper.on("slideChange", function () {
    console.log(swiper.realIndex);
    $(".portfolio-link-list .link").removeClass("active");
    $(".portfolio-link-list .link").eq(swiper.realIndex).addClass("active");
  });
}

function SliderBox2__init() {
  const swiper = new Swiper(".slider-box-2 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-2 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-2 .swiper-button-next",
      prevEl: ".slider-box-2 .swiper-button-prev"
    }
  });
}

function SliderBox3__init() {
  const swiper = new Swiper(".slider-box-3 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-3 .swiper-pagination"
    },

    breakpoints: {

      // 화면의 넓이 >= 480px
      768: {
        slidesPerView: 1,
      },
      // 화면의 넓이 >= 640px
      769: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  });
}


function sendEmailForm(form) {
  if ( form.email.value.length == 0 ) {
    alert('이메일 주소를 입력해주세요.');
    form.email.focus();
    return;
  }
  
  if ( form.message.value.length == 0 ) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }
  
  form.submit();
  
  form.email.value = '';
  form.message.value = '';
  form.submit.innerHTML = '전송되었습니다.';
  form.submit.disabled = true;
}

$('#btnGoTop').click(function () {
  //$.fn.fullpage.setScrollingSpeed(0); 효과를 없애고싶을때
  $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
});


Particles__init();
Chart__init();
SliderBox1__init();
SliderBox2__init();
SliderBox3__init();

