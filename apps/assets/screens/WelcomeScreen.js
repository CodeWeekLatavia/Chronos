import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable, View, TabBarIOS} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function WelcomeScreen({props}) {
    const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>      
        <View style={styles.logoView}>
        <Image style={styles.image} source={require("../Prakt_Logo.png")}/>
        <Text style={{fontSize: 30}}> PRAKT </Text>
        </View> 
        <View style={styles.loginView}>
         <View style={styles.InputView}>
         <TextInput style={styles.textInput} placeholder='Email'/>
         <TextInput style={styles.textInput} placeholder='Password'/>
         <Pressable style={styles.pressable} onPress={()=> console.log("Vag")}>
             <Text style={[{fontSize: 25},{color: '#fff'}]}> Log in </Text> 
         </Pressable>
         </View>
        </View>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        flex: 1,
    },
    logoView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    loginView: {
        flex: 2,
    },
    InputView: {
        flex: 0.4,
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
    },
    textInput: {
        fontSize: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        height: 40,
    },
    image: {
        width: 150,
        height: 150,
    },
    pressable: {
        backgroundColor: '#0076a3',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    }
    
})
export default WelcomeScreen;