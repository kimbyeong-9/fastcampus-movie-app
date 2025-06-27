import { Component} from './core/heropy'
import TheHeader from './components/theHeader'
import TheFooter from './components/TheFooter'

export default class App extends Component {
    render() {
        const theHeader = new TheHeader().el
        const theFooter = new TheFooter().el
        const routerView = document.createElement('router-view')

        this.el.append(
            theHeader,
            routerView,
            theFooter
        )
    }
}