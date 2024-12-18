$(document).ready(function () {
  // 새로고침 시 Home만 보이도록 설정 (기본값)
  $(".Home").show(); // Home을 보이게 함
  $(".MainPage").hide(); // MainPage는 숨기기

  // 새로고침 시 스크롤을 항상 상단으로 이동
  $("html, body").scrollTop(0); // 상단으로 이동

  window.onload = function () {
    window.scrollTo(0, 0); // 페이지가 로드되면 상단으로 스크롤
  };

  // 애니메이션 활성화
  setTimeout(() => {
    $(".Start").addClass("active");
  }, 2000); // 애니메이션이 2초 후 시작되도록 설정

  // Start 버튼 클릭 시 색상 변경
  $(".Start").on("click", function () {
    $(this).addClass("clicked");

    // 색상 변경 후 1초 뒤 원래 색으로 돌아가도록 설정
    setTimeout(() => {
      $(this).removeClass("clicked");
    }, 1000); // 1초 후 원래 상태로 복구

    // Home 숨기고 MainPage 보이기
    $(".Home").hide(); // Home을 즉시 숨기기
    $(".MainPage").show(); // MainPage를 즉시 나타내기

    // MainPage로 세로 스크롤 이동
    $("html, body").animate(
      {
        scrollTop: $(".MainPage").offset().top,
      },
      500
    ); // 0.5초 동안 이동
  });

  // Title 클릭 시 Home으로 돌아가기
  $(".Title").on("click", function () {
    // MainPage를 숨기고 Home을 보이게 설정
    $(".MainPage").hide(); // MainPage를 즉시 숨기기
    $(".Home").show(); // Home을 즉시 나타내기

    // Home으로 세로 스크롤 이동
    $("html, body").animate(
      {
        scrollTop: $(".Home").offset().top,
      },
      500
    ); // 0.5초 동안 이동
  });

  // 페이지들
  const pages = $(
    ".MainPage, .MainPage2, .MainPage3, .MainPage4, .MainPage5, .MainPage6, .MainPage7, .MainPage8, .MainPage9"
  );
  let currentPage = 0;

  // 휠 이벤트에 따른 페이지 전환
  $(window).on("wheel", function (e) {
    // 스크롤 방향에 따른 페이지 변경
    if (e.originalEvent.deltaY > 0) {
      // 아래로 스크롤
      if (currentPage < pages.length - 1) {
        currentPage++;
      }
    } else {
      // 위로 스크롤
      if (currentPage > 0) {
        currentPage--;
      }
    }

    // 페이지 전환 애니메이션
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(pages[currentPage]).offset().top,
        },
        500
      ); // 0.5초 동안 이동
  });
});
