import React from 'react';
import {Button, Row, Col, Collection, Input} from 'react-materialize';
import Comment from './Comment';
/**
 * Posts
 *
 * @export
 * @class Post
 * @extends {React.Component}
 */
class Post extends React.Component {
    /**
     * Creates an instance of Post.
     * @param {any} props
     * @memberof Post
     */
    constructor(props){
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        };
        /**
         * Referencia o scopo das funções
         */
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
     }

    /**
     * Render
     *
     * @returns
     * @memberof Post
     */
    render(){
        let com = null;
        if(this.state.comments.length > 0){
            com = this.renderComment();
        }
        return (
            <div className="row">
                <h5>{this.props.title}</h5>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Input
                            s={11}
                            label="Escreva seu coment&aacute;rio"
                            value={this.state.newCommentText}
                            onChange={this.handleTextChange}
                            autoComplete="off"
                        />
                        <Col s={1} >
                            <Button
                                floating
                                className={`right flow-text deep-purple lighten-${this.props.referencia}`}
                                waves='light'
                                type='submit'
                                tooltip='Comentar'>+</Button>
                        </Col>
                    </Row>
                </form>
                <Row>
                    <Col s={12} >
                        {com}
                    </Col>
                </Row>
            </div>
        );
    }
    /**
     * Renderiza os comentários
     *
     * @returns
     * @memberof Post
     */
    renderComment(){
       return(
            <Collection>
                {
                    this.state.comments.map((comment, i) => {
                        return <Comment key={i} text={comment.text} referencia={this.props.referencia} />
                    })
                }
            </Collection>
       );
    }
    /**
     * Adiciona o comentário no submit do formulário
     *
     * @param {any} event
     * @memberof Post
     */
    handleSubmit(event) {
        if(this.state.newCommentText.length > 0){
            this.setState({
                comments:[
                    ...this.state.comments,
                    {text: this.state.newCommentText}
                ]
            });
            this.setState({
                newCommentText: ''
            });
        }
        event.preventDefault();
    }
    /**
     * Alteração do texto
     *
     * @param {any} event
     * @memberof Post
     */
    handleTextChange(event){
        this.setState({
            newCommentText: event.target.value
        });
    }
}

export default Post;
