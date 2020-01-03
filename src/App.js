import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/homepage';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/Header/Header';
import './App.css';
import SignInSignUpPage from "./Pages/SignInSignUpPage";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });

                    console.log(this.state)
                });

            }
            this.setState({currentUser: userAuth});
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
