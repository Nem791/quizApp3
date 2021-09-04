import { Option } from "./options.js";

class QuestionCard {
    $container;

    $questionHeader;
    $questionNum;
    $dotCircle;

    $questionView;
    $query;
    $queryText;
    $questionDivider;
    $questionOptions;

    constructor () {
        this.$container = document.createElement('div');
        this.$container.classList.add('question');

        this.$questionHeader = document.createElement('div');
        this.$questionHeader.classList.add('question-header');

        this.$questionNum = document.createElement('div');
        this.$questionNum.classList.add('question-num');

        this.$dotCircle = document.createElement('i');
        this.$dotCircle.classList.add('far', 'fa-dot-circle');

        this.$questionView = document.createElement('div');
        this.$questionView.classList.add('question-view');

        this.$query = document.createElement('div');
        this.$query.classList.add('query');

        this.$queryText = document.createElement('div');
        this.$queryText.classList.add('query-text');

        this.$questionDivider = document.createElement('div');
        this.$questionDivider.classList.add('question-divider');

        this.$questionOptions = document.createElement('div');
        this.$questionOptions.classList.add('question-options');
    }

    render () {
        this.$questionNum.appendChild(this.$dotCircle);
        this.$questionHeader.appendChild(this.$questionNum);

        this.$query.appendChild(this.$queryText);
        for (let i = 0; i < 4; i++) {
            const option = new Option();
            this.$questionOptions.appendChild(option.render());
        }
        this.$questionView.appendChild(this.$query);
        this.$questionView.appendChild(this.$questionDivider);
        this.$questionView.appendChild(this.$questionOptions);

        this.$container.appendChild(this.$questionHeader);
        this.$container.appendChild(this.$questionView);
        return this.$container;
    }
}

export {QuestionCard};