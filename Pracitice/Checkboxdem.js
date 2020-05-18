import React,{Component} from 'react';
import {View,Text,CheckBox,StyleSheet,FlatList,ImageBackground, TouchableOpacity} from 'react-native';
//import { CheckBox } from 'react-native-elements';
import {Card} from 'react-native-shadow-cards';


export default class CheckBoxs extends Component 
{
    constructor()
    {
        super();
        this.state ={
            check: false,
            Details: [
                {
                  "type": "1",
                  "images": require('../images/download.jpg'),
                  "title":'Asans'
                },
                {
                  "type": "2",
                  "images": require('../images/Four.jpg'),
                  "title":'Asans'
         
                },
                {
                  "type": "3",
                 "images": require('../images/moring.jpg'),
                 "title":'Asans'
                },
                {
                  "type": "4",
                  "images": require('../images/third.jpg'),
                  "title":'Asans'
                },
                {
                  "type": "5",
                  "images": require('../images/download.jpg'),
                  "title":'Asans'
                },
                {
                  "type": "6",
                  "images": require('../images/Four.jpg'),
                  "title":'Asans'
                },
                {
                  "type": "7",
                 "images": require('../images/third.jpg'),
                 "title":'Asans'
                }
          ]
        }
    }
    onpressanother()
    {
        alert("hello here");
    }
    onpressfunct()
    {
        const{ check} = this.state;
        this.setState({
            check:!this.state.check
        })
    }
    _renderItem = ({item}) => (
        <Card style={styles.cardstyle}>
                 <TouchableOpacity
                
                 >
        <View>
        
           
         <ImageBackground  source={item.images} style ={styles.imagestyle} >
         <View style={styles.overlaystyle}></View>
             <CheckBox
              title='Click Here'
              value ={this.state.check}
              onChange={()=> this.onpressfunct()}
                
             />
           
    
             </ImageBackground>
            
            <View style={styles.yoganameswraper}>
          <Text style={styles.yoganamestyles}>{item.title}</Text>
          </View>
         
            </View>
            </TouchableOpacity>
        </Card>
         
          );
    render()
    {
        return(
            <View>
                     <FlatList
   data = {this.state.Details}
   renderItem={this._renderItem}
   numColumns ={3}
   keyExtractor={(item, index) => item.type}
 />
                
               

            </View>
        );
    }
}
const styles = StyleSheet.create({
    imagestyle:
    {
      width:'100%',
      height:115,
      
    },
    cardstyle:
    {
        width:122,
        height:155,
    marginLeft: 13,
    marginTop:13,
    },
    yoganameswraper:
    {
    alignItems:'center',
    height:50,
    },
    yoganamestyles:
    {
        fontSize:18,
        marginTop:4,
    },
    overlaystyle:
    {
       backgroundColor: 'black',
       opacity: 0.7,

    }
    
    
    });