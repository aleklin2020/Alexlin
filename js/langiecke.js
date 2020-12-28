let eng = {
   nav_1: "I am.",
  nav_2: "My skill.",
  nav_3: "Portfolio.",
  nav_4: "job.",
  nav_5: "freelance.",
  nav_6: "order.",
  Header_hello: "Hello",
  Header_u_you: "I am Alekseu",
  Header_active: "My main activity",
  Header_frontend: "Frontend Development.",
  Header_text: "Perhaps I am exactly the one you are looking for.",
  Header_web: "Web developer",
  header_button: "Go to portfolio",
 
 
  
};

let rus = {
  nav_1: "Я.",
  nav_2: "Мой скилл.",
  nav_3: "Портфолио.",
  nav_4: "Работа.",
  nav_5: "Фриланс.",
  nav_6: "Заказ.",
  Header_hello: "Здравствуйте",
  Header_u_you: "Меня зовут Алексей",
  Header_active: "Основная моя деятельность" ,
  Header_frontend: "frontend разработка.",
  Header_text: "Возможно я, именно тот, кого Вы ищите.",
  Header_web: "Web-разработчик",
  header_button: "Перейти в портфолио",
  




  
};

changeLagnuage();

function changeLagnuage(){
  let language = lang.checked ? rus : eng;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}
