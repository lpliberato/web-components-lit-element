import { LitElement, html } from 'lit-element';
import CSS from '../styles/button-primary-css'

export class ButtonPrimary extends LitElement {

    static get properties() {
        return {
            title: { type: String, attribute: true }
        };
    }

    constructor() {
        super();
        this.title = 'Button Label';
    }

    connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        return html`
        ${CSS}
        <button id='btn' class='btn-primary'>${this.title}</button>`;
    }
}

customElements.define('button-primary', ButtonPrimary);