import { LitElement, html } from 'lit-element';
import CSS from '../styles/paragraph-css';

export class Paragraph extends LitElement {

    constructor() {
        super();
        this.content = `Paragraph`;
    }

    static get properties() {
        return {
            content: { type: String, attribute: true }
        };
    }

    render() {
        return html`
        ${CSS}
        <p class="paragraph">${this.content}</p>
        `;
    }
}
customElements.define('paragraph-ds', Paragraph);