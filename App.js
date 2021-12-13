import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight} from 'react-native';

export default function App() {

  
  const[betet,setBetet] = useState();
  const[tokesites_szam,setTokesitesSzam]= useState();
  const[nevleges,setNevleges] = useState();
  const[tenyleges,setTenyleges] = useState();

  function handleCalcButton(){
    let tenylegesKamat = (Math.pow(1+(nevleges/(100*tokesites_szam)),tokesites_szam)-1) * betet;
    setTenyleges(tenylegesKamat.toFixed(2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Kamatos kamat</Text>
      <Text style={styles.texts}>Betét</Text>
      <TextInput placeholder="Betét" style={styles.input} onChangeText={(betet)=>setBetet(betet)} />
      <Text style={styles.texts}>Tőkésítések száma</Text><TextInput placeholder="Tőkésítés" style={styles.input} onChangeText={(tokesites_szam)=>setTokesitesSzam(tokesites_szam)}/>
      <Text style={styles.texts}>Névleges Kamat</Text><TextInput  placeholder="Névleges Kamat"style={styles.input} onChangeText={(nevleges)=>setNevleges(nevleges)}/>
      <TouchableHighlight
          style={styles.button1}
          onPress={handleCalcButton}
          >
          <Text style={styles.runText}>Számol</Text>
      </TouchableHighlight>
      <Text style={styles.texts}>Tényleges kamat: {tenyleges}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
  },
  textTop:{
    color: "white",
    fontSize: "150%",
    margin: "3%"
  },
  texts:{
    color: "white",
    fontSize: "100%",
    margin:"0.5%"
  },
  input:{
    color:"black",
    backgroundColor: "white",
    margin: "5%",
    
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  runText: {
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },
});
