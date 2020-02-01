import React from 'react';
import {connect} from 'react-redux';
import CustomButton from "./CustomButton";
import {addItem} from "../redux/cart/CartActions";
import './CollectionItem.scss';

// We're using CollectionItem in CollectionPreview
const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='CollectionItem'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButton>
        </div>
    )
};

const mapDisatchToProps = dispatch => ({
    // addItem prop     // get the item then dispatch the addItem action creater
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDisatchToProps)(CollectionItem);