import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './Activity/Login'
import SignUp from './Activity/SignUp';
import Dashboard from './Activity/Dashboard'
import EditProduct from './Activity/EditProduct'

const Stack = createStackNavigator()
const DashboardStack = ()=>{
    return(
        <Stack.Navigator initialRouteName={"Dashboard" }>
            <Stack.Screen   name = "EditProduct" 
                            component ={EditProduct}
                            options={{
                                headerBackTitleVisible:false,
                                headerTitle:"Thông Tin Sản Phẩm"
                                
                            }} 
            />
            <Stack.Screen   name = "Dashboard" 
                            component ={Dashboard} 
                            options={{
                                headerShown:false,
                            }}
            />
        </Stack.Navigator>
    )
}
export default Mystack = ()=>{
    return(
        <Stack.Navigator initialRouteName={"Dashboard" }>
            <Stack.Screen   name = "Login" 
                            component ={Login} 
                            options={{
                                 headerShown:false
                                 
                            }}
            />
            <Stack.Screen   name = "Dashboard" 
                            component ={DashboardStack} 
                            options={{
                                headerShown:false
                            }}
            />
            <Stack.Screen   name = "SignUp" 
                            component ={SignUp} 
                            options={{
                                headerShown:false
                            }}
            />
        </Stack.Navigator>
    )
}

