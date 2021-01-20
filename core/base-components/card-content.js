import { LitElement, html } from 'lit-element';
import CSS from '../styles/card-content-css';
import { Heading } from './heading';
import { Subtitle } from './subtitle';
import { Paragraph } from './paragraph';
import { ButtonPrimary } from './button-primary';
import { CardShape } from './card-shape';

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
            buttonLabel: { type: String, attribute: true },
            finish: { type: CustomEvent, attribute: true }
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);

        if (name === 'finish') {
            this.dispatchEvent(new CustomEvent(name));
        }
    }

    render() {
        return html`
        ${CSS}
        <card-shape>
            <heading-sm title='${this.title}'></heading-sm>
            <subtitle-ds title='${this.subtitle}'></subtitle-ds>
            <paragraph-ds content='${this.content}'></paragraph-ds>
            <button-primary title='${this.buttonLabel}'></button-primary>
        </card-shape>
        `;
    }
}
customElements.define('card-content', CardContent);