import { LitElement, html } from 'lit-element';
import CSS from '../styles/button-primary-css'

export class ButtonPrimary extends LitElement {

    constructor() {
        super();
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
        <button id='btn' class='btn-primary'><slot></slot></button>`;
    }
}

customElements.define('button-primary', ButtonPrimary);