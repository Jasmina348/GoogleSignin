import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import PostData from '../services/PostData'
import GoogleImage from '../images/googleimage.png'

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    signUp = (res, type) => {
        let postData;
        postData = {
            name: res.profileObj.name,
            age:" ",
            gender:" ",
            contact_number:" ",
            password:" ",
            login_method: type,
            email: res.profileObj.email,
            third_party_id:res.profileObj.googleId,
        };
        if (postData) {
            PostData( postData)
            .then((result) => {
                let responseJson = result;
                sessionStorage.setItem('userData', JSON.stringify(responseJson));
                this.setState({ redirect: true })

            })
        }
    }

    render() {
        if (this.state.redirect || sessionStorage.getItem('userData')){
            return( 
                <Redirect to={'/home'}/>
            )
        }
        const googleResponse = (response) => {
            console.log(response);
            // this.signUp(response, 'google');
        }
        return (
            
            <div>
                <GoogleLogin
                render={renderProps => (
                    <button style={buttonStyle} onClick={googleResponse}>signin with google
                    <img src={GoogleImage} style={imageStyle} textAlign='left' alt="googleimage" />
                    </button>
                )}
                    clientId='278774598373-per9rcs5goiep9udlakso893l6v2besn.apps.googleusercontent.com'
                    buttonText="Google Signin"
                    // onFailure={googleResponse}
                    // onSuccess={googleResponse}
                    cookiePolicy={'single_host_origin'}
                    style={buttonStyle}
             />
            </div>
        )
    }
}
const buttonStyle = {
    position: "relative",
    backgroundColor: '#B81F1F',
    color: '#fff',
    width: '279px',
    height: '42px',
    borderRadius: '50px',
    textAlign: "center"
}
const imageStyle = {
    position: "absolute",
    width: '31px',
    height: '27px',
    top: "6px",
    left: "5%"

}
