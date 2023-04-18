const key = 'f66fd99707b137fcde21ff30c43ee48f';
const curTime = document.querySelector('.time-container .time');
const weather = document.querySelector('.weather-container .weather');


const getCity = async (city) => {

    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    weatherText = `
    <div class="weather-container">
    <div class="weather">
    <span>${data.name}</span>
    <span>${data.weather[0].description}</span>
    </div>
    </div>
    `;
    weather.innerHTML = weatherText;

}

getCity('london');

// Time count.

const welcomeText = document.querySelector('.welcome-text')
const bgImage = document.querySelector('body')


const getTime = () => {

    const timeNow = new Date()

    const sec = timeNow.getSeconds();
    const mins = timeNow.getMinutes();
    const hour = timeNow.getHours();

    let html = `
    <span class="time">${hour}:</span>
    <span class="time">${mins}:</span>
    <span class="time">${sec}</span>
    <span class="time">PM</span>
    `;
    curTime.innerHTML = html;

    let morningMessage = `
    <div class="welcome-text">
    <h1>Good Morning and welcome to my portfolio page.</h1>
    </div>
    `;
    let afternoonMessage = `
    <div class="welcome-text">
    <h1>Good Afternoon and welcome to my portfolio page.</h1>
    </div>
    `;
    let eveningMessage = `
    <div class="welcome-text">
    <h1>Good Evening and welcome to my portfolio page.</h1>
    </div>
    `;
    if (hour < 12 ) {
        welcomeText.innerHTML = morningMessage;
        bgImage.style.backgroundImage = "url('morning.jpg')";
    } else if (hour >= 12 & hour <= 16) {
        welcomeText.innerHTML = afternoonMessage;
        bgImage.style.backgroundImage = "url('afternoon.jpg')";
    } else {
        welcomeText.innerHTML = eveningMessage;
        bgImage.style.backgroundImage = "url('night.jpg')";
    }
}
setTimeout(() => {
    getTime()
}, 10);
setInterval(getTime, 1000)

// Page content
const pageContent = document.querySelector('.page-content')

const portfolioCard = [
    {title: 'React', image: 'react.png'},
    {title: 'WordPress', image: 'https://free-images.com/md/4138/artistic_conception_green_689793.jpg'},
    {title: 'Vanilla Javascript', image: 'https://cdn.pixabay.com/photo/2023/01/22/15/52/flamingos-7736731__480.jpg'},
]

setTimeout(() => {
    
    portfolioCard.forEach((portfolio) => {
    let html = `
    <div class="projects">
    <h1>${portfolio.title}</h1>
    <img src=${portfolio.image} alt="#">
    <a href="https://chimaike-f873f.web.app/" alt="portfolio-page">View Project</a>
    </div>
    `
    pageContent.innerHTML += html;
})
}, 2000);
