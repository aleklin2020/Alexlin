window.addEventListener("DOMContentLoaded", function() {

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) 
elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {

    let range = elem.createTextRange();
       range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);

        range.select()
    }
}

 

function mask(event) {
    let matrix = "+7 (___)-___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a

    });

    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)

};

    const input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

})



const formContact = document.querySelector(".form__contact_preven")
const formSend = document.querySelector(".send-active")
const formSendActive = document.querySelector("active-modul")
const mistake = document.querySelector(".mistake")

$(function() {
      $('.form__contact_preven').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
           formSend.classList.add("active-modul");
            setTimeout (function() {
             $(formSend).removeClass('active-modul');
              }, 4000);
        }).fail(function() {
          mistake.classList.add("active-modul");
            setTimeout (function() {
             $(mistake).removeClass('active-modul');
              }, 5000);
        });
        
        e.preventDefault(); 
        formContact.reset();
            
      });
            
    });




    

