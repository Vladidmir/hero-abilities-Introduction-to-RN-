import React from "react";
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik, Field} from 'formik'
import * as Yup from 'yup'


//Components
import CustomInput from "./CustomInput";

export default  AddHeroForm = ({addNewHeroStore}) => {

    const descriptionValidation = Yup.object().shape({

        name: Yup.string().min(2, 'minimum 2 characters').required('this field is required'),
        anons: Yup.string().min(10).required('must be at least 10 letters'),
        full: Yup.string().min(20).required('must be at least 10 letters')

    })

    return (
            
        <Formik 
            initialValues={{name: '', anons: '', full: '', img: ''}} 
            validationSchema={descriptionValidation}

            onSubmit={(values, action) => {
                addNewHeroStore(values)
                action.resetForm()
            }}
            >
            {({values, handleSubmit, isValid}) => (
                
                <View
                    style={styles.formContainer}
                >
                    <Field
                        component={CustomInput}
                        style={styles.inputStyle}
                        name='name'
                        value={values.name}
                        placeholder='Enter the name of the hero...'
                    />
                    <Field
                        component={CustomInput}
                        style={styles.inputStyle}
                        value={values.anons}
                        placeholder='Enter Announcemen...'
                        name='anons'
                    />
                    <Field
                        component={CustomInput}
                        style={styles.inputStyle}
                        name='full'
                        value={values.full}
                        placeholder='Enter a description...'
                    />       
                    <Field

                        component={CustomInput}
                        style={styles.inputStyle}
                        value={values.img}
                        name='img'
                        placeholder='Вставьте картинку...'
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        disabled={!isValid}
                        style={styles.submitButton}>
                        <Text style={styles.submitText}>Add story</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
  
    )
}

const styles = StyleSheet.create({
    formContainer: {
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    },
    inputStyle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
        borderWidth: 2, 
        borderColor: 'white',
        borderRadius: 5,
    },
    submitButton: {
        width: '100%',
        backgroundColor:'#FFC0CB',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
    },
    submitText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10
    }

})

// <Formik 
            //     initialValues={{name: '', anons: '', full: '', img: ''}} 
            //     validationSchema={descriptionValidation}

            //     onSubmit={(values, action) => {
            //         addNewHeroStore(values)
            //         action.resetForm()
            //     }}
            //     >
                
            //     {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
            //         <View
            //             style={styles.formContainer}
            //         >
            
            //             <TextInput
            //                 name='name'
            //                 style={styles.inputStyle}
            //                 value={values.name}
            //                 placeholder='Enter the name of the hero...'
            //                 onBlur={handleBlur('name')}
            //                 onChangeText={handleChange('name')
            //             }
            //             />
            //             {(errors.name && touched.name) &&
            //                 <Text style={styles.errorStyle} >{errors.name}</Text>
            //             }
                
                
            //             <TextInput
            //                 style={styles.inputStyle}
            //                 value={values.anons}
            //                 placeholder='Enter Announcemen...'
            //                 name='anons'
            //                 multiline
            //                 onBlur={handleBlur('anons')}
            //                 onChangeText={handleChange('anons')    
            //             }
            //             />

            //             {(errors.name && touched.anons) &&
            //                 <Text style={styles.errorStyle} >{errors.anons}</Text>
            //             }
                

            //             <TextInput
            //                 name='full'
            //                 style={styles.inputStyle}
            //                 value={values.full}
            //                 multiline
            //                 placeholder='Enter a description...'
            //                 onBlur={handleBlur('full')}
            //                 onChangeText={handleChange('full')}
            //             />
            //                {(errors.full && touched.full) &&
            //                 <Text style={styles.errorStyle} >{errors.full}</Text>
            //             }
                        
            //             <TextInput
            //                 style={styles.inputStyle}
            //                 value={values.img}
            //                 placeholder='Вставьте картинку...'
            //                 onChangeText={handleChange('img')}
            //             />
            //             <Button  color='#FFC0CB' title="Add story" onPress={handleSubmit}  />
            //         </View>
            //     )}
            // </Formik>