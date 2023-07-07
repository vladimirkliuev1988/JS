// 1. Сделать инпут и кнопку "Найти пост"
// 2. В интпут вы вводите номер поста, он может быть от 1 до 100
// 3. После чего нажимаете на кпопку и делается запрос за постом
// 4. Когда получаете Пост, выводите его в тэг ( например тег p)
// Вот сайт откуда можно получать Посты https://jsonplaceholder.typicode.com/
let button = document.querySelector('button');
function findPost() {
    let postNumber = document.getElementById("postNumber").value;

    if (postNumber >= 1 && postNumber <= 100) {
      let url = "https://jsonplaceholder.typicode.com/posts/" + postNumber;

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let postTitle = data.title;
          let postBody = data.body;
          let postResult = document.getElementById("postResult");
          postResult.innerHTML = "<strong>" + postTitle + "</strong><br/>" + postBody;
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      alert("Введите число от 1 до 100.");
    }
  }

  button.onclick = function() {
    findPost()
  };