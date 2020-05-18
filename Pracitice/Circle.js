import React,{Component} from 'react';
import {View,Text,Animated,StyleSheet} from 'react-native';
export default class Circle extends Component 
{
    constructor()
    {
        super()
        this.state = {
            position: new Animated.ValueXY({x: 100,y:100})
        }
        Animated.timing(this.state.position,{
            toValue:{x:300,y:200},
            easing: Easing.back(2),
            duration:2000
        })



        
    }
    render()
    {
        return(
            <Animated.View style={this.state.position.getLayout()}>
<View style={styles.ballstyle}>
                <Text style={{color: 'white'}}>Ball</Text>
            </View>
            </Animated.View>
            
        );
    }
}
const styles = StyleSheet.create({
ballstyle:
{
    height:70,
    width :70,
    borderRadius: 35,
    backgroundColor: 'green',
}

});