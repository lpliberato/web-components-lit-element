import { LitElement, html } from 'lit-element';
import CSS from '../styles/paragraph-css';

export class Paragraph extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
        ${CSS}
        <p class="paragraph"><slot></slot></p>
        `;
    }
}
customElements.define('paragraph-ds', Paragraph);