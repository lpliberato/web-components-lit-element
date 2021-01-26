import { LitElement, html } from 'lit-element';
import CSS from '../styles/card-content-css';
import './heading';
import './subtitle';
import './paragraph';
import './button-primary';
import './card-shape';

class CardContent extends LitElement {

    constructor() {
        super();
        this.title = '';
        this.subtitle = '';
        this.content = '';
        this.buttonLabel = '';
    }

    static get properties() {
        return {
            title: { type: String, attribute: true },
            subtitle: { type: String, attribute: true },
            content: { type: String, attribute: true },
            buttonLabel: { type: String, attribute: true }
        }
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
        <card-shape>
            <heading-sm>${this.title}</heading-sm>
            <subtitle-ds>${this.subtitle}</subtitle-ds>
            <paragraph-ds>${this.content}</paragraph-ds>
            <button-primary @click="${() => this._handleClick()}">${this.buttonLabel}</button-primary>
        </card-shape>
        `;
    }

    _handleClick() {
        this.dispatchEvent(new CustomEvent('buttonClick', { detail: 'are you sure?' }));
    }
}
customElements.define('card-content', CardContent);