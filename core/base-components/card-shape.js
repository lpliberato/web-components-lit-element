import { LitElement, html } from 'lit-element';
import CSS from '../styles/card-shape-css.js'

export class CardShape extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
        ${CSS}
        <div class="card-shape"><slot></slot></div>`;
    }
}

customElements.define('card-shape', CardShape);