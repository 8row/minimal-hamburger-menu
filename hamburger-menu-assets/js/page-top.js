'use strict';

// スクロール時のページトップへ移動ボタンのフェードイン
window.addEventListener('load', function(){
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
});