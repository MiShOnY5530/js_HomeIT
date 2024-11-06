class Model {
    constructor(options) {
        this.options = options;
    }

    vote(optionName) {
        if (this.options[optionName] !== undefined) {
            this.options[optionName]++;
        }
    }

    getOptions() {
        return this.options;
    }
}

class View {
    constructor() {
        this.optionsContainer = document.getElementById('options-container');
    }

    render(options, controller) {
        this.optionsContainer.innerHTML = '';

        for (const [optionName, votes] of Object.entries(options)) {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');

            const nameElement = document.createElement('span');
            nameElement.innerText = `${optionName}: ${votes} голосів`;

            const voteButton = document.createElement('button');
            voteButton.innerText = 'Голосувати';
            voteButton.addEventListener('click', () => controller.handleVote(optionName));

            optionElement.appendChild(nameElement);
            optionElement.appendChild(voteButton);

            this.optionsContainer.appendChild(optionElement);
        }
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.render(this.model.getOptions(), this);
    }

    handleVote(optionName) {
        this.model.vote(optionName);
        this.view.render(this.model.getOptions(), this);
    }
}

const initialOptions = {
    'Дикий': 0,
    'Вовкотруб': 0,
    'Засадюк': 0,
};

const model = new Model(initialOptions);
const view = new View();
const controller = new Controller(model, view);