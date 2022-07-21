import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { auth } from "../firebase";

export default function SignOutButton ({navigation}) {

    const handleSignOut = () => {

        auth
            .signOut()
            .then(() => {
                navigation.replace('Login')
            })

    }

    return (

        <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}
        >
            <Text style={styles.signOutText} > Log out  </Text>
        </TouchableOpacity>
    )


   
}

const styles = StyleSheet.create({
    signOutButton: {
        height:30,
        backgroundColor: '#FA8072',
        width: 60,
        marginRight: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    signOutText: {
        color: 'white',
    },
})
