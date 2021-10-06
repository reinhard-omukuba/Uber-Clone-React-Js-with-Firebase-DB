import React, {useEffect} from 'react';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {auth, mydDb} from '../firebase'
import {useHistory} from 'react-router-dom';

import Navbar from './Navbar'
import chapchap from '../images/chapchap.png'
import uberxl from '../images/xl.jpeg'
import ubergo from '../images/go.jpeg'

import GoogleMapReact  from 'google-map-react'



const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Dashboard() {

    let history = useHistory();
    
    //getting currently logged in user
    auth.onAuthStateChanged(function(user) {
        if (user) {
          //logged in user's Id
          const loggedInId = user.uid;
          console.log(loggedInId);
          
          //getting Logged in user's documents
            mydDb.collection("Users").where("userId", "==", loggedInId ).onSnapshot((querySnapshot) => {

                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());

                    const userName = doc.data().fullname;                  
                    
                    console.log(userName);
                    
                    
                    //const numbers = this.props.numbers
                    

                    
        
                    
                });
            });


        } else {
          // No user is signed in.

          history.push("/");
        }
      });

    
    //read data
    // mydDb.collection("Users").onSnapshot((querySnapshot) => {

    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());

            
    //     });
    // });


    //maps
    const defaultProps = {
        center: {
          lat: 1.2864,
          lng: 37.8172,
        },
        zoom: 10,
    };

    
    const googleApiKey = "AIzaSyBieReqzrtS_xfjxEhdkOo-y9bl0GMJl0A";


    //maps end
    

    return (
        <div>
            <Navbar/>
            <div className="hero">

                <div
                    className="position-relative"
                    style={{ height: "100vh", width: "100%" }}
                    >
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: googleApiKey }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                    </GoogleMapReact>
                    
                </div>

                <div className="requestContainer"> 

                    <div className="requestTopBar">

                        <div className="requestIndicators">
                            <div className="dots"></div>
                            <hr className="lineSep"></hr>
                            <div className="dots"></div>
                        </div>

                        <div className="requestInputs">
                            <input type="text" className="inputLocation" placeholder="Where from?"></input>
                            <input type="text" className="inputLocation2"placeholder="Where to?"></input>
                        </div>
    
                    </div>

                    {/* Chap chap */}
                    <div className="leftReqCont">
                        <img src={chapchap} className="vehicleImg" />
                        <div className="leftInfoCont">
                            <h6>Uber Chap Chap</h6>
                            <p>In 0 minutes. </p>
                        </div>
                        <p className="leftPricing">KES. 350</p>
                    </div>

                    {/* Uber go */}

                    <div className="leftReqCont">
                        <img src={ubergo} className="vehicleImg" />
                        <div className="leftInfoCont">
                            <h6>Uber Go</h6>
                            <p>In 0 minutes. </p>
                        </div>
                        <p className="leftPricing">KES. 450</p>
                    </div>

                    {/* Uber XL */}

                    <div className="leftReqCont">
                        <img src={uberxl} className="vehicleImg" />
                        <div className="leftInfoCont">
                            <h6>Uber XL</h6>
                            <p>In 0 minutes. </p>
                        </div>
                        <p className="leftPricing">KES. 750</p>
                    </div>



                    <button className="requestRide">Request </button>


                </div>



            </div>
        </div>
    );
}

export default Dashboard;