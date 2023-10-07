import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";

export default function DiagnoseDetails({ route, navigation }) {
  //messages in string obviously lol

  const symptoms = route.params[0];
  const age = route.params[1];
  const [diagnosis, setdiagnosis] = useState("");
  const [recommended, setrecommened] = useState("");
  const [severity, setseverity] = useState("");

  function extractTextInCurlyBraces(inputString) {
    const regex = /\{(.*?)\}/; // Regular expression to match text inside curly braces
    const match = regex.exec(inputString);
    if (match && match.length > 1) {
      return match[1].trim(); // Extracted text inside curly braces
    }
    return null; // Return null if no match is found
  }
  function extractTextInlessthan(inputString) {
    const regex = /\<(.*?)\>/; // Regular expression to match text inside curly braces
    const match = regex.exec(inputString);
    if (match && match.length > 1) {
      return match[1].trim(); // Extracted text inside curly braces
    }
    return null; // Return null if no match is found
  }
  function extractTextInSquareBrackets(inputString) {
    const regex = /\[(.*?)\]/; // Regular expression to match text inside curly braces
    const match = regex.exec(inputString);
    if (match && match.length > 1) {
      return match[1].trim(); // Extracted text inside curly braces
    }
    return null; // Return null if no match is found
  }

  useEffect(() => {
    async function fetchData() {
      //displays when opened
      const userInput = symptoms;
      const response = await getChatbotResponse(userInput);
      console.log(response[0].text);
      const diagnosisoutput = extractTextInCurlyBraces(response[0].text);
      const recommendedoutput = extractTextInlessthan(response[0].text);
      const severityoutput = extractTextInSquareBrackets(response[0].text);
      setdiagnosis(diagnosisoutput);
      setrecommened(recommendedoutput);
      setseverity(severityoutput);
      console.log(diagnosisoutput, recommendedoutput, severityoutput);
    }
    fetchData();
  }, []);

  const getChatbotResponse = async (userInput) => {
    //said response function lol
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions", //idk chat gpt said i have to add this to use apis
        {
          prompt: `User: my child is ${age} years old and has a ${userInput} what would be a probable diagnosis for him? write only the diagnosis inside { } and nothing else. what would be the recommedned action to do at home to take. write this inside < >. also write how severe it is from high mild and low write it inside this [ ] \n`,
          max_tokens: 150,
          n: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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", // said api do not copy this is secret lmao
          },
        }
      );

      return [
        /*gives an id to each response tried making it serial but didnt work so some dude said to do this*/
        {
          _id: Math.round(Math.random() * 1000000),
          text: `Legal Bot: ${response.data.choices[0].text.trim()}`,
          createdAt: new Date(),
        },
      ];
    } catch (error) {
      //error handling that some guy on yt said to add cause ai can cause errors *[acts shocked]*
      console.error(error); //some random shit cause f errors
      return [];
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Possible Causes:</Text>
          <Text style={styles.infoText}>{diagnosis}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Symptoms:</Text>

          {symptoms.map((item, i) => {
            return (
              <Text style={styles.infoText} key={i}>
                {item}
              </Text>
            );
          })}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Severity:</Text>
          <Text style={styles.infoText}>{severity}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Recommended Action:</Text>
        </View>
        <View style={styles.infoContainere}>
          <Text style={styles.infoText}>{recommended}</Text>
        </View>

        {/* <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Contact a doctor</Text>
          <Text style={styles.infoText}>Contact(button here)</Text>
        </View> */}
        <View style={styles.button}>
          <Button
            title="Contact a doctor"
            onPress={console.log(route.params)}
          />
          {/* onPress={onPressLearnMore} */}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F3",
  },
  locationContainer: {
    flex: 1,
    marginBottom: 20,
  },
  body: {
    marginTop: 20,
    alignItems: "left",
    justifyContent: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  infoContainere: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 12,
    paddingTop: 5,
  },
  infoLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00008B",
    marginRight: 12,
  },
  infoText: {
    fontSize: 16,
    flex: 1,
  },
  button: {
    margin: 50,
    paddingTop: "70%",
    justifyContent: "flex-end",
  },
});
