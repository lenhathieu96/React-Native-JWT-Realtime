import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'

import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header() {
    return (
        <View style = {{flexDirection:'column',flex:0.5}}>
            <View style ={styles.header}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <Text style = {{color:'white',fontWeight:'bold',fontSize:18, padding:10,flex:0.9}}>Xin Chào {"Lê Nhật Hiếu"} !</Text>    
                    <Icon name='plus-square' type='font-awesome' color="white"/>
                </View>
            </View>
            <View style={styles.WeeklyProgress}>
                <ProgressCircle
                    percent={50}
                    radius={40}
                    borderWidth={10}
                    color="#0088ff"
                    shadowColor="#e3e4e6"
                    bgColor="#fff"
                    outerCircleStyle={{margin:10}}
                >
                    <Text style={{ fontSize: 24,fontWeight:"bold",color:"#0088ff" }}>{'30%'}</Text>
                </ProgressCircle>

                <View style = {{flexDirection:'column',flex:1}}>
                    <View style ={{flexDirection:'row',flex:0.5,alignItems:'center'}}>
                        <Text style ={{fontWeight:'bold',fontSize:20,flex:0.9}}>Tiến độ tuần này </Text>
                        <Icon name='line-chart' type='font-awesome' style={{flex:0.1}} size={18} />
                    </View>    
                    <View style ={{flexDirection:'row',flex:0.5,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',color:"#0088ff",fontSize:18,padding:5}}>14/22</Text>
                        <Text style={{fontSize:14}}> Việc đã hoàn thành</Text>
                    </View>  
                </View>
            </View>
        </View>   
    );
}

export default Header;

const styles = StyleSheet.create({
    WeeklyProgress:{
        flexDirection:'row',
        padding:10,
        backgroundColor:"#FFF",
        borderColor:'#ebebe8',
        borderRadius:10,
        borderWidth:1,
        alignItems:"center",
        position:'relative',
        zIndex:1,
        marginTop:-50,
        marginLeft:15,
        marginRight:15
    },
    header:{
        position:"relative",
        zIndex:-1,
        backgroundColor:"#0088ff",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        flexDirection:'row',
        flex:1,
        alignItems:"center"
    } 

})