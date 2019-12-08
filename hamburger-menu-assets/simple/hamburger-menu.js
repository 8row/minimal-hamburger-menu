'use strict';

window.onload = function () {
    const hamburgerButton = document.getElementById('js-hamburger-button');
    const crossButton = document.getElementById('js-cross-button');
    const hamburgerMenu = document.getElementById('js-hg-menu');

    // スムーススクロールと競合防ぐため細かく選択している
    const hamburgerMenuList = document.querySelectorAll('#js-hg-menu a[href^="#"]');

    // ハンバーガーメニューをクリックしてメニューを表示する
    hamburgerButton.addEventListener('click', function () {
        hamburgerButton.classList.remove('is-hg-active');
        hamburgerButton.style.zIndex = 100;
        crossButton.classList.add('is-hg-active');
        crossButton.style.zIndex = 200;
        hamburgerMenu.classList.add('is-hg-active');
        hamburgerMenu.style.zIndex = 100;
    });

    // クロスボタン、メニューをクリックしてメニューを非表示
    // ハンバーガーメニューを表示する
    function hamburgerMenuOff() {
        hamburgerButton.classList.add('is-hg-active');
        hamburgerButton.style.zIndex = 200;
        crossButton.classList.remove('is-hg-active');
        crossButton.style.zIndex = 100;
        hamburgerMenu.classList.remove('is-hg-active');
        hamburgerMenu.style.zIndex = -1;
    }

    // クロスボタンをクリック
    crossButton.addEventListener('click', function () {
        hamburgerMenuOff();
    });

    // メニュー枠外をクリック
    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenuOff();
    });

    // メニューをクリック
    hamburgerMenuList.forEach(function (item, index) {
        item.onclick = function () {
            hamburgerMenuOff();
        }
    });
}