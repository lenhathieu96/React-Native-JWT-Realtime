import React, {useEffect,useState} from 'react';
import { Alert } from 'react-native';
import socket from '../Socket'
import ProductList from '../Screen/ProductList_UI/List'




function Dashboard({navigation}) {
    
    // const data = [
    //     {ID:1,Name:'Trinh Thang Binh',Quantity:100,Prices:100000,Image:"https://firebasestorage.googleapis.com/v0/b/erp-factory-a2ae1.appspot.com/o/logo.png?alt=media&token=b8abe758-ffb4-4821-a5e7-671872850691"},
    //     {ID:2,Name:'My Tam',Quantity:20,Prices:2000,Image:"https://firebasestorage.googleapis.com/v0/b/erp-factory-a2ae1.appspot.com/o/logo.png?alt=media&token=b8abe758-ffb4-4821-a5e7-671872850691"},
    //     {ID:3,Name:'Quang Vinh',Quantity:30,Prices:2032502,Image:"https://firebasestorage.googleapis.com/v0/b/erp-factory-a2ae1.appspot.com/o/logo.png?alt=media&token=b8abe758-ffb4-4821-a5e7-671872850691"},
    //     {ID:4,Name:'Mr Siro',Quantity:80,Prices:585255,Image:"https://firebasestorage.googleapis.com/v0/b/erp-factory-a2ae1.appspot.com/o/logo.png?alt=media&token=b8abe758-ffb4-4821-a5e7-671872850691"}
    //     ]
    useEffect(()=>{
        socket.emit('getAll')
        socket.on('data',(data=>{
           setData(data)
        }))
    },[])

    const [data,setData] = useState()

    const insertItem = ()=>{
        navigation.navigate('EditProduct',{item:{},update:false})
    }

    const updateItem = (item)=>{
        navigation.navigate('EditProduct',{item:item,update:true})
    }

    const delItem = (ID)=>{
        Alert.alert(
            'Xác Nhận',
            'Bạn Có Muốn Xoá Không',
            [
                {text: 'Có', onPress: () => {
                    socket.emit('delete',ID)
                }},
                {
                    text: 'Không',
                    style: 'cancel',
                },  
            ]
        )
    }
    return (
      <ProductList data ={data} 
                delItem = {delItem}
                insertItem={insertItem}
                updateItem={updateItem}

      />
    );
}

export default Dashboard;