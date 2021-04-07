import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils' 
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
 
  unsubscribeFromAuth = null

// esta es una suscripcion a firebase, cuando cambia algo en firebase, el componente se actualiza
// cuando se monta el componente se despacha la accion setCurrentUser al store
  componentDidMount () { 
    const { setCurrentUser } = this.props 
    //onAuthStateChanged observa si hay cambios en el estado del sign in 
    //SI HAY un usuario logueado lo escribe en la base de datos o lo devuelve si ya existia
    // ademas disparo una accion, que lleva al store el usuario con la info del snapshot y un id 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({              
              id: snapShot.id,
              ...snapShot.data()
            })          
        })
      } 
      //si NO HAY un usuario logueado,si lo que viene es un null,
      //igual quiero setear mi usuario a null
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
          <Header />
        <Switch> {/* cuando uso switch solo cargo el primer componente que encuentro y mas nada */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={()=> 
              this.props.currentUser ? (
              <Redirect to ='/' />
              ) : (
                <SignInAndSignUpPage />
              ) 
            } 
          />
        </Switch>     
        </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
