import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusesStatusBar } from "../components";
const Home = () => {
  const [ntfData, setNftData] = useState(NFTData);

  const handleSearch = (value: string) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    if (filteredData.length) return setNftData(filteredData);
    setNftData(NFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusesStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={ntfData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={({ item, index }) => item?.id || index}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
