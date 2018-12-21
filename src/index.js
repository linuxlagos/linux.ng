import React from 'react'
import { render } from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/index.css'
import tux from './images/tux.jpg'

class App extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return( 
            <div>
                <div className="mg-top-150">
                    <div className="text-center">
                        <img src={ tux } className="tux" style={ { width : '300px' } } />
                    </div>
                    <div style={ { position : 'relative', height : window.innerHeight } }>
                        <div className="grad">
                            <div className="text-center">
                                <h1 className="text-center">Linux Nigeria</h1>
                                <h4>Official page is coming up soon! <br /> <br /> <small>Good with React js? CSS? PHP? Want to help? This site is on <a href="https://github.com/donjajo/linux.ng" target="_blank">GitHub</a></small> </h4>

                                <span>Mail us: lagos [at] linux.ng</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href="https://join.slack.com/t/linuxlagos/shared_invite/enQtNDI0Nzg0NTAzMzgyLTIwMTAzNzA3Y2JjYzQzOTMzZDQ5Njk1MWRhZDkxOTNlYWNlYjVhYjQ0OGUxYTkxZGY0Njg2ZTQ2MTFhODllMTg">
                        <span className="icon-slack"></span>
                    </a>

                    <a href="https://twitter.com/linuxlagos">
                        <span className="icon-twitter"></span>
                    </a>
                </div>
            </div>
        )
    }
}

render( <App />, document.getElementById( 'root' ) )