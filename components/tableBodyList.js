class tableBodyList {
    $container;
    $numberCol;
    $usernameCol;
    $nameWrapper;
    $scoreCol;
    $accuracyCol;
    $accuracyLabel;
    $spaceCol;
    $timeCol;
    $timeBox;

    constructor() {
        this.$container = document.createElement('tr');
        this.$container.classList.add('table-body-list');

        this.$numberCol = document.createElement('td');
        this.$numberCol.classList.add('number', 'col-1');

        this.$usernameCol = document.createElement('td');
        this.$usernameCol.classList.add('username', 'col-2');

        this.$nameWrapper = document.createElement('div');
        this.$nameWrapper.classList.add('name-wrapper');

        this.$scoreCol = document.createElement('td');
        this.$scoreCol.classList.add('score', 'col-3');

        this.$accuracyCol = document.createElement('td');
        this.$accuracyCol.classList.add('accuracy', 'col-4');

        this.$accuracyLabel = document.createElement('span');
        this.$accuracyLabel.classList.add('accuracy-label');

        this.$spaceCol = document.createElement('td');
        this.$spaceCol.classList.add('groups', 'col-5');

        this.$timeCol = document.createElement('td');
        this.$timeCol.classList.add('groups', 'col-6');

        this.$timeBox = document.createElement('td');
        this.$timeBox.classList.add('time-box');
    }

    render () {
        this.$usernameCol.appendChild(this.$nameWrapper);
        this.$accuracyCol.appendChild(this.$accuracyLabel);
        this.$timeCol.appendChild(this.$timeBox);

        this.$container.appendChild(this.$numberCol);
        this.$container.appendChild(this.$usernameCol);
        this.$container.appendChild(this.$scoreCol);
        this.$container.appendChild(this.$accuracyCol);
        this.$container.appendChild(this.$spaceCol);
        this.$container.appendChild(this.$timeCol);
        return this.$container;
    }
}
export {tableBodyList};