(function () {
  "use strict";

  var tagId = "AW-18312820899";
  var conversionId = "AW-18312820899/d5ETCO_sgs4cEKPxnZxE";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", tagId);

  var tagScript = document.createElement("script");
  tagScript.async = true;
  tagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(tagId);
  document.head.appendChild(tagScript);

  function addConversionStyles() {
    if (document.getElementById("bridge-conversion-style")) {
      return;
    }

    var style = document.createElement("style");
    style.id = "bridge-conversion-style";
    style.textContent = [
      ".conversion-gate{margin:26px 0 20px;padding:24px;border:2px solid rgba(15,98,216,.2);border-radius:24px;background:linear-gradient(135deg,#fff,#f1f7ff);box-shadow:0 16px 36px rgba(6,24,46,.09)}",
      ".conversion-gate__head{margin-bottom:16px}",
      ".conversion-gate__head span{display:inline-flex;margin-bottom:7px;padding:5px 9px;border-radius:999px;background:#e8f1ff;color:#0f57b8;font-size:.72rem;font-weight:950;letter-spacing:.08em}",
      ".conversion-gate__head h3{margin:0 0 7px;color:#06182e;font-size:clamp(1.28rem,3vw,1.75rem)}",
      ".conversion-gate__head p{margin:0;color:#58697f;font-weight:700}",
      ".conversion-gate__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}",
      ".conversion-gate__item{padding:16px;border:1px solid #d8e4f0;border-radius:17px;background:#fff}",
      ".conversion-gate__item b{display:block;margin-bottom:5px;color:#06182e}",
      ".conversion-gate__item p{margin:0;color:#607087;font-size:.88rem;font-weight:700}",
      ".conversion-gate__warning{margin:14px 0 0;padding:12px 14px;border:1px solid #efd397;border-radius:14px;background:#fff8e9;color:#694b08;font-size:.84rem;font-weight:800}",
      ".conversion-gate__button{display:flex;align-items:center;justify-content:center;min-height:52px;margin-top:14px;padding:12px 16px;border-radius:15px;background:linear-gradient(135deg,#0f62d8,#08a8c7);color:#fff!important;text-decoration:none;font-weight:950;text-align:center}",
      ".quick-direct.is-qualified-only{border:2px solid rgba(19,138,85,.22);background:linear-gradient(135deg,#fff,#f2fff9)}",
      ".quick-direct.is-qualified-only:before{content:'対象条件を確認済みの方へ';display:block;margin:0 0 12px;color:#075f43;font-size:.82rem;font-weight:950}",
      "@media(max-width:720px){.conversion-gate{padding:17px;border-radius:20px}.conversion-gate__grid{grid-template-columns:1fr}}"
    ].join("");
    document.head.appendChild(style);
  }

  function setHeroButton(button, href, title, subtitle) {
    if (!button) {
      return;
    }
    button.setAttribute("href", href);
    var strong = button.querySelector("strong");
    var small = button.querySelector("small");
    if (strong) {
      strong.textContent = title;
    }
    if (small) {
      small.textContent = subtitle;
    }
  }

  function createGate(config) {
    var gate = document.createElement("div");
    gate.id = config.id;
    gate.className = "conversion-gate";

    var items = config.items.map(function (item) {
      return '<div class="conversion-gate__item"><b>' + item.title + '</b><p>' + item.text + '</p></div>';
    }).join("");

    gate.innerHTML =
      '<div class="conversion-gate__head"><span>' + config.label + '</span><h3>' + config.title + '</h3><p>' + config.description + '</p></div>' +
      '<div class="conversion-gate__grid">' + items + '</div>' +
      '<p class="conversion-gate__warning">' + config.warning + '</p>' +
      (config.buttonHref ? '<a class="conversion-gate__button" href="' + config.buttonHref + '">' + config.buttonText + '</a>' : '');

    return gate;
  }

  function enhanceTopPage() {
    var quickDirect = document.getElementById("quick-direct");
    if (!quickDirect || document.getElementById("ready-check")) {
      return;
    }

    var primary = document.querySelector(".hero-actions .hero-button-primary");
    var secondary = document.querySelector(".hero-actions .hero-button-secondary");
    setHeroButton(primary, "#quick", "30秒で状況を選ぶ", "目的に合う入口へ");
    setHeroButton(secondary, "#ready-check", "申込前の3点を確認", "無駄なクリックを防ぐ");

    var headerCta = document.querySelector(".header-cta");
    if (headerCta) {
      headerCta.href = "#quick";
      headerCta.textContent = "30秒で選ぶ";
    }

    var gate = createGate({
      id: "ready-check",
      label: "BEFORE EXTERNAL SITE",
      title: "外部サービスへ進む前に、3点だけ確認",
      description: "情報収集だけで複数の広告を順番に押すのではなく、今の目的に合う1つを選ぶ方が、申込み完了まで進みやすくなります。",
      items: [
        { title: "目的を1つに絞る", text: "売却、廃車、乗り換え、ローン、事業用保険のうち、今すぐ必要な項目を選びます。" },
        { title: "必要情報を準備する", text: "車検証、車の状態、希望時期、現在の契約内容など、入力に必要な情報を確認します。" },
        { title: "提供会社の対応を確認する", text: "サービスによっては、申込み後に電話・メール等で確認連絡があります。対応可能な場合だけ進みます。" }
      ],
      warning: "代表者本人や動作確認目的のクリックは成果にはつながりません。今後の確認作業では、A8広告を押さずにページ表示だけを確認してください。"
    });

    quickDirect.parentNode.insertBefore(gate, quickDirect);
    quickDirect.classList.add("is-qualified-only");
    var directHead = quickDirect.querySelector(".quick-direct-head strong");
    var directBadge = quickDirect.querySelector(".quick-direct-head span");
    if (directHead) {
      directHead.textContent = "利用するサービスが決まっている方のみ、公式サイトへ進んでください";
    }
    if (directBadge) {
      directBadge.textContent = "PR / 対象確認後";
    }

    var mobileFirst = document.querySelector(".mobile-bar a:first-child");
    if (mobileFirst) {
      mobileFirst.href = "#quick";
      mobileFirst.textContent = "30秒選択";
    }
  }

  function enhanceBusinessInsurancePage() {
    if (!/business-car-insurance-guide\.html$/.test(window.location.pathname)) {
      return;
    }

    var primary = document.querySelector(".hero-actions .hero-button-primary");
    var secondary = document.querySelector(".hero-actions .hero-button-secondary");
    setHeroButton(primary, "#check", "対象条件を先に確認", "ナンバー・満期日を見る");
    setHeroButton(secondary, "#insurance-ready", "見積前の最終確認", "対象確認済みの方");

    var headerCta = document.querySelector(".header-cta");
    if (headerCta) {
      headerCta.href = "#check";
      headerCta.textContent = "対象を確認";
    }

    var adFeature = document.querySelector("#official .ad-feature");
    if (adFeature && !document.getElementById("insurance-ready")) {
      var banner = adFeature.querySelector(".affiliate-banner");
      if (banner) {
        banner.id = "official-insurance-ad";
      }

      var gate = createGate({
        id: "insurance-ready",
        label: "FINAL ELIGIBILITY CHECK",
        title: "次の3点が確認できた方だけ、公式見積へ",
        description: "対象外クリックを減らし、見積完了まで進める可能性がある方に絞るための確認です。",
        items: [
          { title: "事業用ナンバー", text: "黒ナンバー・緑ナンバー等の軽貨物、配送車、トラック、ダンプなどを事業で使用します。" },
          { title: "満期日が90日以内", text: "現在の保険満期日を確認し、90日以上先ではないことを確認します。" },
          { title: "書類を確認できる", text: "車検証記録事項や現在の保険証券などを確認できる状態にします。" }
        ],
        warning: "自家用車、満期日が90日以上先、同一企業・同一世帯からの重複申込みなどは成果対象外とされています。",
        buttonHref: "#official-insurance-ad",
        buttonText: "条件を確認したので公式見積先を見る"
      });
      adFeature.parentNode.insertBefore(gate, adFeature);
    }

    var mobileLinks = document.querySelectorAll(".mobile-bar a");
    if (mobileLinks.length >= 2) {
      mobileLinks[0].href = "#check";
      mobileLinks[0].textContent = "対象確認";
      mobileLinks[1].href = "#insurance-ready";
      mobileLinks[1].textContent = "見積前確認";
    }
  }

  function enhanceConversionFlow() {
    addConversionStyles();
    enhanceTopPage();
    enhanceBusinessInsurancePage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceConversionFlow);
  } else {
    enhanceConversionFlow();
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="https://px.a8.net/"]');
    if (!link) {
      return;
    }

    var href = link.href;
    var nearestCard = link.closest("article, .ad-feature, .quick-direct, .comparison-card");
    var heading = nearestCard ? nearestCard.querySelector("h2, h3, strong") : null;
    var programLabel = heading ? heading.textContent.trim() : link.textContent.trim();
    var opensNewContext = link.target === "_blank" || event.ctrlKey || event.metaKey || event.shiftKey;
    var eventParameters = {
      send_to: conversionId,
      value: 1,
      currency: "JPY",
      event_label: programLabel || "a8_external_click",
      page_path: window.location.pathname
    };

    if (opensNewContext) {
      window.gtag("event", "conversion", eventParameters);
      return;
    }

    event.preventDefault();
    var continued = false;
    var continueToA8 = function () {
      if (continued) {
        return;
      }
      continued = true;
      window.location.href = href;
    };

    eventParameters.event_callback = continueToA8;
    eventParameters.event_timeout = 800;
    window.gtag("event", "conversion", eventParameters);
    window.setTimeout(continueToA8, 850);
  });
})();