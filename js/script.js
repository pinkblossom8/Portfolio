$("#fullpage").fullpage({
  menu: ".line"
});

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
    image: "url('../img/background-img.png')",
    size: "cover",
    position: "50% 50%",
    repeat:"no-repeat"
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
      value: ["#FDFFBC", "#FFEEBB", "#FFDCB8", "#F7FD04"],
    },
    shape: {
      type: ["circle", "star"] // heart, star도 가능
    },

    // 개수
    number: {
      value: 40,
      // 밀도
      density: {
        enable: true,
        value_area: 1000
      }
    },
    
    // 움직임 여부
    move: {
      enable: true,
      speed: { min: 1, max: 3 }
    },
    
    // 투명도
    opacity: {
      value: { min: 0.1, max: 1 }
    },
    
    // 사이즈
    size: {
      value: { min: 2, max: 3 }
    },
    

  },

  
});
