import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/homepage';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/Header/Header';
import './App.css';
import SignInSignUpPage from "./Pages/SignInSignUpPage";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage} /> {/*exact is basically exact={true} */}
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
