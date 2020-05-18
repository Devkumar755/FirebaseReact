import React,{Component} from 'react';

import {View,Text,StyleSheet,Image,TouchableOpacity,Alert,ScrollView,FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebase from '../fb.js';

export default class ImageUpload extends Component{
    constructor()
    {
        super()
        this.state= {
            imageurl: null,
            imageName: 'firstImage',
            otherurl: null,
            imagedata:[],
           
        }
        console.ignoredYellowBox =[
          'Setting a timer'
        ];
    }
    componentDidMount()
    {
      firebase.database().ref('/Imageshere').on('value',(snap) =>{
        var itemss = [];
        snap.forEach((child) =>{
            itemss.push({
            
                nurl: child.val().photourl,
            name: child.val().name,
              
              
            });
           
           
            console.log(itemss)
        });
        this.setState({imagedata : itemss})
        
   
    })
  //   var rootref = firebase.database().ref().childe
  // firebase.storage().getDownloadURL.then((url) =>
  // {
  //   console.log(url);
  //   this.setState({otherurl:  url});

  // })
        this.getPermissionAsync();
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };

      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ imageurl: result.uri });
        
       
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
     uploadimage = async(imageuri,imageName) =>
     {
       const blob = await new Promise((resolve, reject) =>{
         const xhr = new XMLHttpRequest();
         xhr.onload =() =>
         {
           resolve(xhr.response);
         };
         xhr.responseType = 'blob';
         xhr.open('Get',imageuri,true);
         xhr.send(null);
       });


         const ref = await firebase.storage().ref('images/')
         let snapshot  = await ref.put(blob);

         return await snapshot.ref.getDownloadURL();
     };
     proceed = async() =>
     {
       const {imageurl} = this.state;
       const imagename= "Myfirst";
 

      var key = firebase.database().ref('/Detail').push().key
       const ress = await this.uploadimage(imageurl,imagename);
       const data = {
         name : 'UserName',
         photourl: ress,
       };
    
       firebase.database().ref('/Imageshere').child(key).set(data)
     }

    render()
    {
        let {imageurl } = this.state;
        const { imagedata } = this.state;
     
       
      
       
        return(
            <View style={styles.imagewrapper}>
              <ScrollView>
        
            
              <Image 
              style={styles.imagestyle}
              
              source={{uri: imageurl}}
              />
          
              {
                imagedata.map((l,i) =>(
                


                    <View>
                 
                  
                     <Image 
                    style={{height:200,width:200}}
                    source={{uri: l.nurl}}
                    
                    
                    /> 
                    <Text>{l.name}</Text>
                  
                           
                     </View>
                  
            

                ))
              }
                <TouchableOpacity style={styles.butonwrapper}
                onPress ={() =>{
                    this._pickImage()
                }}
                >
                    <Text style={styles.buttontext}>Select Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.butonwrapper}
                onPress={() =>{
                  this.proceed()
                }}
                 
               
                >
                    <Text style={styles.buttontext}>Upload Image</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    imagewrapper:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    butonwrapper:
    {
    
        justifyContent: 'center',
        alignItems:'center',
        height: 40,
        width:300,
        backgroundColor:'green',
        marginTop:10,
        borderRadius:15,

    },
    buttontext:
    {
        color:'white',

    },
    imagestyle:
    {
        height:200,
        width:200,
    }
})