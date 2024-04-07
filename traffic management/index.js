

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const uploadLogo = document.querySelector(".inputCard");
    const fileInputName = document.getElementById("fileInputName");

    uploadLogo.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        const nameOfFile = file.name;
        fileInputName.innerText = nameOfFile;

        if (file && file.type.startsWith('video/')) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const videoData = event.target.result;
                const video = document.createElement('video');
                video.src = videoData;
                video.controls = true;
                video.autoplay = false;
                video.loop = true;
                videoPreview.innerHTML = '';
                videoPreview.appendChild(video);
            };
            reader.readAsDataURL(file);
        } else {
            videoPreview.innerHTML = '<p>No video preview available</p>';
        }
    });
});




function runPythonScript() {
    fetch('http://loalhost:3000/run-python-script', {
        method: 'GET'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to run Python script');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
