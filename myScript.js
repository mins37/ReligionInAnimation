document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.main_img');
    let zIndexCounter = 1;

    images.forEach(function (image) {
        // 랜덤한 각도 생성 (-45도부터 45도 사이의 랜덤한 값)
        const randomAngle = Math.floor(Math.random() * 91) - 45;

        // 초기에 이미지에 랜덤한 각도 적용
        image.style.transform = `rotate(${randomAngle}deg)`;

        image.addEventListener('click', function () {
            this.classList.toggle('selected');

            images.forEach(function (otherImage) {
                if (otherImage !== image) {
                    // 다른 이미지에는 다시 랜덤한 각도 적용
                    const otherRandomAngle = Math.floor(Math.random() * 91) - 45;
                    otherImage.classList.remove('selected');
                    otherImage.style.transform = `scale(1) rotate(${otherRandomAngle}deg)`;
                    otherImage.style.zIndex = 0;
                }
            });

            if (this.classList.contains('selected')) {
                // 선택된 이미지에는 0도 각도로 복원하고 1.5배 커지게 함
                this.style.transform = `scale(1.5) rotate(0deg)`;
                this.style.zIndex = zIndexCounter++;
            } else {
                // 선택 해제된 이미지에는 다시 랜덤한 각도 적용
                const releaseRandomAngle = Math.floor(Math.random() * 91) - 45;
                this.style.transform = `scale(1) rotate(${releaseRandomAngle}deg)`;
                this.style.zIndex = 0;
            }
        });
    });

    // 나머지 코드...
});





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

document.addEventListener("DOMContentLoaded", function () {
    // 메인로고 클릭 이벤트 등록
    var mainLogo = document.getElementById("mainLogo");
    mainLogo.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // 메뉴 항목 클릭 이벤트 등록
    // …
});


let hambergBtn = document.querySelector('.hambergBtn');
let menuItems = document.querySelector('#menu');
let link = document.querySelector('.link');

hambergBtn.addEventListener('click', clickFn);

function clickFn() {
    menuItems.classList.toggle('active');
    link.classList.toggle('active');
}