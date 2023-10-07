import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { Linking } from "react-native";
export default function ShopPage() {
  const rehabData = [
    {
      id: "1",
      image: require("../assets/eno.png"),
      type: "Eno",
      link: "https://www.apollopharmacy.in/otc/dabur-pudin-hara-capsules",
    },
    {
      id: "2",
      image: require("../assets/gaviscon.png"),
      type: "Gaviscon",
      link: "https://www.apollopharmacy.in/otc/dabur-pudin-hara-capsules",
    },
    {
      id: "3",
      image: require("../assets/pudirrhara.png"),
      type: "Pudin Hara",
      link: "https://www.apollopharmacy.in/otc/dabur-pudin-hara-capsules",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Linking.openURL(item.link);
      }}
    >
      <Image style={styles.image} resizeMode="cover" source={item.image} />
      <View style={styles.cardBody}>
        <Text style={styles.type}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredData = rehabData.filter((item) => {
    return item.type.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search programs..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.rehabListContainer}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchInputContainer: {
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  rehabListContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 175,
    width: "100%",
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
