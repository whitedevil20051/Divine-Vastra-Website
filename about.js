const images = [
    "about/ss1.png",
    "about/ss2.png",
    "about/ss3.png",
    "about/ss4.png"
];

const texts = [
    "Divine Vastra celebrates the art of traditional weaving. Each thread reflects the heritage of Indian looms, preserving age-old craftsmanship passed through generations.",

    "Our sarees showcase rich colors and intricate patterns inspired by regional artistry, blending cultural depth with modern elegance.",

    "Every fabric is carefully sourced and crafted by skilled artisans, ensuring authenticity, quality, and timeless beauty in every drape.",

    "From weaving to finishing, Divine Vastra represents dedication, precision, and a commitment to empowering artisan communities."
];

let currentIndex = 0;

function changeSlide(index){
    currentIndex = index;
    document.getElementById("mainImage").src = images[index];
    document.getElementById("aboutParagraph").innerText = texts[index];
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(currentIndex);
}, 4000);

window.addEventListener("load", () => {
    changeSlide(0);
});
