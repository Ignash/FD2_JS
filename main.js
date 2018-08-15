class YouName extends HTMLElement {
    static get observedAttributes() {return ['name', 'age']; }
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'}),
            p1 = document.createElement('p'),
            style =document.createElement('style');
            style.innerHTML = 'p{font-size:75px}';
        shadow.appendChild(style);    
        shadow.appendChild(p1);
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        this.shadowRoot.lastChild.innerText = `${this.getAttribute('name')} ${this.getAttribute('age')}`
    }
}
customElements.define('you-name', YouName);