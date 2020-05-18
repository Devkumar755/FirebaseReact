import React, { Component } from 'react';
import { StyleSheet, View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';

import * as Facebook from 'expo-facebook';

import firebase from '../fb'
export default class TestPage extends Component {
constructor()
{
    super();
    this.state=
    {
        email:'',
        password: '',
    }
    console.ignoredYellowBox =[
      'Setting a timer'
    ];
}

async  logIn() {
    try {
      await Facebook.initializeAsync('567460550536214');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const credential = firebase.auth().FacebookAuthProvider.credential(token)
         firebase.auth().signInWithCredential(credential).catch((error) => 
             {
                console.log(error)
        })
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
componentDidMount()
{
    firebase.auth().onAuthStateChanged((user) =>{
        if(user != null)
        {
            console.log(user)
        }
    })
}
onSignupFucntion(email,password)
{
 try{
if(this.state.password.length <6)
{
    alert('please enter more than 6 character');
    return;
}
firebase.auth().createUserWithEmailAndPassword(email,password)
 }catch(error)
 {
     console.log(error);
 }
}
onSubmintfunction(email,password)
{
  try{
firebase.auth().signInWithEmailAndPassword(email,password).then(function (user)
{
    console.log(user)
})
  }catch(error)
  {
      console.log(error)
  }
}
// async loinWithFacebook()
// {
   
//     const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('567460550536214', {  permissions:['public_profile'] })
// if(type == 'success')
// {
//     const credential = firebase.auth().FacebookAuthProvider.credential(token)
//     firebase.auth().signInWithCredential(credential).catch((error) => 
//     {
//         console.log(error)
//     })
// }
// }
    render() {
        return (
       <View style={styles.container}>
      
         <TextInput
         style={styles.textnputstyles}
        placeholder='Email'
           onChangeText ={email => this.setState({email})}
           
           />
         
    
    <TextInput
    style={styles.textnputstyles}
           placeholder="Password"
           onChangeText ={password => this.setState({password})}
           
           />
  
        
        <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{this.onSubmintfunction(this.state.email,this.state.password)}}
        >
            <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{this.onSignupFucntion(this.state.email,this.state.password)}}
        >
            <Text style={{color:'white'}}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{this.logIn()}}
        >
            <Text style={{color:'white'}}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{
                this.props.navigation.navigate("Second")

        }}
        >
            <Text style={{color:'white'}}>Go to Other screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{
                this.props.navigation.navigate("ImageUploade")

        }}
        >
            <Text style={{color:'white'}}> ImageUpload screen</Text>
        </TouchableOpacity>
        

       </View>
        );
    }
}
const styles = StyleSheet.create({
container:
{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    
    
},
textnputstyles:
{
borderWidth:2,
width:350,
borderColor:'black',
borderRadius: 40,
marginBottom:8,
padding:8
},

buttonstyle:
{
    height: 40,
    width: 200,
    borderRadius:20,
    marginTop:10,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',

}
});
