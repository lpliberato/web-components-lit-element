import { LitElement, html } from 'lit-element';
import CSS from '../styles/subtitle-css';

export class Subtitle extends LitElement {

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
        <h2 class="subtitle"><slot></slot></h2>
        `
    }
}
customElements.define('subtitle-ds', Subtitle);