import { Component } from '../core/heropy'

export default class TheHeader extends Component {
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/'
                    },
                    {
                        name: 'Movie',
                        href: '#/movie?id=tt4520988'
                    },
                    {
                        name: 'About',
                        href: '#/about'
                    },
                ]
            }
        })
        window.addEventListener('popstate', () => {
            this.render()
        })
    }
    render() {
        this.el.innerHTML = /* HTML */ `
         <a
         href="#/" 
         class="logo">
         <span>OMDbAPI</span>.COM
        </a>
        <nav>
            <ul>
                ${this.state.menus.map(menu => {
                    const href = menu.href.split('?')[0]
                    const hash = location.hash.split('?')[0]
                    const isActive = href === hash
                    return /* HTML */ `
                     <li>
                        <a
                        class="${isActive ? 'active' : '' }"
                        href="${menu.href}">
                        ${menu.name}
                        </a>
                     </li>
                    `
                }).join('')}
            </ul>
        </nav>
        <a href="#/about" class="user">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunOSBUstr40Nb00taX3kcGjtEymgr-fa0XQ&s"
            alt="User">
        </a>
        `
    }
}