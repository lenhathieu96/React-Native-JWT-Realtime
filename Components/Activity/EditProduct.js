import React,{useState}from 'react';

import socket from '../Socket'

import EditProduct_UI from '../Screen/EditProduct_UI';

export default function EditProduct({route,navigation:{navigate,goBack }}) {
    const {item,update} = route.params

    const [authorError, SetauthorError] = useState('')
    const [nameError, SetnameError] = useState('')
    const [nxbError, SetnxbError] = useState('')
    const [priceError, SetpriceError] = useState('')
    const [quantityError, SetquantityError] = useState('')


    
    const _editItem =(Name,Author,NXB,Quantity,Price)=>{
        if(_validate(Name,Author,NXB,Quantity,Price)){
            let Product={
                Name,
                Author,
                NXB,
                Quantity:parseInt(Quantity),
                Prices:parseInt(Price)
            }
            update?socket.emit('update',{_id:item._id,Product}):socket.emit('insert',Product)
            socket.on('edit_result',(data=>{
                if(data){
                    navigate("Dashboard")
                }else{
                    alert('Có Lỗi Xảy Ra')
                    navigate('Dashboard')
                }
            }))
        }
    }

   

        // socket.emit('insert',"update")
    

    const _validate = (name,author,nxb,quantity,price)=>{
        // console.log(email,phone,username,password)
        if(name===''){
            SetnameError('Không được để trống')
            return false
        }
        SetnameError('')

        if(author===''){
            SetauthorError('Không được để trống')
            return false
        }
        SetauthorError('')

        if(nxb===''){
            SetnxbError('Không được để trống')
            return false
        }
        SetnxbError('')

        if(quantity===''){
            SetquantityError('Không được để trống')
            return false
        }else if(parseInt(quantity)<0){
            SetquantityError('Giá tiền không được nhỏ hơn 0')
            return false
        }
        SetquantityError('')

        if(price===''){
            SetpriceError('Không được để trống')
            return false
        }else if(parseInt(price)<1000){
            SetpriceError('Giá tiền không được nhỏ hơn 1000')
            return false
        }
        SetpriceError('')

        return true
    }

    return (
        <EditProduct_UI item={item}
                        update= {update}
                        _editItem={_editItem}
                        nameError = {nameError}
                        authorError={authorError}
                        nxbError={nxbError}
                        priceError={priceError}
                        quantityError={quantityError}
        />
  );
}
