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

  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="https://px.a8.net/"]');
    if (!link) {
      return;
    }

    var href = link.href;
    var opensNewContext = link.target === "_blank" || event.ctrlKey || event.metaKey || event.shiftKey;
    if (opensNewContext) {
      window.gtag("event", "conversion", {
        send_to: conversionId,
        value: 1,
        currency: "JPY"
      });
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

    window.gtag("event", "conversion", {
      send_to: conversionId,
      value: 1,
      currency: "JPY",
      event_callback: continueToA8,
      event_timeout: 800
    });
    window.setTimeout(continueToA8, 850);
  });
})();
