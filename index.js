const characterValue = document.getElementById("textarea");
let totalcount = document.getElementById("total_counter");
let remaincount = document.getElementById("remain_counter");

let char = 0;

const updateCounter = () => {
    // alert("Key up");
    userchar = characterValue.value.length;

    totalcount.innerText = userchar;
    remaincount.innerText = 150 - userchar;

}

characterValue.addEventListener('keyup', () => updateCounter());


const copytext = () => {
        characterValue.select();
        characterValue.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(characterValue.value);
    }
    // <!-- name: Munawar hussain
    // date: 27-12-2022
    // javascript project  -->