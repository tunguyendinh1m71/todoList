window.onload = function()
{
    let input = document.getElementById("input");
    let del = document.getElementById("Delete");
    let todoList = document.getElementById("tasks");


    function Adding()
    {
        const listItem = document.createElement("div");
        listItem.id = "task";
        const item = input.value;

        if (item == "")
        {
            alert("Please enter a todo item.");
            return;
        }
        else
        {
            localStorage.setItem("tasks", input.value);
            input.value = "";
        }

        const todoText = document.createTextNode(item);
        todoText.id = "work";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        checkBox.addEventListener("change", function()
        {
            if (checkBox.checked)
            {
                checkBox.style.textDecoration = "line-through";
            }
            else
            {
                checkBox.style.textDecoration = "none";
            }
        })

        del.addEventListener("click", function()
        {
            listItem.remove();
        })

        listItem.appendChild(checkBox);
        listItem.appendChild(todoText);

        todoList.appendChild(listItem);
    }

    window.addEventListener("keydown", function(event)
    {
        if (event.key == "Enter")
        {
            Adding();
        }
        
    });


}
