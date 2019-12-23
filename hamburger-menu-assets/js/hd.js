'use strict';

window.onload = function () {
    var breakPoint = 768; //ハンバーガーメニューとヘッダーメニューの表示を切り替えるディスプレイ幅
    var hamburgerButton = document.getElementById('js-hamburger-button');
    var crossButton = document.getElementById('js-cross-button');
    var hamburgerMenu = document.getElementById('js-hg-menu');
    var screenWidthHg = window.innerWidth;
    var hamburger = true;
    var hamburgerMenuList = document.querySelectorAll('#js-hg-menu a[href^="#"]'); // スムーススクロールと競合防ぐため細かく選択している

    // hdバージョン用にcss適用する
    hamburgerMenu.classList.add('only-hd');

    // ブラウザのウィンドウ幅で表示を変更
    function screenHg() {
        if (hamburger && screenWidthHg < breakPoint) {
            hamburgerButton.classList.add('is-hg-active');
            hamburgerButton.style.zIndex = 200;
            crossButton.classList.remove('is-hg-active');
            crossButton.style.zIndex = 100;
            hamburgerMenu.classList.remove('is-hg-active');
            hamburgerMenu.style.zIndex = -1;
            hamburger = false;
        } else if (!hamburger && screenWidthHg >= breakPoint) {
            hamburgerButton.classList.remove('is-hg-active');
            hamburgerButton.style.zIndex = -100;
            crossButton.classList.remove('is-hg-active');
            crossButton.style.zIndex = -100;
            hamburgerMenu.classList.add('is-hg-active');
            hamburgerMenu.style.zIndex = 100;
            hamburger = true;
        }
    }

    // ページを開いた時のウィンドウ幅で表示
    if (screenWidthHg > breakPoint) {
        hamburger = false;
    }
    screenHg();

    // ウィンドウ幅が変わるたびに表示を判定する
    window.onresize = function () {
        screenWidthHg = window.innerWidth;
        screenHg();
    }

    function hamburgerMenuOn() {
        hamburgerButton.classList.remove('is-hg-active');
        hamburgerButton.style.zIndex = 100;
        crossButton.classList.add('is-hg-active');
        crossButton.style.zIndex = 200;
        hamburgerMenu.classList.add('is-hg-active');
        hamburgerMenu.style.zIndex = 100;
    }

    // ハンバーガーメニューをクリック
    hamburgerButton.addEventListener('click', function () {
        hamburgerMenuOn();
    });

    // クロスボタン、メニューをクリックしてメニューを非表示
    // ハンバーガーボタンを表示する
    function hamburgerMenuOff() {
        if (screenWidthHg < breakPoint) {
            hamburgerButton.classList.add('is-hg-active');
            hamburgerButton.style.zIndex = 200;
            crossButton.classList.remove('is-hg-active');
            crossButton.style.zIndex = 100;
            hamburgerMenu.classList.remove('is-hg-active');
            hamburgerMenu.style.zIndex = -1;
        }
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