/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */
!(function (a, b) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], function () {
        return (a.Snackbar = b());
      })
    : "object" == typeof module && module.exports
    ? (module.exports = a.Snackbar = b())
    : (a.Snackbar = b());
})(this, function () {
  var a = {};
  a.current = null;
  var b = {
    text: "Default Text",
    textColor: "#FFFFFF",
    width: "auto",
    showAction: !0,
    actionText: "Dismiss",
    actionTextAria: "Dismiss, Description for Screen Readers",
    alertScreenReader: !1,
    actionTextColor: "#4CAF50",
    showSecondButton: !1,
    secondButtonText: "",
    secondButtonAria: "Description for Screen Readers",
    secondButtonTextColor: "#4CAF50",
    backgroundColor: "#323232",
    pos: "bottom-left",
    duration: 5e3,
    customClass: "",
    onActionClick: function (a) {
      a.style.opacity = 0;
    },
    onSecondButtonClick: function (a) {},
    onClose: function (a) {},
  };
  (a.show = function (d) {
    var e = c(!0, b, d);
    a.current &&
      ((a.current.style.opacity = 0),
      setTimeout(
        function () {
          var a = this.parentElement;
          a &&
            // possible null if too many/fast Snackbars
            a.removeChild(this);
        }.bind(a.current),
        500
      )),
      (a.snackbar = document.createElement("div")),
      (a.snackbar.className = "snackbar-container " + e.customClass),
      (a.snackbar.style.width = e.width);
    var f = document.createElement("p");
    if (
      ((f.style.margin = 0),
      (f.style.padding = 0),
      (f.style.color = e.textColor),
      (f.style.fontSize = "14px"),
      (f.style.fontWeight = 300),
      (f.style.lineHeight = "1em"),
      (f.innerHTML = e.text),
      a.snackbar.appendChild(f),
      (a.snackbar.style.background = e.backgroundColor),
      e.showSecondButton)
    ) {
      var g = document.createElement("button");
      (g.className = "action"),
        (g.innerHTML = e.secondButtonText),
        g.setAttribute("aria-label", e.secondButtonAria),
        (g.style.color = e.secondButtonTextColor),
        g.addEventListener("click", function () {
          e.onSecondButtonClick(a.snackbar);
        }),
        a.snackbar.appendChild(g);
    }
    if (e.showAction) {
      var h = document.createElement("button");
      (h.className = "action"),
        (h.innerHTML = e.actionText),
        h.setAttribute("aria-label", e.actionTextAria),
        (h.style.color = e.actionTextColor),
        h.addEventListener("click", function () {
          e.onActionClick(a.snackbar);
        }),
        a.snackbar.appendChild(h);
    }
    e.duration &&
      setTimeout(
        function () {
          a.current === this &&
            ((a.current.style.opacity = 0),
            // When natural remove event occurs let's move the snackbar to its origins
            (a.current.style.top = "-100px"),
            (a.current.style.bottom = "-100px"));
        }.bind(a.snackbar),
        e.duration
      ),
      e.alertScreenReader && a.snackbar.setAttribute("role", "alert"),
      a.snackbar.addEventListener(
        "transitionend",
        function (b, c) {
          "opacity" === b.propertyName &&
            "0" === this.style.opacity &&
            ("function" == typeof e.onClose && e.onClose(this),
            this.parentElement.removeChild(this),
            a.current === this && (a.current = null));
        }.bind(a.snackbar)
      ),
      (a.current = a.snackbar),
      document.body.appendChild(a.snackbar);
    getComputedStyle(a.snackbar).bottom, getComputedStyle(a.snackbar).top;
    (a.snackbar.style.opacity = 1),
      (a.snackbar.className =
        "snackbar-container " + e.customClass + " snackbar-pos " + e.pos);
  }),
    (a.close = function () {
      a.current && (a.current.style.opacity = 0);
    });
  // Pure JS Extend
  // http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
  var c = function () {
    var a = {},
      b = !1,
      d = 0,
      e = arguments.length;
    "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
      ((b = arguments[0]), d++);
    for (
      var f = function (d) {
        for (var e in d)
          Object.prototype.hasOwnProperty.call(d, e) &&
            (b && "[object Object]" === Object.prototype.toString.call(d[e])
              ? (a[e] = c(!0, a[e], d[e]))
              : (a[e] = d[e]));
      };
      d < e;
      d++
    ) {
      var g = arguments[d];
      f(g);
    }
    return a;
  };
  return a;
});
