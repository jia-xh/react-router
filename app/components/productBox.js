import React from 'react'
import {Link} from 'react-router'


class App extends React.Component {
    constructor(context) {
        super(context)
    }

    render() {

        let page = null
        let configure=null
        let home=null
        let pathname = this.props.location.pathname;
        console.log("===" + pathname)
        if (pathname == '/configure') {
            page = 'configure';
        } else if (pathname == '/home') {
            page = 'home';
        }

        React.Children.map(this.props.children, (child) => {
            console.log(child)
            if (child.type.name === 'configure') {
                console.log('configure')
                configure = React.cloneElement(child);
            } else if (child.type.name === 'home') {
                console.log('home')
                home = React.cloneElement(child);
            }
        });
        return <div>
            <div>
                <ul role="nav">
                    <li><Link to="/configure" activeStyle={{color: 'red'}}>configure</Link></li>
                    <li><Link to="/home" activeStyle={{color: 'red'}}>home</Link></li>
                </ul>
            </div>

            {{
                'configure': (
                    configure
                ),
                'home': (
                    home
                ),
            }[page]}
        </div>
    }
}

export default App;