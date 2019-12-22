'use strict';

window.onload = function () {
    var breakPoint = 768; //ハンバーガーメニューとヘッダーメニューの表示を切り替えるディスプレイ幅
    var hamburgerButton = document.getElementById('js-hamburger-button');
    var crossButton = document.getElementById('js-cross-button');
    var hamburgerMenu = document.getElementById('js-hg-menu');
    var screenWidthHg = window.innerWidth;
    var hamburger = true;
    var hamburgerMenuList = document.querySelectorAll('#js-hg-menu a[href^="#"]'); // スムーススクロールと競合防ぐため細かく選択している

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


    // スクロール時のページトップへ移動ボタンのフェードイン
    /* ページトップへ移動ボタンを使用する場合はコメントアウト削除
    var scrollMvPx = 100; //設定した数値分のpxを移動するとページトップへ移動ボタンがフェードインする
    var minimalPageTop = document.getElementById('js-minimal-page-top');
    var pageTopOn = false;
    window.onscroll = function () {
        if (pageTopOn === false && window.pageYOffset > scrollMvPx) {
            minimalPageTop.classList.add('is-mn-active');
            pageTopOn = true;
        } else if (pageTopOn === true && window.pageYOffset <= scrollMvPx) {
            minimalPageTop.classList.remove('is-mn-active');
            pageTopOn = false;
        }
    };
    */
}