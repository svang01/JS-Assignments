let taskManager = (function() {
    let task = []

    function addTask(tasks) {
        task.push(tasks);
    }

    function displayTasks() {
        console.log(task)
    }

    return {
        addTask,
        displayTasks
    };

})();

taskManager.addTask('Eat')
taskManager.addTask('Sleep')
taskManager.addTask('Repeat')
taskManager.displayTasks()
