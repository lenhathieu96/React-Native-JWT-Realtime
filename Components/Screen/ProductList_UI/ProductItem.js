import React from 'react';
import {View,Text,Image,StyleSheet,Animated,TouchableOpacity} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

let row = [];
let prevOpenedRow;

export default function ProductItem(props) {
    const {item,index,updateItem,delItem} = props
    const closeRow = (index) =>{
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
    prevOpenedRow = row[index];
    }

    const RightActions = ({dragX,item})=>{
        const scale = dragX.interpolate({
            inputRange:[-100,0],
            outputRange:[1,0],
            extrapolate:'clamp'
        })
        return(
            <View style={{flexDirection:'row'}}> 
                <TouchableOpacity style={styles.rightAction}
                                onPress={()=>updateItem(item)}
                >
                    <View>
                        <Icon name = 'edit' style={[styles.actionText,{color:'blue'}]}/>
                        <Animated.Text style={[styles.actionText,{transform:[{scale}],color:'blue'}]}>Update</Animated.Text>    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightAction}
                                onPress={()=>delItem(item._id)}
                >
                    <View>
                        <Icon name ='trash' style={[styles.actionText,{color:'red'}]}/>
                        <Animated.Text style={[styles.actionText,{transform:[{scale}],color:'red'}]}>Delete</Animated.Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
  
    return (
        <Swipeable
            renderRightActions={(progress,dragX)=>
            <RightActions progress={progress} 
                        dragX={dragX} 
                        item={item}/>}      
                        ref={ref=>row[index]=ref}
                        onSwipeableWillOpen={()=>closeRow(index)}
                        updateItem = {updateItem} 
        >
            <View style = {styles.container}>
                <View style={{borderBottomWidth:5,borderColor:'#0388fc',borderRadius:100}}>
                    <Text style={styles.item_props}>{item._id}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    {/*thông tin sản phẩm*/}
                    <View style={{flexDirection:'column',flex:0.8}}>
                        <Text style={styles.item_props}>{item.Name}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.props_name}>Số Lượng: </Text>
                            <Text style={styles.item_props}>{item.Quantity}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.props_name} >Giá: </Text>
                            <Text style={styles.item_props}>{item.Prices}</Text>
                            <Text style={styles.props_name} >VNĐ</Text>
                        </View>
                    </View>
                    {/*hình ảnh sản phẩm*/}
                </View>    
            </View>
            
        </Swipeable>
    
);
  }

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#ffeea2",
        marginTop:20,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#ffeea2"
    },
    item_props:{
        fontSize:18,
        fontWeight:'bold',
        color:'#0388fc',
        padding:5

    },
    props_name:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        padding:5
    },
    rightAction:{
        justifyContent:'center',
        alignItems:'flex-end',
        borderRadius:20
    },
    actionText:{
        fontSize:20,
        padding:10,
        fontWeight:'bold',
        alignSelf:'center'
    }
})