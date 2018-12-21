import React from 'react'
import { render } from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/index.css'
import tux from './images/tux.jpg'

class App extends React.Component {
    constructor( props ) {
        super( props )

        this.state = {
            window_height : window.innerHeight 
        }
    }

    render() {
        return( 
            <div>
                <div className="mg-top-150">
                    <div className="text-center">
                        <img src={ tux } className="tux" style={ { width : '300px' } } />
                    </div>
                    <div style={ { position : 'relative', height : this.state.window_height } }>
                        <div className="grad">
                            <div className="text-center">
                                <h1 className="text-center">Linux Nigeria</h1>
                                <h4>Official page is coming up soon! <br /> <br /> <small>Good with React js? CSS? PHP? Want to help? This site is on <a href="https://github.com/donjajo/linux.ng" target="_blank">GitHub</a></small> </h4>

                                <span>Mail us: lagos [at] linux.ng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render( <App />, document.getElementById( 'root' ) )