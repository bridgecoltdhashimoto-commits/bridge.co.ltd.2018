(function () {
  "use strict";

  var tagId = "AW-18312820899";
  var conversionId = "AW-18312820899/d5ETCO_sgs4cEKPxnZxE";
  var path = window.location.pathname;
  var isTopPage = /\/$|\/index\.html$/.test(path);
  var engaged = false;

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

  window.setTimeout(function () {
    engaged = true;
  }, 20000);

  window.addEventListener("scroll", function () {
    var doc = document.documentElement;
    var scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
    if (window.scrollY / scrollable >= 0.35) engaged = true;
  }, { passive: true });

  function replacePhrases() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      var value = node.nodeValue;
      if (!value || !value.trim()) return;
      node.nodeValue = value
        .replace(/\s*\/\s*PR/g, "")
        .replace(/^PR\s*\/\s*/g, "")
        .replace(/A8の広告条件では、/g, "掲載サービスでは、")
        .replace(/成果対象外/g, "受付対象外")
        .replace(/今回の事業用車両保険広告/g, "掲載している事業用車両保険サービス")
        .replace(/この広告では対象外となる例/g, "このサービスの対象外となる例")
        .replace(/PRリンクへ進む/g, "確認先へ進む")
        .replace(/PRリンクあり/g, "状況別に比較")
        .replace(/個別相談なし/g, "必要事項を整理")
        .replace(/すぐ外部サービスを確認/g, "判断材料を先に確認")
        .replace(/急ぎの方はこちらから外部サービスを確認できます/g, "今の状況に合うガイドを先に確認できます");
    });
  }

  function polishLabels() {
    document.querySelectorAll(".badge").forEach(function (badge) {
      badge.textContent = badge.textContent.replace(/^PR\s*\/\s*/, "");
    });

    document.querySelectorAll(".section-kicker").forEach(function (kicker) {
      if (/EXTERNAL SERVICES/.test(kicker.textContent)) {
        kicker.textContent = "SERVICE GUIDE";
      }
    });

    var firstKicker = document.querySelector(".hero .kicker");
    if (firstKicker) firstKicker.textContent = firstKicker.textContent.replace(/\s*\/\s*PR/g, "");
  }

  function injectStyles() {
    if (document.getElementById("bridge-conversion-quality-style")) return;
    var style = document.createElement("style");
    style.id = "bridge-conversion-quality-style";
    style.textContent = [
      ".fit-note{margin:12px 0;padding:11px 13px;border-radius:13px;background:#f3f7fb;border:1px solid #d8e3ef;color:#34465d;font-size:.84rem;font-weight:750;line-height:1.65}",
      ".quick-direct .quality-note{margin:8px 0 14px;color:#526175;font-size:.88rem;font-weight:700}",
      ".quick-direct-grid .quick-direct-button[href$='.html']{text-decoration:none}",
      ".quick-direct-grid .quick-direct-button[href$='.html']:after{content:'  →';font-weight:900}",
      ".bridge-fast-ad{position:fixed;right:22px;bottom:22px;z-index:80;display:grid;gap:1px;min-width:230px;padding:12px 18px;border:2px solid rgba(255,255,255,.72);border-radius:18px;color:#fff!important;background:linear-gradient(135deg,#0f62d8,#06b6c9);box-shadow:0 18px 40px rgba(6,24,46,.28);text-decoration:none!important;line-height:1.35}",
      ".bridge-fast-ad small{font-size:.68rem;font-weight:900;opacity:.88}.bridge-fast-ad strong{font-size:.95rem;font-weight:950}.bridge-fast-ad:hover,.bridge-fast-ad:focus-visible{transform:translateY(-3px);outline:3px solid rgba(6,182,201,.3);outline-offset:3px}",
      ".mobile-bar .bridge-fast-mobile{color:#fff;background:linear-gradient(135deg,#0f62d8,#06b6c9);box-shadow:0 10px 20px rgba(15,98,216,.28)}",
      ".bridge-fast-mobile-only{display:none}",
      "@media(max-width:760px){.bridge-fast-ad{display:none}.bridge-fast-mobile-only{position:fixed;left:10px;right:10px;bottom:10px;z-index:80;display:flex;min-height:56px;align-items:center;justify-content:center;padding:12px 16px;border-radius:16px;color:#fff!important;background:linear-gradient(135deg,#0f62d8,#06b6c9);box-shadow:0 14px 32px rgba(6,24,46,.3);font-weight:950;text-decoration:none!important}}"
    ].join("");
    document.head.appendChild(style);
  }

  function optimizeTopEntry() {
    if (!isTopPage) return;

    var quick = document.getElementById("quick-direct");
    if (quick) {
      quick.setAttribute("aria-label", "悩み別ガイドへの入口");
      quick.innerHTML = [
        '<div class="quick-direct-head"><strong>申込み先を選ぶ前に、今の状況を整理する</strong><span>悩み別ガイド</span></div>',
        '<p class="quality-note">近い項目を選ぶと、費用・条件・注意点を確認してから必要なサービスへ進めます。</p>',
        '<div class="quick-direct-grid">',
        '<a class="quick-direct-button" href="car-repair-or-sell.html">修理するか売るか整理</a>',
        '<a class="quick-direct-button" href="haisha-accident-car.html">事故車・不動車を整理</a>',
        '<a class="quick-direct-button" href="keep-or-sell-car.html">維持費を見直す</a>',
        '<a class="quick-direct-button" href="car-loan-lease-guide.html">ローン・リースを比較</a>',
        '<a class="quick-direct-button" href="auto-insurance-comparison-guide.html">一般の自動車保険を比較</a>',
        '<a class="quick-direct-button" href="business-car-insurance-guide.html">黒・緑ナンバー保険を確認</a>',
        '</div>'
      ].join("");
    }

    var serviceHeading = document.querySelector("#services .section-heading h2");
    var serviceDescription = document.querySelector("#services .section-heading > p");
    if (serviceHeading) serviceHeading.textContent = "必要なサービスだけ確認する";
    if (serviceDescription) {
      serviceDescription.textContent = "各ガイドで条件を整理したあと、必要な確認先だけ選んでください。この項目には広告リンクが含まれます。";
    }
  }

  function addFitNote(card, text) {
    if (!card || card.querySelector(".fit-note")) return;
    var link = card.querySelector('a[href^="https://px.a8.net/"]');
    if (!link) return;
    var note = document.createElement("p");
    note.className = "fit-note";
    note.textContent = text;
    var container = link.parentElement;
    container.insertBefore(note, link);
  }

  function addCustomerFitNotes() {
    addFitNote(document.getElementById("service-satei"), "車種・年式・走行距離を確認でき、売却を具体的に検討している場合の確認先です。");
    addFitNote(document.getElementById("service-kaitori"), "買取先を比較する意思があり、査定時の連絡に対応できる場合に確認してください。");
    addFitNote(document.getElementById("service-haisha"), "事故車・不動車・車検切れなど、処分方法を具体的に確認したい場合の確認先です。");
    addFitNote(document.getElementById("service-import"), "輸入車の車種・年式・状態が分かり、売却を検討している場合に確認してください。");
    addFitNote(document.getElementById("service-lease"), "月額だけでなく契約期間・走行距離・総支払額まで比較する方に向いています。");
    addFitNote(document.getElementById("service-lease-mileage"), "毎月のおおよその走行距離が分かる状態で確認すると比較しやすくなります。");
    addFitNote(document.getElementById("service-lease-new"), "希望車種・利用期間・月額予算を整理してから確認してください。");
    addFitNote(document.getElementById("service-loan"), "購入を具体的に検討し、必要書類や支払い条件を確認できる場合の確認先です。");
    addFitNote(document.getElementById("service-loan-used"), "中古車購入を具体的に検討し、審査や契約条件を確認できる場合に進んでください。");
    addFitNote(document.getElementById("service-business-insurance"), "黒・緑ナンバーの車両用途、現在の満期日、必要書類を確認してから進んでください。");
    addFitNote(document.getElementById("service-fleet-insurance"), "複数台の保有状況と現在の契約内容を確認できる事業者向けです。");
  }

  function polishMobileNavigation() {
    if (/business-car-insurance-guide\.html$/.test(path)) {
      var links = document.querySelectorAll(".mobile-bar a");
      if (links.length >= 2) {
        links[0].href = "#check";
        links[0].textContent = "確認事項";
        links[1].href = "#official";
        links[1].textContent = "保険の確認先";
      }
    }
  }


  function fastAccessLabel() {
    if (/car-inspection-expensive-replace\.html$/.test(path)) return "車検店舗を比較";
    if (/car-loan-lease-guide\.html$/.test(path)) return "カーリースを確認";
    if (/haisha-accident-car\.html$/.test(path)) return "廃車サービスを確認";
    if (/commercial-truck-sell\.html$/.test(path)) return "商用車買取を確認";
    if (/import-car-sell\.html$/.test(path)) return "輸入車買取を確認";
    if (/insurance.*guide\.html$|business-car-insurance-guide\.html$/.test(path)) return "保険サービスを確認";
    if (/car-repair|keep-or-sell/.test(path)) return "査定サービスを確認";
    return "外部サービスを見る";
  }

  function addFastAffiliateAccess() {
    if (isTopPage || document.querySelector(".bridge-fast-ad")) return;

    var primary = document.querySelector('main a[href^="https://px.a8.net/"]');
    if (!primary) return;

    var href = primary.getAttribute("href");
    var label = fastAccessLabel();
    var header = document.querySelector(".header-cta");
    if (header) {
      header.href = href;
      header.rel = "nofollow sponsored";
      header.textContent = label;
      header.setAttribute("aria-label", label + "（広告・外部サイト）");
    }

    var mobileBar = document.querySelector(".mobile-bar");
    if (mobileBar) {
      var mobileLinks = mobileBar.querySelectorAll("a");
      var mobileTarget = mobileLinks[1] || mobileLinks[0];
      if (mobileTarget) {
        mobileTarget.href = href;
        mobileTarget.rel = "nofollow sponsored";
        mobileTarget.textContent = label;
        mobileTarget.classList.add("bridge-fast-mobile");
        mobileTarget.setAttribute("aria-label", label + "（広告・外部サイト）");
      }
    } else {
      var mobile = document.createElement("a");
      mobile.className = "bridge-fast-mobile-only";
      mobile.href = href;
      mobile.rel = "nofollow sponsored";
      mobile.textContent = label + "（広告）";
      mobile.setAttribute("aria-label", label + "（広告・外部サイト）");
      document.body.appendChild(mobile);
    }

    var desktop = document.createElement("a");
    desktop.className = "bridge-fast-ad";
    desktop.href = href;
    desktop.rel = "nofollow sponsored";
    desktop.setAttribute("aria-label", label + "（広告・外部サイト）");
    desktop.innerHTML = "<small>広告 / 外部サービス</small><strong>" + label + " →</strong>";
    document.body.appendChild(desktop);
  }

  function enhanceCustomerExperience() {
    injectStyles();
    replacePhrases();
    polishLabels();
    optimizeTopEntry();
    addCustomerFitNotes();
    polishMobileNavigation();
    addFastAffiliateAccess();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceCustomerExperience);
  } else {
    enhanceCustomerExperience();
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="https://px.a8.net/"]');
    if (!link) return;

    var href = link.href;
    var card = link.closest("article, .ad-feature, .service-card, .quick-direct, .ad-panel");
    var heading = card ? card.querySelector("h2, h3, strong") : null;
    var label = heading ? heading.textContent.trim() : "external_service";

    window.dataLayer.push({
      event: "affiliate_click",
      affiliate_category: label,
      page_location: window.location.href,
      qualified_engagement: engaged ? 1 : 0
    });

    if (!engaged) return;

    var opensNewContext = link.target === "_blank" || event.ctrlKey || event.metaKey || event.shiftKey;
    var parameters = {
      send_to: conversionId,
      value: 1,
      currency: "JPY",
      event_label: label,
      page_path: path
    };

    if (opensNewContext) {
      window.gtag("event", "conversion", parameters);
      return;
    }

    event.preventDefault();
    var continued = false;
    var continueToA8 = function () {
      if (continued) return;
      continued = true;
      window.location.href = href;
    };

    parameters.event_callback = continueToA8;
    parameters.event_timeout = 800;
    window.gtag("event", "conversion", parameters);
    window.setTimeout(continueToA8, 850);
  });
})();