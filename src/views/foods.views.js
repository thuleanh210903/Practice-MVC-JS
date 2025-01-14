import Header from "./layouts/header";

class FoodsView {
    constructor() {
        this.app = document.querySelector('#root');
        const main = document.createElement("main");
        main.innerHTML += Header();
        this.app.appendChild(main)
        
    }
}
export default FoodsView