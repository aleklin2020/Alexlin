
const commentsOpen = document.querySelector(".reviews__button") // кнопка открытие popup коментария
const commentClose = document.querySelector(".close") // кнокпа Закрытие комментария
const popupComment = document.querySelector(".rewiverser") // попап добавление комментария
const nameInput = popupComment.querySelector(".form-name") // input имени
const linkInput = popupComment.querySelector(".form-link") // input link
const messageInput = popupComment.querySelector(".form__text") // input messega
const addComment = document.querySelector(".developer-info__review")
const cardReview = document.querySelector(".review")
const addButton = document.querySelector(".form__logo")
const form = document.querySelector(".form-comment_up")
const date = new Date().toLocaleDateString(); // Дата пользователя 
const animationForm = popupComment.querySelectorAll(".animation-form")

// Временное решение для комментариев



const revierActive = document.querySelector(".revier-active")
$(function() {
      $('.form-comment_up').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
           revierActive.classList.add("active-modul");
            setTimeout (function() {
             $(revierActive).removeClass('active-modul');
              }, 4000);
        }).fail(function() {
          mistake.classList.add("active-modul");
            setTimeout (function() {
             $(mistake).removeClass('active-modul');
              }, 5000);
        });
        
        e.preventDefault(); 
        form.reset()
        popupCommentClose(popupComment)
        
            
      });
            
    });




function getComment (name, item, messega, dateAdd) {
const commentTemplate = document.querySelector("#templete-comments")// Темплеит форма
	const newElement = commentTemplate.content.cloneNode(true)
	const nameComment = newElement.querySelector(".review__name")
	const linkComment = newElement.querySelector(".review__link")
	const reviewComment = newElement.querySelector(".review__text")
	const dateComment = newElement.querySelector(".review__data")
	const animation = newElement.querySelector(".developer-info__review")

	nameComment.textContent = name 
	linkComment.href = item 
	reviewComment.textContent = messega
	dateComment.textContent = dateAdd
	animation.classList.add("active")


	return newElement;
}


function getComments (name, messega, dateAdd) {	
const commentTemplate = document.querySelector("#templete-comments")// Темплеит форма
	const newElement = commentTemplate.content.cloneNode(true)
	const nameComment = newElement.querySelector(".review__name")
	const linkComment = newElement.querySelector(".review__link")
	const reviewComment = newElement.querySelector(".review__text")
	const dateComment = newElement.querySelector(".review__data")
	const animation = newElement.querySelector(".developer-info__review")
	
	nameComment.textContent = name 
	reviewComment.textContent = messega
	dateComment.textContent = dateAdd
	linkComment.classList.add("no-active")
	animation.classList.add("active")


	return newElement;
}


function addComments (evt) {
	evt.preventDefault()
	const addName = nameInput.value
	const addLink = linkInput.value
	const addMesege = messageInput.value
	const addDate = date
	//const com = getComments(addName, addLink, addMesege, addDate)
	
	const comes =  () => {
		
		if (addLink.length > 1) {
			
			return getComment(addName, addLink, addMesege, addDate)
					
		} else {
			
			return getComments(addName, addMesege, addDate)
		}
	
			}
	
    cardReview.append(comes()) 

    
    popupCommentClose(popupComment)

}



function popupCommentOpen (elementOpen) {
	elementOpen.classList.add("active_form")
	animationForm.forEach(anim => {
		anim.classList.add("active")
	})
	
}
function popupCommentClose (elementClose) {
	elementClose.classList.remove("active_form")
	form.reset()
}

// закрытие комментария
commentsOpen.addEventListener("click", () => popupCommentOpen(popupComment))
// открытие комментария
commentClose.addEventListener("click", () => popupCommentClose(popupComment))
//form.addEventListener("submit", addComments)

popupComment.addEventListener("mousedown", event => {
	if (event.target === event.currentTarget) {
		popupCommentClose(popupComment)
	}
})


