import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class EachItem extends Component {

    render() {
        // this.props.items  = {url: 'someurl', name; 'somename', id: 'someid', user: 'someuser', views: 'someviews' }
        const {url, name, id, user, views} = this.props.item;

        return (

            <div>
                <img
                    src={url}
                    alt={name}
                    style={styles.image}
                    onClick={this.props.itemSelected.bind
                    (this, id)}
                />

                <p>
                     {name}

                </p>
                <p>
                    {user} {views}
                </p>

            </div>
        )

    }
}
EachItem.propTypes = {
    item: PropTypes.object.isRequired
};


const styles = {
    image: {
        flex: 1,
        width: 350,
        height: 150
    },
};


export default EachItem;