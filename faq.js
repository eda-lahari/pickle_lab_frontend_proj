function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    if (answerElement.style.display === "block") {
        answerElement.style.display = "none";
        questionElement.querySelector('.arrow').style.transform = "rotate(0deg)";
    } else {
        answerElement.style.display = "block";
        questionElement.querySelector('.arrow').style.transform = "rotate(180deg)";
    }
}
