document.addEventListener("DOMContentLoaded", function () {

    // 메뉴 항목 클릭 이벤트 리스너 추가
    var introduce = document.getElementById('introduce');
    var christianity = document.getElementById('christianity');
    var catholic = document.getElementById('catholic');
    var buddhism = document.getElementById('buddhism');
    var other = document.getElementById('other');

    // 각 메뉴 항목에 클릭 이벤트 리스너 추가

    introduce.addEventListener('click', function () {
        location.href = 'index2.html'; //
    });

    christianity.addEventListener('click', function () {
        location.href = 'index3.html'; 
    });

    catholic.addEventListener('click', function () {
        location.href = 'index4.html'; 
    });

    buddhism.addEventListener('click', function () {
        location.href = 'index5.html';
    });

    other.addEventListener('click', function () {
        location.href = 'index6.html'; 
    });
     // 제목 스티커 클릭 이벤트 처리
     var myStickerMain = document.getElementById('myStickerMain');

     myStickerMain.addEventListener('click', function () {
         window.location.href = 'https://www.netflix.com/kr/title/81278456'; // 제목 스티커 클릭 시 이동할 사이트 주소
     });
});

document.addEventListener("DOMContentLoaded", function () {
    // 메인로고 클릭 이벤트 등록
    var mainLogo = document.getElementById("mainLogo");
    mainLogo.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // 메뉴 항목 클릭 이벤트 등록
    // ...
});

let hambergBtn = document.querySelector('.hambergBtn');
let menuItems = document.querySelector('#menu');
let link = document.querySelector('.link');

hambergBtn.addEventListener('click', clickFn);

function clickFn() {
    menuItems.classList.toggle('active');
    link.classList.toggle('active');
}

//맨위로 가는 버튼
var mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}