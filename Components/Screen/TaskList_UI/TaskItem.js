import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Animated} from 'react-native'
import { Icon } from 'react-native-elements'
import Swipeable from 'react-native-gesture-handler/Swipeable'


import PropTypes from 'prop-types';


TaskItem.propTypes = {
    
};
//Action Swipe====================================================================
const RightActions = ({dragX})=>{
    const scale = dragX.interpolate({
        inputRange:[-100,0],
        outputRange:[1,0],
        extrapolate:'clamp'
    })

    return(
        <TouchableOpacity style = {styles.btnCheck}>
            <Icon
                name='ios-checkmark'
                type='ionicon'
                size={36}
                color='#30c204'
            />
        </TouchableOpacity>
    )
}
//Set background color for item===========================================================
const CircleColor=["#16cbae","#4547b2","#ffeea2"]
const TaskColor=["#0088ff","#5eb737","#1799a4","#1c9e75","#1c92c4"]

const setArrColor= (index,length)=>index%length
//Set row for auto close swipealbe=======================================================
let row = [];
let prevOpenedRow;

function TaskItem(props) {
    const {item,index} = props
    //Hàm tự đóng item lại khi swipe một item khác, giữ cho luôn chỉ có một item được swipe
    const closeRow = (index)=>{
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
    }

    return (
        <Swipeable
            ref={ref=>row[index]=ref}
            renderRightActions={(progress,dragX)=><RightActions progress = {progress}  dragX={dragX}/>}
            onSwipeableWillOpen={()=>closeRow(index)}
        >
            <View  style={styles.container}>

                <Text style={styles.taskHour}>08:00</Text>

                <View style={[styles.taskDetail_container,
                        {
                            backgroundColor:TaskColor[setArrColor(index,TaskColor.length)]
                        }     
                    ]}>
                    {/*thông tin công việc*/}
                    <View style={{flexDirection:'column',flex:0.8}}>
                        <Text style={styles.taskName}>{item.Name}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.props_name}>Số Lượng: </Text>
                            <Text style={styles.item_props}>{item.Quantity}</Text>
                        </View>
                    </View>
                </View>
                
            </View>
          
        </Swipeable>      
        
    );
}

export default TaskItem;

const styles = StyleSheet.create({
    taskName:{
        fontSize:18,
        fontWeight:'bold',
        color:"white",
        padding:5

    },
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },

    taskHour:{
        transform:[{rotate:"-90deg"}],
        color:"#0388fc",
        fontWeight:'bold'
    },

    taskDetail_container:{
        backgroundColor:"red",
        flex:1,
        flexDirection:"row",
        borderRadius:20,
        padding:10,
        margin:10,
        marginLeft:20
    },

    btnCheck:{
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#c2c2c2",
        padding:10,
        width:40,
        height:40,
        margin:5

    },
    
    circleDown:{
        width:100,
        height:50,
        borderBottomWidth:0,
        borderWidth:25,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        position:'absolute',
        bottom:0,
        right:15,
    },

    circleUp:{
        width:100,
        height:50,
        borderTopWidth:0,
        borderWidth:25,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        position:'absolute',
        top:0,
        right:15,
    }
})