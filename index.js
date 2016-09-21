var file = document.getElementsByClassName('file')[0];

var progress = 23;

var updateProgress = setInterval(
    function () {

        if (progress > 71) {
            clearInterval(updateProgress);
            return;
        }

        progress++;
        file.style.left = progress + '%';
    }, 200
);

console.log(file);