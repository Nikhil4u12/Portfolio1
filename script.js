document.addEventListener("DOMContentLoaded", () => {

    const words = [
        "Software Developer",
        "Full Stack Developer",
        "Freelancer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    const typing = document.querySelector(".typing");

    function typeWord() {
        if (charIndex < words[wordIndex].length) {
            typing.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWord, 120);
        } else {
            setTimeout(deleteWord, 1500);
        }
    }

    function deleteWord() {
        if (charIndex > 0) {
            typing.textContent = typing.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteWord, 80);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWord, 500);
        }
    }

    typeWord();
});


