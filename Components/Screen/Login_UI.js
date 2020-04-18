import React,{useState, cloneElement} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity,Text,StyleSheet,Image,View,TextInput,KeyboardAvoidingView,ImageBackground,Dimensions} from 'react-native'
import { Icon } from 'react-native-elements'

import Background from '../Image/Background.jpg'
import Logo from '../Image/Logo.png'




export default Login_UI = (props)=>{

    const {onLogin,onNavigate} = props

    const [showPassword,setShowPassword] = useState(false)
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()

    return(
        // background
        <ImageBackground source = {Background} style={styles.container} >
            <Image 
                source = {Logo}
                style= {styles.image}
            />
            
            <KeyboardAvoidingView behavior="padding" style={{flexDirection:'column',flex:0.5,padding:5,marginTop:20}}>
                <Text style = {styles.title}>Tên Đăng Nhập: </Text>
                <View style = {styles.input_container}>
                    <TextInput 
                        style = {styles.Input}
                        placeholderTextColor="black"
                        value ={Email}
                        onChangeText={(text)=>setEmail(text)}            
                    />
                    <Icon
                        name='user'
                        type='font-awesome'
                        size={18}
                        color='#0388fc'
                    />
                </View>
                <Text style={[styles.title,{marginTop:20}]}>Mật Khẩu: </Text>
                <View style = {styles.input_container}>
                   
                    <TextInput 
                        style = {styles.Input}s
                        placeholderTextColor="black"
                        secureTextEntry={!showPassword?true:false}
                        value ={Password}
                        onChangeText={(text)=>setPassword(text)}              
                    />
                    <Icon
                        name='eye'
                        type='font-awesome'
                        size={18}
                        color='#0388fc'
                        onPress={()=>setShowPassword(!showPassword)}
                    />    
                </View>

                {/*Button Login*/}
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{
                        onLogin(Email,Password)
                        setEmail('')
                        setPassword('')
                    }}
                >         
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        color="white"
                        size = {32}
                    />
                </TouchableOpacity>

               
                
            </KeyboardAvoidingView>

            <TouchableOpacity style={{flexDirection:'row',paddig:10,alignSelf:'center',flex:0.1}}
                            onPress={()=>onNavigate()}        
            >
                <Text style={{fontSize:18,padding:5}}>Chưa có tài khoản ?</Text>
                <Text style={styles.title}>Đăng Ký</Text>
            </TouchableOpacity>
        </ImageBackground> 
    )
}

Login_UI.propTypes = {
    onLogin: PropTypes.func,
    onNavigate:PropTypes.func
};


const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        padding:10,
        margin:5,
        
    },
    image:{
        flex:0.4,
        alignSelf:'center',
    },    
    input_container:{
        borderBottomWidth:0.5,
        flexDirection:'row',
        marginTop:5
    },
    Input:{
        padding:5,
        fontSize:16,
        flex:0.9,
    },
    button:{
        padding:15,
        backgroundColor:'#0388fc',
        alignItems:'center',   
        marginTop:20,
        borderRadius:30,
        alignSelf:"center",
        width:250
    },
    title:{
        fontSize:18,
        color:"#0388fc",
        padding:5
    }
    
})