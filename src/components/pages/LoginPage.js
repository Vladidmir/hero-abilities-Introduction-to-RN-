import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik, Field} from 'formik'
import * as Yup from 'yup'
import { auth } from "../../firebase";



//Components
import CustomInput from "../CustomInput";

export default function LoginPage({route, navigation}) {  

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.replace('Main')
            }
        })

        return unsubscribe
    })

    const handleLogin = ({email, password}) => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    
    const loginValidation = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('This field is required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    })


    return (


        <SafeAreaView
            style={styles.loginContainer}
        >
            <ImageBackground source={require('../../../assets/login_bg.jpg')} resizeMode="cover" style={styles.image}>
            <Formik 
            initialValues={{password: '', email: '',}} 
            validationSchema={loginValidation}

            onSubmit={(values) => {
                handleLogin(values)
            }}
            >
            {({values, handleSubmit, isValid}) => (
                <View
                    style={styles.formContainer}
                >       
                    <Field
                        component={CustomInput}
                        value={values.email}
                        style={styles.inputStyle}
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
                            style={styles.loginButton}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.push('Register')}
                            style={styles.registerButton}>
                            <Text style={styles.registerText}>register</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    formContainer: {
        width: '90%',
        marginTop: -100,
        
        
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
        alignSelf: 'flex-end',
        width: 100,
        backgroundColor:'white',
        borderColor: '#FFC0CB',
        borderWidth: 2,
        borderRadius: 10 ,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
        height: 30,
    },

    registerText: {
        color: '#FFC0CB',
        fontSize: 17,
        textAlign: 'center',

    },

    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
    },
    
  


})