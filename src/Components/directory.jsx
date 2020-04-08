import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../redux/directory/DirectorySelectors';
import MenuItem from './menu-item';
import './directory.scss'

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/> // ...otherSectionProps is short of: title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);