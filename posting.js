function getCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return now.toLocaleDateString('en-US', options);
}

function postDoubt() {
    const nameInput = document.getElementById("name");
    const doubtInput = document.getElementById("doubt");

    const name = nameInput.value.trim();
    const doubt = doubtInput.value.trim();

    if (name && doubt) {
        const doubtList = document.getElementById("doubtList");
        const li = document.createElement("li");

        const doubtInfo = document.createElement("div");
        doubtInfo.textContent = `${name} - ${getCurrentDateTime()}`;
        doubtInfo.classList.add("doubt-info");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            doubtList.removeChild(li);
        };

        li.textContent = doubt;
        li.appendChild(doubtInfo);
        li.appendChild(deleteBtn);

        doubtList.appendChild(li);

        // Clear the form
        nameInput.value = "";
        doubtInput.value = "";
    } else {
        alert("Please fill in both name and doubt fields.");
    }
}