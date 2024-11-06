class TaskModel {
    constructor() {
        this.tasks = [];
        this.onTaskListChanged = null;
    }

    addTask(taskText) {
        const task = { id: Date.now(), text: taskText };
        this.tasks.push(task);
        this._commit();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this._commit();
    }

    editTask(id, newText) {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        );
        this._commit();
    }

    bindTaskListChanged(callback) {
        this.onTaskListChanged = callback;
    }

    _commit() {
        this.onTaskListChanged(this.tasks);
    }
}

class TaskView {
    constructor() {
        this.app = this.getElement('body');
        this.taskList = this.getElement('#taskList');
        this.taskForm = this.getElement('#taskForm');
        this.taskInput = this.getElement('#taskInput');
    }

    displayTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = this.createElement('li');
            li.id = task.id;

            const taskText = this.createElement('span');
            taskText.contentEditable = true;
            taskText.classList.add('editable');
            taskText.textContent = task.text;

            const deleteButton = this.createElement('button', 'Видалити');
            li.append(taskText, deleteButton);

            this.taskList.append(li);
        });
    }

    get _taskInputValue() {
        return this.taskInput.value;
    }

    _resetInput() {
        this.taskInput.value = '';
    }

    bindAddTask(handler) {
        this.taskForm.addEventListener('submit', event => {
            event.preventDefault();
            if (this._taskInputValue) {
                handler(this._taskInputValue);
                this._resetInput();
            }
        });
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }

    bindEditTask(handler) {
        this.taskList.addEventListener('focusout', event => {
            if (event.target.classList.contains('editable')) {
                const id = parseInt(event.target.parentElement.id);
                handler(id, event.target.textContent);
            }
        });
    }

    createElement(tag, textContent = '') {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }
}

class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindTaskListChanged(this.onTaskListChanged);
        this.view.bindAddTask(this.handleAddTask);
        this.view.bindDeleteTask(this.handleDeleteTask);
        this.view.bindEditTask(this.handleEditTask);

        this.onTaskListChanged(this.model.tasks);
    }

    onTaskListChanged = tasks => {
        this.view.displayTasks(tasks);
    };

    handleAddTask = taskText => {
        this.model.addTask(taskText);
    };

    handleDeleteTask = id => {
        this.model.deleteTask(id);
    };

    handleEditTask = (id, newText) => {
        this.model.editTask(id, newText);
    };
}

const app = new TaskController(new TaskModel(), new TaskView());я