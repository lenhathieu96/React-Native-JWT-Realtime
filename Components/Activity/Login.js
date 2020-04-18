import React,{useEffect} from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

import Login_UI from '../Screen/Login_UI'


const Login= ({navigation})=>{
    useEffect(() => {
       if(!SecureStore.getItemAsync("JWT")){
           navigation.navigate('Dashboard')
       }
    }, [])
    //Login and get JWT
    const _onLogin = (username,password)=>{
        axios.post('http://192.168.1.49:3000/userLogin',{username,password})
        .then(res=>{
            console.log(res.data.token)
            SecureStore.setItemAsync("JWT",res.data.token)
            navigation.navigate('Dashboard')
        })
        .catch(err=>{
            console.log(err.data)
        })
    }
    //Move to sign up screen
    const _onNavigate=()=>{
        navigation.navigate("SignUp")
    }

    return (
        <Login_UI onLogin={_onLogin} onNavigate={_onNavigate}/>
    )
}
export default Login

