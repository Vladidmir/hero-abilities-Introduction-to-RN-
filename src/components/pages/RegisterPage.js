import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik, Field} from 'formik'
import * as Yup from 'yup'
import { auth } from "../../firebase";



//Components
import CustomInput from "../CustomInput";

export default function RegisterPage() {

    const handleSignUp = ({email, password}) => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }


    
    const RegisterValidation = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('This field is required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        age: Yup.number('only numbers')
    })



    return (


        <SafeAreaView
            style={styles.loginContainer}
        >
            <ImageBackground source={require('../../../assets/Register.jpg')} resizeMode="cover" style={styles.image}>
            <Formik 
            initialValues={{password: '', email: '', age: ''}} 
            validationSchema={RegisterValidation}

            onSubmit={(values) => {
               handleSignUp(values) 
            }}
            >
            {({values, handleSubmit, isValid}) => (
                <View
                    style={styles.formContainer}
                >       
                    <Field
                        component={CustomInput}
                        style={styles.inputStyle}
                        value={values.age}
                        name='age'
                        placeholder='Enter age...'
                        placeholderTextColor='white'


                        
                    />
                    <Field
                        component={CustomInput}
                        style={styles.inputStyle}
                        value={values.email}
                        name='email'
                        placeholder='Enter email...'
                        placeholderTextColor='white'

                        
                    />
                  
                    <Field
                        component={CustomInput}
                        style={styles.inputStyle}
                        value={values.password}
                        placeholder='Enter password...'
                        name='password'
                        secureTextEntry
                        placeholderTextColor='white'
                        
                        

                    />

                    <View style={{marginTop: 20}} >
                        

                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={!isValid}
                            style={styles.registerButton}>
                            <Text style={styles.registerText}> Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </Formik>
        </ImageBackground>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    loginContainer: {
        marginTop: -100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    formContainer: {
        width: '90%',
        height: 200,
    },

    loginButton: {
        width: '100%',
        backgroundColor:'#FFC0CB',
        borderRadius: 10 ,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
    },

    loginText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10
    },
    registerButton: {
        width: '100%',
        backgroundColor:'#FFC0CB',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10 ,
       
    },

    registerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,

    },

    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
    },

    inputStyle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
        borderWidth: 2, 
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 5,
        marginBottom: 15, 
        
    },
    
  


})