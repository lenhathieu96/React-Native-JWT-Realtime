import React from 'react';
import { FlatList, SafeAreaView,Text,StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'
import Header from './Header'

import TaskItem from './TaskItem';



export default List = (props)=>{
   const {data} = props
    return(
           <SafeAreaView style={styles.container}>
           
                <Header/>
                <View style={{flexDirection:"row",padding:10,margin:5}}>
                    <Text style={styles.txtRestTask}> Hôm nay, Bạn còn {5} việc chưa làm</Text>
                    <Icon name='calendar' type='font-awesome' />
                </View>
               
                <FlatList
                    data = {data}
                    renderItem = {({item,index})=><TaskItem item = {item} index = {index} />}
                    keyExtractor = {(item)=>(item.ID).toString()}
                    style={{flex:0.5}}
                />

           </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    txtRestTask:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        flex:1
    },
})