import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EachItem from "./EachItem";

export class Suggestion extends Component {
    render() {
        return (
            <div style={styles.container}>
                {this.props.images.map((image) =>
                <EachItem key={image.id} item={image} itemSelected={this.props.selectNewImage}/>
                )}
            </div>
        );
    }

}

Suggestion.propTypes = {
    images: PropTypes.array.isRequired
};

const styles = {
    container: {
        height: '100%',
        width: '40%',
        position: 'fixed',
        overflowX: 'hidden',
        paddingTop: '20px',
        right: 0,
        top: 0
    }
};
export default Suggestion;