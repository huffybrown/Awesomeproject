import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
const pic238.png={url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffood%2520photography%2F&psig=AOvVaw08JNVH0Qlw72u3MwKOxqsM&ust=1671119554978000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKifo827-fsCFQAAAAAdAAAAABAE}
"}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
      <Entypo 
      name='grid'
      color={'blue'}
      size={50}
      />
        
     <View>
     <Text>location, </Text>
      <Text>klaten indonesia </Text>
      </View>
      < Entypo
      name='bell'
      color={'red'}
      size={50}
      />
       

      </View>
      <ImageBackground source={pic238.png}{StyleSheet:}


      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  icon: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    width:145,
    justifyContent:'space-between'
  }
});
