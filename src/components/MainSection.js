import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MainSection extends Component {

    render() {
        if (!this.props.image) {
            return <span>No Images</span>
        }

        const {url, name, description, user, views} = this.props.image;

        return (

            <div>
                <img
                    src={url}
                    alt={name}
                    style={styles.image}
                />

                <p>
                    {description}
                </p>
                <p>
                    {views}
                </p>
                <span>
                    {user}
                </span>
                <p>
                    <button onClick={this.props.deleteSection.bind(this)}>[x]</button>
                </p>
            </div>

        )
    }
}

MainSection.propTypes = {
    image: PropTypes.object.isRequired
};


const styles = {
    container: {
        height: '100%',
        width: '50%',
        position: 'fixed',
        overflowX: 'hidden',
        paddingTop: '20px',
        left: 0,
        top: 0
    },
    image: {
        width: '50%',
        height: '50%'
    },
};


export default MainSection;

