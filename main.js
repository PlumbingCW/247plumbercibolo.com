(function () {
  "use strict";
  var root = document.documentElement;
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var burger = document.querySelector(".hamburger");
  var closeBtn = document.querySelector(".drawer-close");

  function openDrawer() {
    if (!drawer) { return; }
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    if (overlay) { overlay.classList.add("visible"); }
    if (burger) { burger.setAttribute("aria-expanded", "true"); }
    root.style.overflow = "hidden";
    if (closeBtn) { closeBtn.focus(); }
  }
  function closeDrawer() {
    if (!drawer) { return; }
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (overlay) { overlay.classList.remove("visible"); }
    if (burger) { burger.setAttribute("aria-expanded", "false"); }
    root.style.overflow = "";
  }
  if (burger) { burger.addEventListener("click", function () { if (drawer.classList.contains("open")) { closeDrawer(); } else { openDrawer(); } }); }
  if (closeBtn) { closeBtn.addEventListener("click", closeDrawer); }
  if (overlay) { overlay.addEventListener("click", closeDrawer); }
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      var t = e.target;
      while (t && t !== drawer) { if (t.tagName === "A") { closeDrawer(); return; } t = t.parentNode; }
    });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
  if (window.matchMedia) {
    var mq = window.matchMedia("(min-width: 769px)");
    var onChange = function () { if (mq.matches) { closeDrawer(); } };
    if (mq.addEventListener) { mq.addEventListener("change", onChange); } else if (mq.addListener) { mq.addListener(onChange); }
  }

  var qs = document.querySelectorAll(".faq-q");
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener("click", function () {
      var item = this.parentNode;
      var open = item.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
