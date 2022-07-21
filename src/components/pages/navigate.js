import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer} from "@react-navigation/native";
import { auth } from "../../firebase";



//components
import Main from "./MainPage";
import FullInfo from "./FullInfoPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import SignOutButton from "../SignOutButton";



export default function Navigate({route, navigation}) {

    const Stack = createStackNavigator()



    return (
        <NavigationContainer >
            <Stack.Navigator >

                <Stack.Screen
                    name='Login'
                    component={LoginPage}
                    options={{headerShown: false}}
                  
                />
                <Stack.Screen
                    name='Register'
                    component={RegisterPage}

                />

             
                
                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={({ navigation }) => ({
                        title: 'Heroes page',
                        headerTintColor: 'white',
                        headerStyle: styles.headerStyle, 
                        headerRight: () => (
                            <SignOutButton navigation={navigation}/>
                        ),
                      })}
                />
                 <Stack.Screen
                    name='FullInfo'
                    component={FullInfo}
                    options={{
                        title: 'article ',
                        headerTintColor: 'white',
                        headerStyle: styles.headerStyle}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#C8A2C8',
        shadowColor: "#000",
        zIndex:1,
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    headerRegiste: {
        height: 100,
    }
})
