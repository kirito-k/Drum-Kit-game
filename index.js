let audio_files = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3",
                    "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

let button_tag = document.querySelectorAll("Button");
for (let index = 0; index < button_tag.length; index++) {
    button_tag[index].addEventListener("click", function() {
        let path = "./sounds/" + audio_files[index];
        new Audio(path).play()
    });
}

