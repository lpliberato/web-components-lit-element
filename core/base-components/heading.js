import { LitElement, html } from 'lit-element';
import CSS from '../styles/heading-css'

export class Heading extends LitElement {

    constructor() {
        super();
        this.title = 'Heading SM';
    }

    static get properties() {
        return {
            title: { type: String, attribute: true }
        };
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
        <h1 class="heading">${this.title}</h1>`;
    }
}

customElements.define('heading-sm', Heading);