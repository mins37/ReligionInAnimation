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

        // 이미지 컨테이너 속 이미지들을 무작위로 배치하는 함수
        function shuffleImages() {
            const imageContainer = document.querySelector('.image-container');
            const images = Array.from(document.querySelectorAll('.main_img'));

            images.forEach(image => {
                const left = Math.random() * (imageContainer.clientWidth - image.width);
                const top = Math.random() * (imageContainer.clientHeight - image.height);
                
                image.style.left = `${left}px`;
                image.style.top = `${top}px`;
            });
        }

        // 페이지 로드 시 이미지 배치 실행
        window.onload = shuffleImages;

let hambergBtn = document.querySelector('.hambergBtn');
let menuItems = document.querySelector('#menu');
let link = document.querySelector('.link');

hambergBtn.addEventListener('click', clickFn);

function clickFn() {
    menuItems.classList.toggle('active');
    link.classList.toggle('active');
}