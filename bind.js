// BIND IN JAVASCRPT

class React {
    constructor() {
        this.marvel = 'thor';
        this.dc = 'superman';

        // requirement

        document.querySelector('button').addEventListener('click', this.click.bind(this));
    }

    click() {
        console.log(`hello ${this.marvel}`);
    }
}

const app = new React();