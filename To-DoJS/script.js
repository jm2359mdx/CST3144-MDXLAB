//Always Select the important elemants from HTML
const form = document.querySelector(".form");//selected the whole form, "." because its a class
const inputBox = document.getElementById("InputBox");//selected the Input field calling through the id
const displayer = document.getElementById("displayer");//selected the displayer 

//adding a Listener fn for the form submit event
form.addEventListener("submit",function(event){
    event.preventDefault()//stops page from refreshing
    const taskText=inputBox.value;//values --> taskText
    if(taskText.trim()==""){//check if the input is empty and giving alert
        alert("Please write something");
        return;// stop running if empty
    }
    const taskItem = document.createElement("p");//creating p elemant
    taskItem.textContent = taskText;//puts the tasks in the new elemant p
    displayer.appendChild(taskItem);//adds p's content into our displayer div
    inputBox.value = "";//ready for the next task


}

);