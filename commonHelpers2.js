import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".feedback-form"),t=o.querySelector('input[name="email"]'),a=o.querySelector('textarea[name="message"]');o.addEventListener("input",function(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))});window.addEventListener("load",function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t.value=e.email||"",a.value=e.message||""});o.addEventListener("submit",function(e){e.preventDefault();const l={email:t.value.trim(),message:a.value.trim()};l.email&&l.message?(console.log(l),localStorage.removeItem("feedback-form-state"),t.value="",a.value=""):alert("Please fill in all fields before submitting.")});
//# sourceMappingURL=commonHelpers2.js.map