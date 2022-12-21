document.addEventListener("DOMContentLoaded", function () {
  /* 자바스크립트 들어가는 부분 */
});

//제이쿼리
/* 문서의 요소(태그)가 다 준비되면 실행해 $(function(){})*/
/* $(값) <- 제이쿼리 객체 ======>제이쿼리 함수를 실행할수 있음 */
$(function () {
  //$("css선택자 nth-child 도 사용가능")
  $(".full_menu,.nav li").mouseover(function () {
    //console.log('안녕');
    $(".full_menu").stop().slideDown(600);
  });
  $(".full_menu,.nav li").mouseleave(function () {
    $(".full_menu").stop().slideUp(600);
    //.stop() =>하던일을 멈추고 그 다음일 함
  });

  $(".full_cover>ul>li").mouseover(function(){
    //this(마우스 올린 li) // index() =>번호를 읽어옴
    //원뎁스 li 중 마우스 올라간 요소의 번호를 i에 할당
    var i=$(this).index();
    /* $(".nav li").eq(i) => eq(n) n번째 요소 취득 */
    /* 투뎁스 i번째에 마우스 오버시 원뎁스 i번째 find() 하위탐색 */
    $(".nav li").eq(i).find(".line").css("width","100%");
  });

  $(".full_cover>ul>li").mouseleave(function(){
    var i=$(this).index();
    $(".nav li").eq(i).find(".line").css("width","0%");
  });

  $(".nav li").mouseover(function(){
    $(this).find(".line").css("width","100%");
  })
  $(".nav li").mouseover(function(){
    $(this).find(".line").css("width","0%");
  })

}); //jQuery
