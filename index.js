let audio_files = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3",
                    "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

let button_tag = document.querySelectorAll("Button");
for (let index = 0; index < button_tag.length; index++) {
    button_tag[index].addEventListener("click", function() {
        let path = "./sounds/" + audio_files[index];
        new Audio(path).play()
    });
}

document.addEventListener('keydown', function(event) {
    let key = event.key;
    switch(key) {
        case 'w':
            new Audio("./sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio("./sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio("./sounds/tom-4.mp3").play();
            break;
        default:
            break;
        }
})