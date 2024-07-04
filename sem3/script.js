const accessKey = '31VgBQY-ojYu1AB15lfmN0NJadaoLwlrfpENDjEmwVc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

const unsplashImage = document.getElementById('unsplash-image');
const photographerName = document.getElementById('photographer-name');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');

let likes = parseInt(localStorage.getItem('likes')) || 0;

// Функция для обновления данных об изображении
function updateImage() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            unsplashImage.src = data.urls.regular;
            photographerName.textContent = `Photo by ${data.user.name}`;
        })
        .catch(error => console.error('Fetch error:', error));
}

// Функция для обновления счетчика лайков
function updateLikes() {
    likeCount.textContent = likes;
}

// Обработчик кнопки "Лайк"
likeButton.addEventListener('click', () => {
    likes++;
    localStorage.setItem('likes', likes);
    updateLikes();
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateImage();
    updateLikes();
});
