class Header{
    $container;
    $userInfo;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('header');

        this.$userInfo = document.createElement('div');
        this.$userInfo.classList.add('user-info');

    }

    render() {
        this.$container.appendChild(this.$userInfo);
        return this.$container;
    }
}
export {Header}