import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import {selectCurrentUser} from "../../redux/user/UserSelectors";
import {selectCartHidden} from "../../redux/cart/CartSelectors";
import {createStructuredSelector} from "reselect";

const Header = ({ currentUser, hidden }) => (
    <div className='Header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
);

// // VERSION 1
// const mapStateToProps = ({user: { currentUser}, cart: { hidden }}) => ({
//     currentUser,
//     hidden
// });

// // VERSION 2
// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state), // pass in the whole reducer state
//     hidden: selectCartHidden(state) // pass in the whole reducer state
// });

// VERSION 3
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);