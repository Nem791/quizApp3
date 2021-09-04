class NavigationList {
    $container;
    $mainNavigationList;
    $explore;
    $myQuizzes;
    $profile;
    $classes;
    $divider;
    $memes;
    $collections;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('main-navigation-list-wrapper');

        this.$mainNavigationList = document.createElement('ul');
        this.$mainNavigationList.classList.add('main-navigation-list');

        this.$explore = document.createElement('li');
        this.$explore.id = 'explore';
        this.$explore.innerHTML = `<i aria-hidden="true" class="fas fa-map-marked-alt"></i><span
        role="link" tabindex="0">Explore</span>`;

        this.$myQuizzes = document.createElement('li');
        this.$myQuizzes.id = 'my-quizzes';
        this.$myQuizzes.innerHTML = `<i class="fas fa-book-reader"></i><span role="link" tabindex="0">My
        library</span>`;

        this.$profile = document.createElement('li');
        this.$profile.id = 'profile';
        this.$profile.innerHTML = `<i class="fas fa-user"></i><span role="link"
        tabindex="0">Profile</span>`;

        this.$classes = document.createElement('li');
        this.$classes.id = 'classes';
        this.$classes.innerHTML = `<i class="fas fa-book"></i><span role="link"
        tabindex="0">Classes</span>`;

        this.$divider = document.createElement('li');
        this.$divider.classList.add('divider');

        this.$memes = document.createElement('li');
        this.$memes.id = 'memes';
        this.$memes.innerHTML = `<i class="fas fa-person-booth"></i><span role="link" tabindex="0"
        aria-hidden="false">Memes</span>`;

        this.$collections = document.createElement('li');
        this.$collections.id = 'collections';
        this.$collections.innerHTML = `<i class="fas fa-bookmark"></i><span role="link" tabindex="0"
        aria-hidden="false">Collections</span>`;
    }

    render() {
        this.$mainNavigationList.appendChild(this.$explore);
        this.$mainNavigationList.appendChild(this.$myQuizzes);
        this.$mainNavigationList.appendChild(this.$profile);
        this.$mainNavigationList.appendChild(this.$classes);
        this.$mainNavigationList.appendChild(this.$divider);
        this.$mainNavigationList.appendChild(this.$memes);
        this.$mainNavigationList.appendChild(this.$collections);

        this.$container.appendChild(this.$mainNavigationList);
        return this.$container;
    }
}

export {NavigationList};