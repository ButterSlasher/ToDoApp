const inputText = document.getElementById("textInput");
const submitForm = document.getElementById("submitForm");
const listDiv = document.getElementById("list");

let tasksStorage = localStorage.getItem("Tasks")

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let div = document.createElement("div");
    div.innerHTML = '<input class="check" type="checkbox" name="done"> <p>' + inputText.value + '</p> <button class="xButton" onclick="Delete(this)"><img class="x" src="delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"></button>';
    div.classList.add("task")

    listDiv.append(div);

    inputText.value = "";

    let checkbox = div.querySelector(".check");

    checkbox.addEventListener("change", () => {
        div.classList.toggle("done", checkbox.checked);
    });
});

function Delete(element) {
    element.parentNode.remove();
}