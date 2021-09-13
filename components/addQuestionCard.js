import { Option } from "./optionOfCreate.js";

class Question {
    $container;

    $questionHeader;
    $title;
    $btnDelete;

    $body;

    $bodyFull;
    $titleBody;
    $divider;
    $dividerText;
    $answer;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('question');

        this.$questionHeader = document.createElement('div');
        this.$questionHeader.classList.add('question-header');

        this.$title = document.createElement('div');
        this.$title.classList.add('title');

        this.$btnDelete = document.createElement('div');
        this.$btnDelete.classList.add('btn-delete');
        this.$btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
        this.$btnDelete.addEventListener('click', () => {this.$container.remove()});

        this.$body = document.createElement('div');
        this.$body.classList.add('body');

        this.$bodyFull = document.createElement('div');
        this.$bodyFull.classList.add('body-full');

        this.$titleBody = document.createElement('div');
        this.$titleBody.classList.add('title', 'question-input');

        this.$divider = document.createElement('div');
        this.$divider.classList.add('divider');

        this.$dividerText = document.createElement('div');
        this.$dividerText.classList.add('divider-text');
        this.$dividerText.innerText = 'answer choices';

        this.$answer = document.createElement('div');
        this.$answer.classList.add('answer');
    }

    render() {
        this.$questionHeader.appendChild(this.$title);
        this.$questionHeader.appendChild(this.$btnDelete);

        this.$divider.appendChild(this.$dividerText);

        for (let i = 0; i < 4; i++) {
            const option = new Option();
            this.$answer.appendChild(option.render());
        }

        this.$bodyFull.appendChild(this.$titleBody);
        this.$bodyFull.appendChild(this.$divider);
        this.$bodyFull.appendChild(this.$answer);

        this.$body.appendChild(this.$bodyFull);

        this.$container.appendChild(this.$questionHeader);
        this.$container.appendChild(this.$body);
        return this.$container;

    }

}
export {Question};




















