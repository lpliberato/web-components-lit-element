import { LitElement, html } from 'lit-element';
import CSS from '../styles/heading-css'

export class Heading extends LitElement {

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
        <h1 class="heading"><slot></slot></h1>`;
    }
}

customElements.define('heading-sm', Heading);