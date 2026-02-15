const noImages = [
    "public/images/Sad Arrested Development GIF.gif",
    "public/images/Sadness Reaction GIF by MOODMAN.gif",
    "public/images/Sad Dog Gif.gif",
    "public/images/SadAnthonyAnderson.gif"
];

const yesImages = [
    "public/images/Dog Love GIF.gif",
    "public/images/excited american horror story GIF.gif",
    "public/images/goals love GIF by LVRS.gif",
    "public/images/i love you heart GIF.gif"
];

const answers_no = {
    english: [
        "No",
        "ahh!",
        "Bathong??",
        "Are you really realy sure???",
        "Think again?",
        "I am calling Kelebogile",
        "Ohh Modimo",
        "Try pressing the Purple button",
        "Ngwana wa ga Hilda",
        "Maybe you shuold wear your Glasses",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid?",
        "Peut-être, on peut en parler ?",
        "Je ne vais pas demander encore une fois!",
        "D'accord, maintenant ca me fait mal!",
        "Tu es juste méchant!",
        "Pourquoi tu me fais ça?",
        "Donnez-moi une chance plz!",
        "Je te supplie d'arrêter!",
        "D'accord, recommençons.."
    ],
    setswana: [
        "Nnyaa",
        "Aoo tlhe mma ?",
        "Aoo tlhe mma tota??",
        "Ao tlhe mma tota tota???",
        "Akanya gape?",
        "Ao motho wame",
        "Ke eng o le tsididi jaana?",
        "Gongwe re ka buisana?",
        "Ga nkitla ke kopa gape!",
        "Go siame, jaanong o nkutlwisa botlhoko!",
        "O setlhogo jaanong!",
        "Ke eng o ntira jaana?",
        "Tsweetswee tlhe mma!",
        "Ke a go rapela, emisa!",
        "Go siame, a re simolole sesha.."
    ]
};

answers_yes = {
    "english": "Yes",
    "french": "Oui",
    "setswana": "Ee"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');

    // 🔄 Random NO image every click
    banner.src = noImages[Math.floor(Math.random() * noImages.length)];
    refreshBanner();

    clicks++;

    // Increase YES button size
    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    let total = answers_no[language].length;

    // Change NO button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else {
        alert(answers_no[language][i]);
        i = 1;
        clicks = 0;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');

    // 💖 Random YES image
    banner.src = yesImages[Math.floor(Math.random() * yesImages.length)];
    refreshBanner();

    // Hide buttons
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    // Show success message
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});


function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin?";
    } else if (language === "setswana") {
        questionHeading.textContent = "A o tla nna Valentine wa me?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Yepppie, à bientôt :3";
    } else if (language === "setswana") {
        successMessage.textContent = "Yee, re tla bonana haufinyane :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}
