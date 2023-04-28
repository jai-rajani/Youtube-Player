import WebView from "react-native-webview";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const YoutubeIframe=({url})=>{
    return(
        
        <WebView
        style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,backgroundColor:'grey',flex:4,padding:10} }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/'+url}}
    />


    );
}

export default YoutubeIframe