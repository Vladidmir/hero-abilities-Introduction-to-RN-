import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';


export default function FullInfo({route, navigation}) {

    const {item,  removeHeroStory} = route.params;

    const deleteStore = (key) => {
        removeHeroStory(key)
        navigation.navigate('Main')
    }

    return (
        <View style={styles.infoCharacterPage} >

          <ImageBackground source={require('../../../assets/Main.jpg')} resizeMode="cover" style={{flex: 1}}   >


            <View style={styles.cardContainer} >
                 
                <Image style={styles.imageHero} source={{uri: item.img}}/>

                <View style={styles.descriptionContainer} >
                    
                    <Text style={styles.heroName}>{item.name} </Text>
                    <Text style={styles.descriptionStyle} >{item.full}</Text>

                    <TouchableOpacity
                        style={styles.deleteButtonStory}
                        onPress={() => deleteStore(item.key)}> 
                        <Text style={styles.deleteText}> delete hero story </Text>
                    </TouchableOpacity>

                </View>

            </View>
          </ImageBackground>
          
             
        </View>
    )
}

const styles = StyleSheet.create({
  infoCharacterPage: {
    flex: 1, 
  },

  cardContainer: {
    marginVertical: 15,
    borderRadius: 15,
    overflow: 'hidden',
    width: '85%',
    height: 'auto',
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
  imageHero: {
    width: '100%',
    height: 250,
  },
  
  descriptionContainer: {
    backgroundColor:'#000000', 
    padding: 10,
  },

  heroName: {
    marginTop: -5,
    textAlign: 'center',
    fontSize: 20,
    color:'white',
    fontWeight: 'bold',
  },

  descriptionStyle: {
    marginTop: 15,
    fontSize: 17,
    marginHorizontal: 7,
    color: '#C0C0C0',
  },

  deleteButtonStory: {
    alignSelf: 'flex-end', 
    width: 120,
    backgroundColor: 'red', 
    borderRadius: 5, 
    paddingHorizontal: 2, 
    marginRight: 5, 
  },
  deleteText: {
    color: 'white',
    textAlign: 'right'
  }

})
