import { Component } from '../core/heropy'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }
    render() {
        const { github, repository } = aboutStore.state
        this.el.innerHTML = /* HTML */ `
         <div>
            <a href="${repository}">
                GITHUB Repository
            </a>
         </div>
         <div>
            <a href="${github}">
                ${new Date().getFullYear()}
                by kimbyeong-9
            </a>
         </div>
        `
    }
}