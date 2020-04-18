import React from 'react';
import {Text,SafeAreaView,StyleSheet,View,FlatList,TextInput,TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import ProductItem from './ProductItem'
List.propTypes = {
    data:PropTypes.array.isRequired,
    delItem:PropTypes.func.isRequired,
    insertItem:PropTypes.func.isRequired,
    updateItem:PropTypes.func.isRequired,
};



function List(props) {
    const {data,delItem,insertItem,updateItem} = props
    return (
        <View style = {styles.container}>
            <SafeAreaView style = {styles.header}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:16,flex:0.8}}>Xin Chào {"LeeNhaHie"}!</Text>
                <TouchableOpacity onPress={()=>insertItem()}>
                <Icon type='font-awesome' name = 'plus-square' size={32} color = 'white'/>

                </TouchableOpacity>
            </SafeAreaView>
            <View style= {styles.float}>
                <Icon type='font-awesome' name = 'search' size={24} color = 'black'/>
                <TextInput 
                    placeholder="Bạn cần tìm gì ?"
                    placeholderTextColor="black"
                    style={{padding:5,fontSize:16}}
                />
            </View>
            <FlatList
                data= {data}
                renderItem = {({item,index})=>
                    <ProductItem  item = {item} 
                                index = {index} 
                                delItem = {delItem}
                                updateItem ={updateItem}
                    />
                }
                keyExtractor = {(item)=>(item._id).toString()}
                style={styles.flastlist}
            />
        </View>
       
    );
}

export default List;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    header:{
        flex:0.2,
        flexDirection:"row",
        backgroundColor:"#0388fc",
        position:'relative',
        zIndex:-1,
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:30,
        
    },
    float:{
        padding:15,
        flexDirection:'row',
        position:'relative',
        zIndex:1,
        marginTop:-25,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#ebebe8',
        backgroundColor:'#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft:20,
        marginRight:20,
    },
    flastlist:{
        flex:1,
        position:'relative',
        zIndex:-1,
        margin:5
    }
    
})