import React from 'react';
import CollectionItem from "../Components/CollectionItem";
import './Collection.scss'
import {selectCollection} from "../redux/shop/ShopSelectors";
import {connect} from "react-redux";

const CollectionPage = ({ collection }) => {
    // console.log('match in Category = ', match);
    // console.log('collection = ', collection);
    const {title, items } = collection;
    return (
        <div className='CollectionPage'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                        )
                    )
                }
            </div>
        </div>
    )
};

// ownProps is the prop of the component
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);