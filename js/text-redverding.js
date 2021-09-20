const wrapper = document.querySelector(".lader__text");
const text = document.querySelector(".text-none_reider");

const textCont = text.textContent;
text.style.display = "none";

for (let i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      let texts = document.createTextNode(textCont[i])
      let span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("header__wave");
      wrapper.appendChild(span);

    }, 55 * i);
  }(i));
}