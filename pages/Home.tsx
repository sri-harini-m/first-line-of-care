import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    const [number, setNumber] = useState(null) 

    const onChangeNumber = (givenNumber) =>{
        setNumber(givenNumber)
    }
    return (
      <View>
        
        <TextInput
        style={styles.input}
        onChangeText={() =>{onChangeNumber(number)}}
        value={number}
        placeholder="Enter Age"
        keyboardType="numeric"
      />
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
  });
  