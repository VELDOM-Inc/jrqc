var isSP = function() {
	return $('.sp_view:visible').length != 0;
};

// accordion
$(function() {
	$('.accordion').click(function() {
		$(this).next().slideToggle();
		$(this).toggleClass('_active_');
	});
	if (isSP()) {
		$('.accordion-sp').click(function() {
			$(this).next().slideToggle();
			$(this).toggleClass('_active_');
		});
	}
});


/* スクロール後hraderにclass付与 */
$(function() {
  var $win = $(window),
      $header = $('.header'),
      animationClass = 'is-animation';
	
		$win.on('load scroll', function() {
			var value = $(this).scrollTop();
			if ( value > 100 ) {
				$header.addClass(animationClass);
			} else {
				$header.removeClass(animationClass);
			}
		});
});


// gnavi
$(function () {
  $('.header-menu').click(function () {
    $(this).toggleClass('_active_');
    $('body').toggleClass('_gnav-show_');
  });

  $('.gnav__item a[href*="#"],.gnav-btn a[href*="#"]').on('click', function () {
    $(".header-menu").removeClass('_active_');
    $("body").removeClass('_gnav-show_');
  });
});

/* アンカーリンク */
const header = $('.header').outerHeight();
$('a[href^="#"]').not('a[href^="#"]').on('click', function() {
		const speed = 500,
				href = $(this).attr("href"),
				target = $(href == "#" || href == "" ? "html" : href),
				position = target.offset().top;
	$("html, body").animate({ scrollTop: position }, speed, "swing");
	return false;
});
$(window).on('load', function() {
	let urlHash = location.hash;
	if (urlHash) {
		let position = $(urlHash).offset().top;
		$('html, body').animate({ scrollTop: position }, 0);
	}
});

// gnavi アクティブ
document.querySelectorAll('.gnav__link').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active')
  }
})

// Tel link
const ua = navigator.userAgent.toLowerCase(),
  isMobile = /iphone/u.test(ua) || /android(?<test>.+)?mobile/u.test(ua);

if (!isMobile) {
  $('a[href^="tel:"]').on("click", function (e) {
    e.preventDefault();
  });
}

// animation
$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".fade-up").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("is-active");
            }
        });
    });
});

// pagetop
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

		var scroll = $(window).scrollTop(); //スクロール値を取得
		if (scroll >= 200){//200pxスクロールしたら
			$('.pagetop').removeClass('DownMove');		// DownMoveというクラス名を除去して
			$('.pagetop').addClass('UpMove');			// UpMoveというクラス名を追加して出現
		}else{//それ以外は
			if($('.pagetop').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
				$('.pagetop').removeClass('UpMove');	//  UpMoveというクラス名を除去し
				$('.pagetop').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
			}
		}
		
		var wH = window.innerHeight; //画面の高さを取得
		var footerPos =  $('.footer').offset().top; //footerの位置を取得
		if(scroll+wH >= (footerPos+105)) {
			var pos = (scroll+wH) - footerPos+105 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
			$('.pagetop').css('bottom',pos);	//.pagetopに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
		}else{//それ以外は
			if($('.pagetop').hasClass('UpMove')){//UpMoveというクラス名がついていたら
				$('.pagetop').css('bottom','105px');// 下から10pxの位置にページリンクを指定
			}
		}
	
	if (isSP()) { //SP ver
		if(scroll+wH >= (footerPos+15)) {
			var pos = (scroll+wH) - footerPos+15 
			$('.pagetop').css('bottom',pos);	
		}else{
			if($('.pagetop').hasClass('UpMove')){
				$('.pagetop').css('bottom','15px');
			}
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// .pagetopをクリックした際の設定
$('.pagetop').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


// ヘッダー内メニュー
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 834) {//横幅が834px以下の場合
		$(".has-child>.gnav__link").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>.gnav__link").on('click', function() {//has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
			$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('div').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false;//リンクの無効化
		});
	}else{//横幅が834px以上の場合
		$(".has-child>.gnav__link").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child").removeClass('active');//activeクラスを削除
		$('.has-child').children('div').css("display","");//スライドトグルで動作したdisplayも無効化にする
	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});