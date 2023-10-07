import { useState } from "react";
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


export default function Home({navigation}) {
    const [number, setNumber] = useState(null) 
    const [singleSymptom, setsingleSymptom] = useState("")
    const [Symptoms , setSymptoms] = useState([])

    const onChangeNumber = (givenNumber) =>{
        setNumber(givenNumber)
    }
    const onChangeSymptoms =(GivenSymptoms) =>{
        setSymptoms([...Symptoms, singleSymptom])
        setsingleSymptom("")
        
    }
    return (
      <View>
        <ScrollView>
        <TextInput
        style={styles.input}
        onChangeText={(num) =>{onChangeNumber(num)}}
        value={number}
        placeholder="Enter Age"
        keyboardType="numeric"
      />
      {/* <View style={styles.checkboxContainer}>

        <CheckBox
          onValueChange={(IsChecked)=>{setSymptoms([...Symptoms , "fever" ])}}
          style={styles.checkbox}
        />
                <Text style={styles.label}>Fever</Text>
              
</View> */}
<View style={{flexDirection: "row"}}>
<TextInput
        style={{        height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            flex:1
        } }
        onChangeText={(text)=>{setsingleSymptom(text)}}
        value={singleSymptom}
        placeholder="Symptoms"
        keyboardType="default"
      />
    <Pressable onPress={onChangeSymptoms} style={{justifyContent:"center",alignItems:"center", marginRight:5}}>
      <Text style={{
        color: 'red',}}>add symptom</Text>
    </Pressable>
    </View>
    {Symptoms.map((item,i) => {
        return (
          <View style={{flexDirection:"row",padding:10}} key={i}><Text style={{padding:10, fontSize:20}}>{item}</Text>
          <Pressable onPress={()=>setSymptoms(Symptoms.filter(a => a !== item))}>
          <Text style={{padding:15, color:"red"}}>Delete</Text>
          </Pressable>
  </View>
        );
      })}


<Button
  onPress={()=>{navigation.navigate("Diagnose Details", Symptoms)}}
  title="Diagnose"
  color="#2f2f2f"
/>
</ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
      button: {
     
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });
  