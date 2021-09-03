class SliderCard {
    $container;

    $slideImg;
    $img;

    $boxContent;
    $title;
    $content;
    $numberOfQ;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('box');

        this.$slideImg = document.createElement('div');
        this.$slideImg.classList.add('slide-img');

        this.$img = document.createElement('img');
        this.$img.classList.add('card-image');
        
        this.$boxContent = document.createElement('div');
        this.$boxContent.classList.add('box-content');

        this.$title = document.createElement('div');
        this.$title.classList.add('title');

        this.$content = document.createElement('div');
        this.$content.classList.add('content');

        this.$numberOfQ = document.createElement('div');
        this.$numberOfQ.classList.add('numberOfQ');
    }

    render() {
        this.$slideImg.appendChild(this.$img);

        this.$boxContent.appendChild(this.$title);
        this.$boxContent.appendChild(this.$content);
        this.$boxContent.appendChild(this.$numberOfQ);

        this.$container.appendChild(this.$slideImg);
        this.$container.appendChild(this.$boxContent);
        return this.$container;
    }
}

export {SliderCard};
















