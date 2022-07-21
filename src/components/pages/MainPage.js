import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text,  FlatList, TouchableOpacity, Image , Modal, View, ImageBackground} from 'react-native';


import AddHeroForm from '../Form'


export default function Main({navigation}) {

    const [news, setNews] = useState([
        {name: 'Tanjiro', anons: 'Main character',  full: 'BlaBlBlaBlaBBlaBlaBaBBlaBlaBBlaBlaBBlaBlaBBlaBla', key: 1, img: 'https://i.pinimg.com/236x/96/b8/20/96b8209a2c7ab8c726c97893d6537535.jpg'},
        {name: 'Nezuko', anons: "tanjiro's sister, demon",  full: 'BlaBlaBBlaBlaBBlaBlaBBlaBlaBBlaBlaBBlaBlaBBlaBla', key:2, img: 'https://media.myshows.me/comments/5/a5/5a5639cadee0e6352f7b1694ad07b49e.jpg' },
        {name: 'Inosuke', anons: 'sick bastard',  full: 'BlaBlaBBlaBlaBBlaBlaBBlaBlaBlaBlaBBlaBlaBBlaBlaBBlaBla', key: 3,img: 'https://cs10.pikabu.ru/images/previews_comm/2019-11_4/1573894525198618249.jpg'},
    ])

    const [addModalHero, setModalHero] = useState(false)

    const addNewHeroStore = (newStory) => {
        setNews((oldStory) => {
            newStory.key = Math.random().toString()
            return [
                newStory,
                ...oldStory
            ]
        })
        setModalHero(false)
    }


    const removeHeroStory = (enterKey) => {
        setNews((listStory) => listStory.filter(item => item.key !== enterKey))
    }




    return (
        <SafeAreaView 
        style={styles.mainContainer}
            >

               

            <Modal animationType='slide' visible={addModalHero}>
                <View style={styles.modalStyle}>
                    <ImageBackground source={require('../../../assets/Main.jpg')} resizeMode="cover" style={styles.image} >
                        <View style={{width: '90%', alignSelf: 'center'}} >
                            <TouchableOpacity                                 
                                onPress={() =>setModalHero(false)}>
                                <Text style={styles.buttonClose}>x</Text>
                            </TouchableOpacity>
                            <AddHeroForm addNewHeroStore={addNewHeroStore} />
                        </View>
                    </ImageBackground>
                </View>
            </Modal>

           
            <ImageBackground source={require('../../../assets/Main.jpg')} resizeMode="cover" style={styles.image} >

            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.buttonAdd}
                onPress={() => setModalHero(true)}>
                <Text style={{color: 'white'}}> Add new article </Text>
            </TouchableOpacity>
            
            

                {news.length ? (

                    
                    
                    <FlatList data={news} renderItem={({item}) => (
                        <TouchableOpacity 
                            style={styles.cardStyle} 
                            onPress={() => navigation.navigate('FullInfo', {item, removeHeroStory})}>
                            <Image style={styles.imageHero}  source={{uri: item.img}}/>
                            <Text style={styles.heroName} >{item.name}</Text>
                            <Text style={styles.anonsHero} >{item.anons}</Text>
                        </TouchableOpacity>
                    )}/>
                ) : (
                    <View style={styles.noStories} >
                        <Text>No characters stories...</Text>
                    </View>
                )}

            </ImageBackground>

            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        paddingBottom: 10,
        borderRadius: 15,
        backgroundColor:'#000000',
        overflow: 'hidden',
        marginBottom: 15,
        width: '85%',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },
    
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        

    },
    heroName: {
        textAlign: 'center',
        fontSize: 23,
        color:'white',
        fontWeight: 'bold',
      
    },
    anonsHero: {
        fontSize: 20,
        marginLeft:10,
        color: '#C0C0C0',
        fontWeight: 'bold',
    },
    infoMargin: {
        marginBottom: 20,
    },
    imageHero: {
        height: 200,
        width: '100%',
    },
    buttonClose: {
        textAlign: 'right',
        fontSize: 25,
    },
    buttonAdd: {
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 15,
        width: '85%',
        backgroundColor: '#FFC0CB',
        fontSize: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    modalStyle: {
        justifyContent: 'center',
        width: '100%',
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    noStories: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    image: {
        flex: 1,
        justifyContent: "center",
    },

})
