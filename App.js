import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import YoutubeIframe from './src/components/YoutubeIframe'
const App=()=>{
    const [text,setText]=useState('');
    const [url,setUrl]=useState("");

   
    //send video id to youtube player
    const search_Video=(text)=>{
      console.log(getId(text))
      if(getId(text)!=false){
        console.log(getId(text))
        setUrl(getId(text))
      }
    }

    //extract id from youtube url
    function getId(url){
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length == 11) {
        return match[2];
      } else {
        return false
      }
    }

    //component for user to type youtube video url    
    const Searchbar=()=>{
    
        return(
        <View style={styles.maincontainer}>



        <View style={styles.input}>

        <TextInput 
        style={styles.inputText} 
        value={text}
        placeholder=' Enter youtube URL ....                      '
        onChangeText={(val) => setText(val)}/>

       
        <View style={{width:100,alignItems:'center'}}>
        <Button
        title='Search' style={styles.inputButton} onPress={() => search_Video(text)}
        />
        </View>
        </View>
        </View>

        );
    
}
    return(
        <View style={styles.container}>


         
        <Searchbar/>

        {url!=''?
            <View style={{flex:2,padding:10}}>
            <YoutubeIframe url={url}/>
            </View>
     
        :<></>
    }
            
           
          
        </View>
    )
}

export default App;

const styles=StyleSheet.create({
    container:{
    
        flex:5,
        backgroundColor:'#fff',
        marginLeft:0,
        flexDirection:'column'
      },
    maincontainer:{
    
        flex:1,
        backgroundColor:'#fff',
      },
      inputText:{
        color:'black',
        borderWidth:1,
        borderRadius:15,
        borderColor:'black',
        margin:20,
        
        alignItems:'stretch',
    
      
      },
      input:{
        
      
        flex:1,
        backgroundColor:'lightgrey',
        alignItems:'center',
       
        flexDirection:'column',
    
      },
      inputButton:{
        borderRadius:25,
        backgroundColor:'#99ffcc',
        
        
        
      },
})