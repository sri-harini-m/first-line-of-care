import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
export default function DiagnoseDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Possible Causes:</Text>
          <Text style={styles.infoText}>Common cold</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Symptoms:</Text>
          <Text style={styles.infoText}>Fever</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Severity:</Text>
          <Text style={styles.infoText}>Mild</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Recommended Action:</Text>
          <Text style={styles.infoText}>
            Keep child hydrated, provide rest, and monitor temperature
          </Text>
        </View>
        {/* <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Contact a doctor</Text>
          <Text style={styles.infoText}>Contact(button here)</Text>
        </View> */}
        <View style={styles.button}>
          <Button title="Contact a doctor" />
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
