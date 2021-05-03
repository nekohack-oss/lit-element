import { LitElement, html, property, css } from 'lit-element'

class HelloWorld extends LitElement {
  @property({ type: String })
  private world: String = 'World'

  constructor() {
    super()
  }

  static styles = [
    css`
      .container {
        position: relative;
        min-width: 600px;
        min-height: 400px;
      }
    `
  ]

  render() {
    return html`
      <div class="container">
        Hello ${this.world}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-hello-world': HelloWorld
  }
}

customElements.define('x-hello-world', HelloWorld)
