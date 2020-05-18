 import React,{Component} from 'react';
 import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import firebase from '../fb';

 
 export default class DetailList extends Component 
 {
     constructor()
     {
         super()
         this.state ={
             Detaisl:[],
               
         }
         console.ignoredYellowBox =[
            'Setting a timer'
          ];
     }
     delectnode(key)
     {
        firebase.database().ref(`/Detail/${key}`).remove()
     }
     componentDidMount()
     {

firebase.database().ref('/Detail').on('value',(snap) =>{
    var items = [];
    snap.forEach((child) =>{
        items.push({
            id: child.key,
            info: child.val().Info,
            name: child.val().name,
        });
        console.log(items)
    });
    this.setState({Detaisl : items})
})




        }
     
            
             
         
        
     
     render()
     {
         return(
             <View>
               <FlatList 
               data={this.state.Detaisl}
               keyExtractor={(item) => item.key}
               showsVerticalScrollIndicator={false}
               renderItem={({item})=>{
                       return(
                        <View style={styles.cardrapper}>
                            <View style={{flex:1}}>
                            <Text style={styles.textstyle}>{item.name}</Text>
                            <Text style={styles.textstyle}>{item.info}</Text>
                            </View>
                            <View style={styles.buttonstyle}>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigation.navigate("EditBlog",{...item})
                                }}
                                >
                                <Ionicons name="ios-clipboard" size={32} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                     onPress={()=>{
                                        this.delectnode(item.id)
                                     }}
                                >
                                <Ionicons name="ios-backspace" size={32} color="white" />
                                </TouchableOpacity>
                         
                           
                            </View>
                      </View>

                        

                       )
                    }
                }
            
            
            
               />
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
cardrapper:
{
    flex:1,
  backgroundColor:'#2afa69',
  elevation: 10,
  marginLeft:13,
  marginRight:13,
  marginBottom:10,
  marginTop:5,
  borderRadius:8,
  flexDirection:'row',
  justifyContent:'space-evenly'

},
textstyle:
{
color:'white',
margin:5,
fontSize:18,


},
buttonstyle:
{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
}

 })