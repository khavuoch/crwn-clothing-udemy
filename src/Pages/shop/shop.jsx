import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from "../../Components/CollectionsOverview";
import CollectionPage from "../Collections";

const ShopPage = ({match}) => {
    // console.log('match = ', match.params.collectionId);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;