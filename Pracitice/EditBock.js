import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import firebase from '../fb.js';

export default class EditBock extends Component{
    state = 
    {
        name:this.props.navigation.state.params.name,
        Info:this.props.navigation.state.params.info,
        key:this.props.navigation.state.params.id
    }
    submitinfo()
    {
        const{name,key,Info} = this.state;
        firebase.database().ref('/Detail').child(key).update({ Info, name})
        this.setState({
            name: name,
            Info: Info,
        })
    }
    render()
    {
        return(
            <View style={styles.maincontainerstyle}>
 
            <TextInput
                     style={styles.textnputstyles}
                    placeholder='title'
                    onChangeText ={name => this.setState({name})}
                       value={this.state.name}
                       />
                        
                     <TextInput
                     style={styles.textnputstyles}
                    placeholder='detail'
                   onChangeText ={Info => this.setState({Info})}
                       value={this.state.Info}
                       />
                          <TouchableOpacity style={styles.buttonstyle} activeOpacity={0.7}
                    onPress ={() =>{this.submitinfo()}}
                    >
                        <View style={{flexDirection:'row'}}>
                   
                        <Text style={{color:'white'}}>Submint Text</Text>
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