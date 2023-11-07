import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from "react-native";
import { Stack } from "expo-router";
import StarRating from "react-native-star-rating-widget";

import { data } from "../contants/data";

const Home = () => {
  const handleOpenLink = (link) => () => {
    Linking.openURL(link);
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "Movie",
        }}
      />
      <View style={{ padding: 16 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ width: 200 }}>
              <TouchableOpacity onPress={handleOpenLink(item.image.uri)}>
                <Image
                  source={item.image}
                  style={{ height: 200, width: 200, borderRadius: 20 }}
                />
              </TouchableOpacity>
              <Text style={{ opacity: 0.6, fontSize: 12, marginTop: 8 }}>
                {item.category}
              </Text>
              <StarRating
                rating={item.rating}
                starSize={20}
                style={{ marginTop: 8, marginBottom: 8 }}
              />
              <TouchableOpacity onPress={handleOpenLink(item.image.uri)}>
                <Text style={{ fontSize: 20, fontWeight: 500 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: 16 }}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
