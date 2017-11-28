import React from 'react';
import {CollectionItem} from 'react-materialize';
/**
 * Comentários
 *
 * @export
 * @class Comment
 * @extends {React.Component}
 */
class Comment extends React.Component {
    /**
     * Render
     *
     * @returns
     * @memberof Comment
     */
    render() {
        return (
            <CollectionItem
                href='#'
                className="green-text text-darken-2">
                {this.props.referencia}&#41; {this.props.text}
            </CollectionItem>
        );
    }
};

export default Comment;
