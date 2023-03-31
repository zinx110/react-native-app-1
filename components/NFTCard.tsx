import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";
interface props {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: any;
    bids: {
      id: string;
      name: string;
      price: number;
      image: any;
      date: string;
    }[];
  };
}

const NFTCard = ({ data }: props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,

        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.font,
          margin: SIZES.base,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() =>
            navigation.navigate("Details" as never, { data } as never)
          }
        />
      </View>
    </View>
  );
};

export default NFTCard;
