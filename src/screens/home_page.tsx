import React from "react";
import { View , Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FormField, TitleText, FloatButton, GridBasePage, ModalRegister,   ChecklistList} from "../components";


const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [closeModal, setCloseModal] = React.useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModals = () => {
    setModalVisible(false);
  };

  return (
    <GridBasePage>
        <SafeAreaView>
        <TitleText text="Home Page" />
        <ChecklistList />
        {/* <FormField /> */}
        <FloatButton onPress={openModal}/>
        <ModalRegister closeModal={closeModals} modalVisible={modalVisible} />


        </SafeAreaView>
    </GridBasePage>
  );
};

export default HomeScreen;
