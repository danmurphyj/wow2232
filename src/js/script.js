const swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 14,
    loop: false,
    observer: true,
    observeParents: true,

    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        }
    }
});


const rankSelect = document.querySelector('.forge-controls select:nth-of-type(1)');
const gemSelect = document.querySelector('.forge-controls select:nth-of-type(2)');
const generateBtn = document.querySelector('.forge-controls .btn');
const shieldImage = document.querySelector('.forge-preview img');

if (rankSelect && gemSelect) {
    const shields = {
        Peasant: {
            Emerald: './src/images/shield_1.png',
            Gold: './src/images/shield_1_gold.png',
            'Blue Crystal': './src/images/shield_1_blue.png'
        },

        Squire: {
            Emerald: './src/images/shield_2.png',
            Gold: './src/images/shield_2_gold.png',
            'Blue Crystal': './src/images/shield_2_blue.png'
        },

        Knight: {
            Emerald: './src/images/shield_3.png',
            Gold: './src/images/shield_3_gold.png',
            'Blue Crystal': './src/images/shield_3_blue.png'
        },

        Commander: {
            Emerald: './src/images/shield_4.png',
            Gold: './src/images/shield_4_gold.png',
            'Blue Crystal': './src/images/shield_4_blue.png'
        },

        'Royal Guard': {
            Emerald: './src/images/shield_5.png',
            Gold: './src/images/shield_5_gold.png',
            'Blue Crystal': './src/images/shield_5_blue.png'
        }
    };

    generateBtn.addEventListener('click', () => {

        const selectedRank = rankSelect.value;
        const selectedGem = gemSelect.value;

        const newShield = shields[selectedRank][selectedGem];

        shieldImage.style.opacity = '0';

        setTimeout(() => {

            shieldImage.src = newShield;

            shieldImage.style.opacity = '1';

        }, 200);

    });
}


const menuButton = document.querySelector('.menu-button');
const headerWrapper = document.querySelector('.header-wrapper');

menuButton.addEventListener('click', () => {
    headerWrapper.classList.toggle('active');

    if (headerWrapper.classList.contains('active')) {
        menuButton.innerHTML = '✕';
    } else {
        menuButton.innerHTML = '☰';
    }
});


const copyContract = document.getElementById('copyContract');
const contractText = document.getElementById('contractText');
const copyIcon = document.getElementById('copyIcon');

copyContract.addEventListener('click', async () => {

    const fullAddress = contractText.textContent;

    try {
        await navigator.clipboard.writeText(fullAddress);

        copyIcon.textContent = '✓';

        setTimeout(() => {
            copyIcon.textContent = '⧉';
        }, 2000);

    } catch (err) {
        console.error('Copy failed', err);
    }
});