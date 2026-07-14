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

  function setButton(button, href, title, subtitle) {
    if (!button) return;
    button.setAttribute("href", href);
    var strong = button.querySelector("strong");
    var small = button.querySelector("small");
    if (strong) strong.textContent = title;
    if (small) small.textContent = subtitle;
  }

  function replaceExactText(selector, replacements) {
    document.querySelectorAll(selector).forEach(function (element) {
      var text = element.textContent.trim();
      if (Object.prototype.hasOwnProperty.call(replacements, text)) {
        element.textContent = replacements[text];
      }
    });
  }

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
        .replace(/この広告では対象外となる例/g, "このサービスの対象外となる例");
    });
  }

  function polishCommonCopy() {
    replacePhrases();

    replaceExactText(".trust-badges li", {
      "PRリンクあり": "状況別に比較",
      "自己判断型": "自分のペースで確認",
      "個別相談なし": "必要事項を整理",
      "事業用車両向け": "黒・緑ナンバー向け"
    });

    document.querySelectorAll(".badge").forEach(function (badge) {
      badge.textContent = badge.textContent.replace(/^PR\s*\/\s*/, "");
    });

    document.querySelectorAll(".section-kicker").forEach(function (kicker) {
      if (/EXTERNAL SERVICES/.test(kicker.textContent)) {
        kicker.textContent = "SERVICE GUIDE";
      }
    });
  }

  function polishTopPage() {
    var pathname = window.location.pathname;
    var isTop = pathname.endsWith("/") || pathname.endsWith("/index.html");
    if (!isTop || !document.getElementById("quick")) return;

    var directBlock = document.getElementById("quick-direct");
    if (directBlock) directBlock.remove();

    var primary = document.querySelector(".hero-actions .hero-button-primary");
    var secondary = document.querySelector(".hero-actions .hero-button-secondary");
    setButton(primary, "#quick", "今の悩みから選ぶ", "状況に合うページへ");
    setButton(secondary, "#cases", "判断材料を確認する", "修理・売却・保険を整理");

    var headerCta = document.querySelector(".header-cta");
    if (headerCta) {
      headerCta.href = "#quick";
      headerCta.textContent = "悩みから選ぶ";
    }

    var headerDirect = document.querySelector('.header-nav a[href="#quick-direct"]');
    if (headerDirect) {
      headerDirect.href = "#cases";
      headerDirect.textContent = "状況別ガイド";
    }

    var choiceLinks = document.querySelectorAll(".quick-choice-card");
    var destinations = [
      "car-repair-or-sell.html",
      "haisha-accident-car.html",
      "car-loan-lease-guide.html",
      "car-loan-lease-guide.html",
      "business-car-insurance-guide.html",
      "#service-fleet-insurance"
    ];
    choiceLinks.forEach(function (link, index) {
      if (destinations[index]) link.href = destinations[index];
    });

    var miniNotice = document.querySelector('.quick-mini-link[href="#notice"]');
    if (miniNotice) miniNotice.textContent = "運営情報・ご利用上の注意";

    var mobileLinks = document.querySelectorAll(".mobile-bar a");
    if (mobileLinks.length >= 3) {
      mobileLinks[0].href = "#quick";
      mobileLinks[0].textContent = "悩みから選ぶ";
      mobileLinks[1].href = "car-repair-or-sell.html";
      mobileLinks[1].textContent = "売却・修理";
      mobileLinks[2].href = "business-car-insurance-guide.html";
      mobileLinks[2].textContent = "事業用保険";
    }
  }

  function polishInsurancePage() {
    if (!/business-car-insurance-guide\.html$/.test(window.location.pathname)) return;

    var primary = document.querySelector(".hero-actions .hero-button-primary");
    var secondary = document.querySelector(".hero-actions .hero-button-secondary");
    setButton(primary, "#check", "見積前の確認事項を見る", "ナンバー・満期日・書類");
    setButton(secondary, "#official", "保険の確認先を見る", "対象が合う方はこちら");

    var headerCta = document.querySelector(".header-cta");
    if (headerCta) {
      headerCta.href = "#check";
      headerCta.textContent = "確認事項を見る";
    }

    var firstKicker = document.querySelector(".hero .kicker");
    if (firstKicker) firstKicker.textContent = "BUSINESS VEHICLE INSURANCE";

    var adKicker = document.querySelector("#official .section-kicker");
    if (adKicker) adKicker.textContent = "外部サービス（広告）";

    var mobileLinks = document.querySelectorAll(".mobile-bar a");
    if (mobileLinks.length >= 2) {
      mobileLinks[0].href = "#check";
      mobileLinks[0].textContent = "確認事項";
      mobileLinks[1].href = "#official";
      mobileLinks[1].textContent = "保険の確認先";
    }
  }

  function enhanceCustomerExperience() {
    polishCommonCopy();
    polishTopPage();
    polishInsurancePage();
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
    var card = link.closest("article, .ad-feature, .service-card");
    var heading = card ? card.querySelector("h2, h3") : null;
    var label = heading ? heading.textContent.trim() : "external_service";

    window.dataLayer.push({
      event: "affiliate_click",
      affiliate_category: label,
      page_location: window.location.href
    });

    var opensNewContext = link.target === "_blank" || event.ctrlKey || event.metaKey || event.shiftKey;
    var parameters = {
      send_to: conversionId,
      value: 1,
      currency: "JPY",
      event_label: label,
      page_path: window.location.pathname
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