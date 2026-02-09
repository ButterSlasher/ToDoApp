const inputText = document.getElementById("textInput");
const submitForm = document.getElementById("submitForm");
const listDiv = document.getElementById("list");

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let div = document.createElement("div");
    div.innerHTML = inputText.value;
    div.classList.add("task")

    listDiv.append(div);

    inputText.value = "";
});