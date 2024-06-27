// Предположим, что данные о занятиях получаем из JSON-файла или API
const lessons = [
    { id: 1, title: "Йога", time: "10:00", maxParticipants: 15, currentParticipants: 10 },
    { id: 2, title: "Фитнес", time: "12:00", maxParticipants: 20, currentParticipants: 20 },
    { id: 3, title: "Пилатес", time: "14:00", maxParticipants: 10, currentParticipants: 5 }
];

// Функция для отображения занятий на странице
function renderSchedule() {
    const scheduleElement = document.getElementById('schedule');
    scheduleElement.innerHTML = '';

    lessons.forEach(lesson => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `
            <div>
                <h5 class="mb-1">${lesson.title}</h5>
                <p class="mb-1">Время: ${lesson.time}</p>
                <p class="mb-1">Макс. участников: ${lesson.maxParticipants}</p>
                <p class="mb-1">Записано: <span id="participants-${lesson.id}">${lesson.currentParticipants}</span></p>
            </div>
            <button id="btn-${lesson.id}" class="btn ${lesson.currentParticipants >= lesson.maxParticipants ? 'btn-secondary disabled' : 'btn-primary'}">${lesson.currentParticipants >= lesson.maxParticipants ? 'Запись недоступна' : 'Записаться'}</button>
        `;

        // Добавляем обработчик для кнопки "Записаться" или "Отменить запись"
        const btn = listItem.querySelector(`#btn-${lesson.id}`);
        btn.addEventListener('click', () => {
            if (btn.classList.contains('disabled')) return; // Не обрабатываем нажатия на заблокированную кнопку

            if (btn.textContent === 'Записаться') {
                lesson.currentParticipants++;
                document.getElementById(`participants-${lesson.id}`).textContent = lesson.currentParticipants;
                btn.textContent = 'Отменить запись';
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-danger');
            } else {
                lesson.currentParticipants--;
                document.getElementById(`participants-${lesson.id}`).textContent = lesson.currentParticipants;
                btn.textContent = 'Записаться';
                btn.classList.remove('btn-danger');
                btn.classList.add('btn-primary');
            }
        });

        scheduleElement.appendChild(listItem);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', renderSchedule);
