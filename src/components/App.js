import React from 'react';
import {Row, Col, CardPanel} from 'react-materialize';
import Post from './Post';
/**
 * App default
 *
 * @export
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
    /**
     * Render
     *
     * @returns
     * @memberof App
     */
    render(){
        return(
            <Row>
                <h1 className="text-flow">Coment&aacute;rios</h1>
                <Row>
                    <Col s={12} m={12} l={6}>
                        <CardPanel className="grey lighten-3 black-text">
                            <Post title="Primeiro" referencia="1"/>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={12} l={6}>
                        <CardPanel className="grey lighten-3 black-text">
                            <Post title="Segundo" referencia="2"/>
                        </CardPanel>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={12} l={6}>
                        <CardPanel className="grey lighten-3 black-text">
                            <Post title="Terceiro" referencia="3"/>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={12} l={6}>
                        <CardPanel className="grey lighten-3 black-text">
                            <Post title="Quarto" referencia="4"/>
                        </CardPanel>
                    </Col>
                </Row>
            </Row>
        );
    }
}

export default App;
