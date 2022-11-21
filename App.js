import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import { Button, ProgressViewIOSComponent, StyleSheet, Text, TextInput, View, Image, } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

var textInputValue = "<answer goes here>";
const handlePress = () => console.log(textInputValue)
const handleChangeText = () => console.log(textInputValue)

export default function App() {
  return (


    
    <View style={styles.container}>
       
      <View style={styles.darkBlue}>
      </View>

        <View style={styles.lightBlue}>

        <Text style={styles.Header}>
        Hello World! 
        </Text>
        <Text style={styles.insideHeader}>
        First React Native App
      </Text>
  
        <Text style={styles.stillInsideHeader}>
      This is a paragraph explaining what this app is all about. 
      {'\n'}As you can see there are already many components including text, images and buttons.
      </Text>
     

        </View>
        <Text style={styles.body}>
          What would you like to get out of this course?
        </Text>
        <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Answer here brather"
          onChangeText={handleChangeText}
          placeholderTextColor="grey"
          multiline={false}
          numberOfLines={10}
        />
      </View>
      
        <Text style= {styles.secondBody}>
          An emoji describing how you {'\n'} are feeling about the course
        </Text>
        <View style={styles.imageArea}>
        <Image style={{width: 100, height: 100}}
        source={{uri:
        'https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_1280.png'}} />
        <Button style={styles.Button} title='Submit' onPress={handlePress}/>
        <Text style= {styles.yourAnswer}>
          Your answer is: {textInputValue}
        </Text>

      </View>
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%', 
    height: '100%',
    
  },

darkBlue:{
  width: '100%', height: '5%',
  backgroundColor: '#24305E'
},

lightBlue:{
  width: '100%', height:'22%', 
  backgroundColor: '#A8D1E7'

},


  Header: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 52,
    textAlign: 'left',
    
     
   
  },
  insideHeader: {
    fontSize: 20,
    top: 57,
    

  },
  stillInsideHeader: {
    fontSize: 10,
    top: 67,
    

  },
  body: {
    top: 24
  },
  textAreaContainer: {
    top: 28,
    backgroundColor: "#F2F2F2",
    padding: 5,
    height: 150,
    width: 300,
  },

  textArea: {
    textAlignVertical: "top",
    fontSize: 14,
    color: "#333",
  },
  secondBody: {
    top: 70

  },
  Button: {
    justifyContent: 'center'
    
  },
  imageArea: {
    top: 75
  },
  yourAnswer: {
    textAlign: 'center'
  }
});
