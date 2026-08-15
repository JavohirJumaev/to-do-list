const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    const taskText = taskInput.value; //создаём переменную в котором сохраним ввод пользователя

    if (taskText === "") {
        return;
    } // проверка текста: не является ли он пустым

    const li = document.createElement("li"); // сохраняем созданный элемент внутри переменной

    li.textContent = taskText; // созданный li будет тем что получено в taskText

    taskList.appendChild(li); // в список добавляем li, то есть значение

    taskInput.value = "";

}