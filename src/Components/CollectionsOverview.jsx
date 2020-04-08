import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import './CollectionsOverview.scss';
import CollectionPreview from "./CollectionPreview";
import {selectCollectionsForPreview} from "../redux/shop/ShopSelectors";

const CollectionsOverview = ({ collections }) => (
    <div className='CollectionsOverview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);