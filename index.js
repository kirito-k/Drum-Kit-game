// Listout mp3 file names which will be played for the sequence of images and characters shown on screen
let audio_files = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3",
                    "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

// Get all the objects of button tag
let button_tag = document.querySelectorAll("Button");
// Assign audio files to play on button click using event listener
for (let index = 0; index < button_tag.length; index++) {
    
    button_tag[index].addEventListener("click", function() {
        let path = "./sounds/" + audio_files[index];
        new Audio(path).play()
        button_animation(this.innerHTML);
    });

}

// Assign audio files to play on specific key press using event listener
document.addEventListener('keydown', function(event) {
    let key = event.key;
    switch(key) {
        case 'w':
            new Audio("./sounds/crash.mp3").play();
            button_animation(key);
            break;
        case 'a':
            new Audio("./sounds/kick-bass.mp3").play();
            button_animation(key);
            break;
        case 's':
            new Audio("./sounds/snare.mp3").play();
            button_animation(key);
            break;
        case 'd':
            new Audio("./sounds/tom-1.mp3").play();
            button_animation(key);
            break;
        case 'j':
            new Audio("./sounds/tom-2.mp3").play();
            button_animation(key);
            break;
        case 'k':
            new Audio("./sounds/tom-3.mp3").play();
            button_animation(key);
            break;
        case 'l':
            new Audio("./sounds/tom-4.mp3").play();
            button_animation(key);
            break;
        default:
            break;
        }
})

// Add button click animation
function button_animation(key) {
    let button_tag = document.querySelector('.' + key);
    button_tag.classList.add('pressed');

    setTimeout(function() {
        button_tag.classList.remove('pressed');
    }, 100);
}