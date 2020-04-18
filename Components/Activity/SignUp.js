import React,{useState} from 'react';
import SignUp_UI from '../Screen/SignUp_UI';
import axios from 'axios';




export default  function SignUp({navigation}) {

    const [emailError, setemailError] = useState()
    const [passwordError, setpasswordError] = useState()
    const [usernameError, setusernameError] = useState()
    const [phoneError, setphoneError] = useState()
    

    const _onSignUp = (email,phone, username,password)=>{
       if(_validate(email,phone,username,password)){
           let user={
               email,
               phone,
               username,
               password
           }
           console.log(user)
          axios.post('http://192.168.1.49:3000/SignUp',user)
          .then(()=>alert('thanh cong'))
          .catch(()=>alert('that bai'))
       }
       
    }
    
    const _onNavigate=()=>{
        navigation.navigate("Login")
    }

    const _validate = (email,phone,username,password)=>{
        // console.log(email,phone,username,password)
        if(email===''){
            setemailError('Không được để trống')
            return false
        }
        setemailError('')
        if(phone===''){
            setphoneError('Không được để trống')
            return false
        }
        setphoneError('')
        if(username===''){
            setusernameError('Không được để trống')
            return false
        }
        setusernameError('')
        if(password===''){
            setpasswordError('Không được để trống')
            return false
        }
        setpasswordError('')
        return true
    }

    return (
        <SignUp_UI  onSignUp ={_onSignUp} 
                    onNavigate={_onNavigate}
                    emailError={emailError}
                    passwordError={passwordError}
                    usernameError={usernameError}
                    phoneError={phoneError}
        />
    );
}

