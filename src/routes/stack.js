import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import Details from '../Screens/Details';

export default function Routes(){
    
    const stack = createStackNavigator();

    return(

            <stack.Navigator>

                <stack.Screen name ='home' component = {Home} options ={
                    {
                            headerShown:false
                    }
                } />
                <stack.Screen name ='details' component = {Details}/>

            </stack.Navigator>
    
    );
}