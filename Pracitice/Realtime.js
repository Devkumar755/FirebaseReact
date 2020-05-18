import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';


import firebase from '../fb';
export default class Realtime extends Component 
{
    constructor()
    {
        super();
        this.state =
        {
            title: '',
            detail: '',
        }
    }
    onInsert()
    {
        const {title,detail} = this.state;
        var key = firebase.database().ref('/Detail').push().key
        firebase.database().ref('/Detail').child(key).set({key:key,name: title,Info:detail})
    
    }
    render()
    {
        return(
     
<View style={styles.maincontainerstyle}>
 
<TextInput
         style={styles.textnputstyles}
        placeholder='title'
           onChangeText ={title => this.setState({title})}
           
           />
            
         <TextInput
         style={styles.textnputstyles}
        placeholder='detail'
           onChangeText ={detail => this.setState({detail})}
           
           />
              <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{this.onInsert()}}
        >
            <View style={{flexDirection:'row'}}>
       
            <Text style={{color:'white'}}>Insert Text</Text>
            </View>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
        onPress ={() =>{
            this.props.navigation.navigate("Third")
        }}
        >
            <View style={{flexDirection:'row'}}>
        
            <Text style={{color:'white'}}>Show List</Text>
            </View>
          
        </TouchableOpacity>
</View>  
 
        );
    }
}
const styles = StyleSheet.create({
maincontainerstyle:
{
    flex: 1,
    justifyContent:'center',
    padding: 10,
    backgroundColor: '#fff',
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