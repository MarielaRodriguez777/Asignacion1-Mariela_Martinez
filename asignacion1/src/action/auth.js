import { firebase, googleAuthProvider } from "../firebase/firebase-config"

export const startGoogleLogin = () => {
    return (dispatch) => {
        
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCred => {
                console.log(userCred)
            })
    }
}