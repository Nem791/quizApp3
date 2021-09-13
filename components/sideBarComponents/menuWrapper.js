class MenuWrapper {
    $container;

    $createBtn;

    $plusCircle;
    $createBtnLabel;
    $caretDown;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('create-menu-wrapper');

        this.$createBtn = document.createElement('button');
        this.$createBtn.classList.add('create-btn');
        this.$createBtn.addEventListener('click', () => { location.href = './create.html'; })

        this.$plusCircle = document.createElement('i');
        this.$plusCircle.classList.add('far', 'fa-plus-circle');

        this.$createBtnLabel = document.createElement('span');
        this.$createBtnLabel.classList.add('create-btn-label');
        this.$createBtnLabel.innerText = 'Create';

        this.$caretDown = document.createElement('i');
        this.$caretDown.classList.add('fas', 'fa-caret-down');
    }

    render() {
        this.$createBtn.appendChild(this.$plusCircle);
        this.$createBtn.appendChild(this.$createBtnLabel);
        this.$createBtn.appendChild(this.$caretDown);

        this.$container.appendChild(this.$createBtn);
        return this.$container;
    }
}

export {MenuWrapper};