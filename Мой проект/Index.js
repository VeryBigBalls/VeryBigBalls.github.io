const diseases = [
    {
        name: "Грипп",
        description: "Острое респираторное вирусное заболевание. Симптомы включают лихорадку, кашель, боль в горле, насморк и головную боль.",
        symptoms: "Лихорадка, кашель, боль в горле, насморк, головная боль",
        treatment: "Отдых, обильное питье, жаропонижающие, противовирусные препараты (по назначению врача)",
        image: ""
    },
    {
        name: "Простуда",
        description: "Вирусная инфекция верхних дыхательных путей. Симптомы могут включать насморк, кашель, чихание и боль в горле.",
        symptoms: "Насморк, кашель, чихание, боль в горле",
        treatment: "Отдых, обильное питье, симптоматическое лечение",
        image: ""
    },
    {
        name: "Коронавирусная инфекция (COVID-19)",
        description: "Инфекционное заболевание, вызываемое вирусом SARS-CoV-2. Симптомы могут варьироваться от легких до тяжелых, включая лихорадку, кашель и затрудненное дыхание.",
        symptoms: "Лихорадка, кашель, затрудненное дыхание, потеря вкуса или запаха",
        treatment: "Симптоматическое лечение, противовирусные препараты (по назначению врача), в тяжелых случаях - госпитализация",
        image: ""
    },
    {
        name: "Диабет",
        description: "Группа метаболических заболеваний, характеризующихся высоким уровнем сахара в крови. Может привести к серьезным осложнениям.",
        symptoms: "Частое мочеиспускание, сильная жажда, усталость, потеря веса",
        treatment: "Контроль уровня сахара в крови, инсулин (при необходимости), диета, физическая активность",
        image: ""
    },
    {
        name: "Гипертония",
        description: "Заболевание, характеризующееся повышенным артериальным давлением. Может увеличить риск сердечных заболеваний и инсульта.",
        symptoms: "Головные боли, головокружение, шум в ушах",
        treatment: "Изменение образа жизни, лекарственные препараты",
        image: ""
    },
    {
        name: "Астма",
        description: "Хроническое заболевание дыхательных путей, вызывающее их сужение и воспаление. Симптомы могут включать кашель, свистящее дыхание и одышку.",
        symptoms: "Кашель, свистящее дыхание, одышка",
        treatment: "Ингаляционные кортикостероиды, бронхолитики",
        image: ""
    },
    {
        name: "Аллергия",
        description: "Реакция иммунной системы на безобидные вещества, называемые аллергенами. Симптомы могут включать зуд, чихание, кашель и кожные высыпания.",
        symptoms: "Зуд, чихание, кашель, кожные высыпания",
        treatment: "Избегание аллергенов, антигистаминные препараты",
        image: ""
    }
];


const diseaseContainer = document.getElementById("disease-container");
const modal = document.getElementById("diseaseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSymptoms = document.getElementById("modalSymptoms");
const modalTreatment = document.getElementById("modalTreatment");
const closeButton = document.querySelector(".close-button");
const contactButton = document.getElementById('contactButton');


diseases.forEach(disease => {
    const card = document.createElement("div");
    card.classList.add("disease-card");

    const title = document.createElement("h3");
    title.textContent = disease.name;
    const description = document.createElement("p");
    description.textContent = disease.description;


    card.appendChild(title);
    card.appendChild(description);

    card.addEventListener("click", () => openModal(disease)); // Обработчик клика

    diseaseContainer.appendChild(card);
});

// Правильное перенаправление на страницу contact.html
contactButton.addEventListener('click', () => {
    window.location.href = 'Contacts.html';
});


function openModal(disease) {
    modalTitle.textContent = disease.name;
    modalDescription.textContent = disease.description;
    modalSymptoms.textContent = `Симптомы: ${disease.symptoms}`;
    modalTreatment.textContent = `Лечение: ${disease.treatment}`;

    modal.style.display = "block"; // Show modal
}

function closeModal() {
    modal.style.display = "none";
}

closeButton.addEventListener('click', closeModal); // закрытие по клику на крестик
// закрытие модального окна по клику за его пределами
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});