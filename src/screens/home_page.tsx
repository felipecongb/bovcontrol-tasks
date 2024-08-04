import React from "react";
import { View , Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FormField, TitleText, FloatButton, GridBasePage,   ChecklistList} from "../components";

const HomeScreen: React.FC = () => {
  return (
    <GridBasePage>
        <SafeAreaView>
        <TitleText text="Home Page" />
        <ChecklistList />
        {/* <FormField /> */}
        <FloatButton />


        </SafeAreaView>
    </GridBasePage>
  );
};

export default HomeScreen;
