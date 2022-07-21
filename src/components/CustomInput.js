import React from 'react'
import { Text, TextInput, StyleSheet, View } from 'react-native'
const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value, style },
    form: { errors,touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={style ? style : styles.inputStyle}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text 
      style={styles.errorStyle}
      >{errors[name]}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
        borderWidth: 1, 
        borderStyle: 'solid',
        borderRadius: 5,
        marginBottom: 15, 
        
    },
    errorStyle: {
        fontSize: 10,
        color: 'red',
        marginTop: -10,
        marginBottom: 10,
    },
})

export default CustomInput