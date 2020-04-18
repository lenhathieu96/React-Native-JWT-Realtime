import React,{useState} from 'react';
import { Text,TextInput,TouchableOpacity,View,StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native';

import PropTypes from 'prop-types';

EditProduct_UI.propTypes = {
    item:PropTypes.object.isRequired,
    update:PropTypes.bool.isRequired,
    _editItem:PropTypes.func.isRequired,
};

function EditProduct_UI(props) {

    const {item,update,_editItem,nameError,authorError,nxbError,priceError,quantityError} =props
    
    const [name, setname] = useState(item.Name||'')
    const [author,setauthor] = useState(item.Author||'')
    const [nxb,setnxb] = useState(item.NXB||'')
    const [quantity,setquantity] = useState(item.Quantity||0)
    const [price,setprice] = useState(item.Prices||0)
    // const [priceError, SetpriceError] = useState('')

    return (
        <ScrollView style={{backgroundColor:'#ededed',flex:1,flexDirection:'column'}}>
        {/*Nhập thông tin sản phẩm*/}
            <KeyboardAvoidingView style={{backgroundColor:'white',padding:10,borderRadius:10,margin:10,flex:0.9,flexDirection:'column'}}>
                {/*Nhập tên sản phẩm*/}
                <View style={styles.inputContainer} >
                    <Text style={styles.inputProps}>Tên Sản Phẩm: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên sản phẩm"
                        value={name}
                        onChangeText={text=>setname(text)}
                    />
                    <Text style={[styles.error]}>{nameError}</Text>
                      
                </View>
                {/*Nhập tác giả sản phẩm*/}
                <View style={styles.inputContainer} >
                    <Text style={styles.inputProps}>Tác Giả: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên tác giả"
                        value={author}
                        onChangeText={text=>setauthor(text)}
                    />
                    <Text style={[styles.error]}>{authorError}</Text>

                </View>
                {/*Nhập tên nhà xuất bản sản phẩm*/}
                <View style={styles.inputContainer} >
                    <Text style={styles.inputProps}>Nhà Xuất Bản: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên nhà xuất bản"
                        value={nxb}
                        onChangeText={text=>setnxb(text)}
                    />
                    <Text style={[styles.error]}>{nxbError}</Text>

                </View>
                {/*Nhập số lượng sản phẩm*/}
                <View style={styles.inputContainer} >
                    <Text style={styles.inputProps}>Số lương: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập số lượng"
                        keyboardType='numeric'
                        value={quantity.toString()}
                        onChangeText={text=>setquantity(text)}
                    />  
                    <Text style={[styles.error]}>{quantityError}</Text>

                </View>
                {/*Nhập giá sản phẩm*/}
                <View style={styles.inputContainer} >
                    <Text style={styles.inputProps}>Giá: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập giá"
                        keyboardType='numeric'
                        onChangeText={text=>setprice(text)}
                        value={price.toString()}
                    />  
                    <Text style={[styles.error]}>{priceError}</Text>

                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity 
                style={{flex:0.1,backgroundColor:'purple',borderRadius:10,margin:5,justifyContent:'center',alignItems:'center'}}
                onPress={()=>_editItem(name,author,nxb,quantity,price)}
            >
            <Text style = {{fontSize:18,fontWeight:'bold',color:'white',padding:10}}>{update?"Chỉnh Sửa":"Thêm Mới"}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default EditProduct_UI;


const styles = StyleSheet.create({
    inputContainer:{
        flex:0.2,
        flexDirection:'column',
        
    },
    inputProps:{
        fontSize:18,
        fontWeight:'bold',
        padding:5,
        marginTop:5
    },
    input:{
        fontSize:18,
        borderBottomWidth:1, 
        padding:5,
        marginTop:5
    },
    error:{
        color:'red',
        marginTop:5
    }
})