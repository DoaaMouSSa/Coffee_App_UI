import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput} from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid'
import {BellIcon} from 'react-native-heroicons/solid';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          <Image source={require('../assets/images/coffeeHeader.jpg')} style={styles.header}/>
          <View style={styles.smallHeader}>
          <Image source={require('../assets/icons/userAvatar.png')} style={styles.icon}/>
          <View style={styles.rowView}>
          <MapPinIcon style={styles.mapIcon}/>
          <Text style={styles.textMapIcon}>Zamalek, Cairo</Text>
            </View>  
            <BellIcon style={styles.mapIcon}/>
            </View>
        <View style={styles.searchView}>
            <TextInput placeholder='Search' style={styles.searchInput}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relatvie',
    backgroundColor:'whitesmoke',
  },header:{
    height:150,
    width:360,
    opacity:.2,
    borderRadius:10
  },icon:{
    width:25,
    height:25,
  },mapIcon:{
    color:'brown',
  },textMapIcon:{
    fontSize:12,
    fontWeight:'bold'
  },rowView:{
    flexDirection: 'row',
  },smallHeader:{
    flexDirection: 'row',
    padding:20,
    position:'absolute',
    top:30,
    justifyContent:'center',
    alignItems:'center',
    gap:80
  },
  searchView:{
    position:'absolute',
    top:70,
    justifyContent:'center',
    alignItems:'center'
  },
  searchInput:{
    margin:20,
    width:300,
    height:50,
    borderWidth: 2,
    borderColor:'whitesmoke',
    borderRadius:50,
  }
});