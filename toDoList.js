function addText() {
    var input = document.getElementById("text").value;
    var List = document.getElementById("List");

    if (input !== "") {     
        var items = document.createElement("li");
        items.textContent = input;

        var del = document.createElement("span");
        del.textContent = "Delete";
        del.addEventListener("click", function (){
            List.removeChild(items);
        });

        items.appendChild(del);
        List.appendChild(items);
        document.getElementById("text").value = "";
    }
    else{
        alert("Enter any data first!!")
    }
}
var addBtn = document.getElementById("add-text");
addBtn.addEventListener("click", addText);

document.getElementById("text").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addText();
    }
});
