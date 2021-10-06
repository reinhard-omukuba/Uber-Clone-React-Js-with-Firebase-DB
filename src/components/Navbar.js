import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import firebase from '../firebase'
import {auth} from '../firebase'


function Navbar() {

    let history = useHistory();

    function signOutUser(e){

        auth.signOut().then(() => {
            // Sign-out successful. redirect user to login page
            history.push("/");
            
          }).catch((error) => {
            // An error happened.
          });

    }
  

    return (
        <div className="navBar">

            <p className="logo">Uber</p>

            <div className="menuBar">
                <Link to="/dashboard" className="links">Home</Link>          
                <Link to="/history" className="links">My History</Link>
                <Link to="/recharge" className="links">Top Up Account</Link>
                <Link to="/account" className="links">My Account</Link>
                <button className="loggedUseer"  onClick={signOutUser}>Logout</button>

                
            </div>

        </div>
    );

}


export default Navbar;