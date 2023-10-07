import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const DoctorDetails = ({ route, navigation }) => {
  /* 2. Get the param */
  const { id, color, icon, name, occ, firm, education } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.photo} source={{ uri: icon }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{occ}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          <View style={styles.sectionContent}>
            {education.map((event, i) => {
              return (
                <View key={i}>
                  <Text style={styles.sectionItem}>{event}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hospital</Text>

          <View style={styles.sectionContent}>
            <Text style={styles.sectionItem}>{firm}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.sectionContent}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Phone Number:</Text>
              <Text style={styles.sectionItemDesc}>7093884469</Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Email:</Text>
              <Text style={styles.sectionItemDesc}>markaedw16@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    color: "gray",
  },
  body: {},
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  sectionContent: {
    marginTop: 8,
  },
  sectionItem: {
    marginVertical: 4,
  },
  sectionItemTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  sectionItemDesc: {
    fontSize: 14,
    color: "gray",
  },
});

export default DoctorDetails;
