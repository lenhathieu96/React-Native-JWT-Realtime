import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Background from '../Image/Background.jpg';

export default SignUp_UI = (props) => {

    const {onSignUp, onNavigate,emailError,passwordError,usernameError,phoneError } = props

    const [showPassword, setShowPassword] = useState(false)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Username, setUsername] = useState('')
    const [Phone,setPhone] = useState('')

    return (

        <ImageBackground source={Background} style={{flex:1}}>
            <ScrollView style={styles.container}>
                <Text style={{ flex: 0.1, fontSize: 32, fontWeight: 'bold', alignSelf: 'center', padding: 10 }}>Đăng Ký</Text>

                <KeyboardAvoidingView behavior="padding" style={{ flexDirection: 'column', flex: 1, padding: 5}}>
                    <Text style={[styles.title]}>Email: </Text>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.Input} s
                            placeholderTextColor="black"
                            keyboardType="email-address"
                            value={Email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Icon
                            name='envelope'
                            type='font-awesome'
                            size={18}
                            color='#0388fc'
                        />
                    </View>
                    <Text style={[styles.error]}>{emailError}</Text>

                    <Text style={[styles.title]}>Số Điện Thoại: </Text>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.Input} s
                            placeholderTextColor="black"
                            keyboardType="phone-pad"
                            value={Phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                        <Icon
                            name='phone'
                            type='font-awesome'
                            size={18}
                            color='#0388fc'
                        />
                    </View>
                    <Text style={[styles.error]}>{phoneError}</Text>

                    <Text style={[styles.title]}>Tên Đăng Nhập: </Text>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.Input}
                            placeholderTextColor="black"
                            value={Username}
                            onChangeText={(text) => setUsername(text)}
                        />
                        <Icon
                            name='user'
                            type='font-awesome'
                            size={18}
                            color='#0388fc'
                        />
                    </View>
                    <Text style={[styles.error]}>{usernameError}</Text>


                    <Text style={[styles.title]}>Mật Khẩu: </Text>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.Input} s
                            placeholderTextColor="black"
                            secureTextEntry={!showPassword ? true : false}
                            value={Password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Icon
                            name='eye'
                            type='font-awesome'
                            size={18}
                            color='#0388fc'
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    </View>
                    <Text style={[styles.error]}>{passwordError}</Text>


                    {/*Button SignUp*/}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onSignUp(Email,Phone,Username,Password)
                        }}
                    >
                        <Icon
                            name='arrow-circle-right'
                            type='font-awesome'
                            color="white"
                            size={32}
                        />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <TouchableOpacity style={{ flexDirection: 'row', padding: 10, alignSelf: 'center'}}
                    onPress={() => onNavigate()}
                >
                    <Text style={{ fontSize: 18, padding: 5 }}>Đã có tài khoản ?</Text>
                    <Text style={[styles.title,{padding:5}]}>Đăng Nhập</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>

    )
}

SignUp_UI.propTypes = {
    onSignUp: PropTypes.func,
    onNavigate: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 5,
    },
    image: {
        flex: 0.4,
        alignSelf: 'center',
    },
    input_container: {
        borderBottomWidth: 0.5,
        flexDirection: 'row',
    },
    Input: {
        fontSize: 16,
        flex: 0.9,
        margin:5
    },
    button: {
        padding: 15,
        backgroundColor: '#0388fc',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 30,
        alignSelf: "center",
        width: 250
    },
    title: {
        fontSize: 18,
        color: "#0388fc",
        
    },
    error:{
        color:'red',
        marginTop:5
    }
    
})