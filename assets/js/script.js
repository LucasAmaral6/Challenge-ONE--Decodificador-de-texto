let botaoDeCriptografar = document.getElementById("encrypt-button");
let botaoDeDescriptografar = document.getElementById("decrypt-button");
let botaoDeCopiar = document.getElementById("output-copy-button");

let outputTextElement = document.getElementById('output-text');
let outputCopyButton = document.getElementById('output-copy-button');

function showInitialOutput() {
    let initialOutput = document.querySelector(".content-output-details");
    let hidOutput = document.querySelector(".output-decoded");
    hidOutput.style.display = "none";
    initialOutput.style.display = "block";
    updateCopyButtonVisibility(); // Atualize a visibilidade do botão de cópia
}

function copy() {
    let txtToCopy = outputTextElement.textContent.trim();
    navigator.clipboard.writeText(txtToCopy);
}

function updateCopyButtonVisibility() {
    const isOutputVisible = document.querySelector('.output-decoded').style.display === 'flex';
    outputCopyButton.style.display = isOutputVisible ? 'block' : 'none';
}


function cleanOutputArea() {
    let initialOutput = document.querySelector(".content-output-details");
    initialOutput.style.display = "none";
    updateCopyButtonVisibility(); // Atualize a visibilidade do botão de cópia
}

function getInput() {
    let stringInput = document.querySelector(".content-input-text");
    let string = stringInput.value;
    return string;
}

function addTextOutput() {
    let showOutput = document.querySelector(".output-decoded");
    showOutput.style.display = "flex";
    updateCopyButtonVisibility(); // Atualize a visibilidade do botão de cópia
}

function showOutputText(stringToShow) {
    let tagOutputText = document.querySelector(".output-text");
    tagOutputText.innerHTML = stringToShow;
}

function encrypt(stringToEncrypt) {
    let encryptedString =
        stringToEncrypt
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    cleanOutputArea();
    addTextOutput();
    showOutputText(encryptedString);
    return encryptedString;
}

function decrypt(encryptedString) {
    let decryptedString =
        encryptedString
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    cleanOutputArea();
    addTextOutput();
    showOutputText(decryptedString);
    return decryptedString;
}

botaoDeCriptografar.addEventListener("click", (e) => {
    let frase = getInput();
    if (frase != "") {
        encrypt(frase);
    } else {
        showInitialOutput();
    }
});
botaoDeDescriptografar.addEventListener("click", (e) => {
    let frase = getInput();
    if (frase != "") {
        if (frase.includes("enter") || frase.includes("imes") || frase.includes("ai") || frase.includes("ober") || frase.includes("ufat")) {
            decrypt(frase);
        } else {
            showInitialOutput();
        }
    } else {
        showInitialOutput();
    }
});

botaoDeCopiar.addEventListener("click", copy);

updateCopyButtonVisibility();
