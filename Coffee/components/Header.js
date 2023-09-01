import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
          <Text>home screen</Text>
      <Image source={require('../assets/images/coffeeHeader.jpg')} style={styles.header}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relatvie',
    backgroundColor:'whitesmoke'
  },header:{
    height:150,
    width:360,
    opacity:.2,
    borderRadius:20
  }
});