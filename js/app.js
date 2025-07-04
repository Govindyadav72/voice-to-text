document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const resultText = document.getElementById('resultText');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = function (event) {
            resultText.value = event.results[0][0].transcript;
        };

        recognition.onerror = function (event) {
            console.error('Speech recognition error', event.error);
        };

        startButton.addEventListener('click', function () {
            recognition.start();
        });
    } else {
        alert('Your browser does not support the Web Speech API');
    }
});