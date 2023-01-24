import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ShopCard from "./ShopCard";

const FeatureRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
              <Text className="font-bold text-lg">{title}</Text>
              <ArrowRightIcon/>
          </View>
          <Text className="text-xs px-4 text-gray-500">{description}</Text>
          <ScrollView
              horizontal
              contentContainerStyle={{
                  paddingHorizontal: 15,

              }}
              showsHorizontalScrollIndicator={false}
              className="pt-4"
          >
              {/* Shop Cards... */}
              <ShopCard
               id={1}
              imgUrl="https://links.papareact.com/gn7"
              title="Hot sushi"
              rating={4.5}
              genre="Japanese"
              address="15 broklyne st."
              short_description="test description"
              dishes={[]}
              long={40}
              lat={80}
              />
              <ShopCard
               id={1}
              imgUrl="https://links.papareact.com/gn7"
              title="Hot sushi"
              rating={4.5}
              genre="Japanese"
              address="15 broklyne st."
              short_description="test description"
              dishes={[]}
              long={40}
              lat={80}
              />
              <ShopCard
               id={1}
              imgUrl="https://links.papareact.com/gn7"
              title="Hot sushi"
              rating={4.5}
              genre="Japanese"
              address="15 broklyne st."
              short_description="test description"
              dishes={[]}
              long={40}
              lat={80}
              />
          </ScrollView>
    </View>
  );
};

export default FeatureRow;
