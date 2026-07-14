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
        .replace(/個別相談なし/g, "必要事項を整理");
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

  function polishMobileNavigation() {
    if (/business-car-insurance-guide\.html$/.test(window.location.pathname)) {
      var links = document.querySelectorAll(".mobile-bar a");
      if (links.length >= 2) {
        links[0].href = "#check";
        links[0].textContent = "確認事項";
        links[1].href = "#official";
        links[1].textContent = "保険の確認先";
      }
    }
  }

  function enhanceCustomerExperience() {
    replacePhrases();
    polishLabels();
    polishMobileNavigation();
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
    var card = link.closest("article, .ad-feature, .service-card, .quick-direct");
    var heading = card ? card.querySelector("h2, h3, strong") : null;
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