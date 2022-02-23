import React  from "react";
import { FlatList, View, TouchableOpacity} from "react-native";
import { AtractImage, ButtonText, EventButton, EventsContainer1, EventsContainer2, PageTitle,StyledContainer, Line, SubTitle} from "../components/styles";
import points from "../components/dataAtracts.json"




const Attracts = ({navigation}) => {
    return (
        <StyledContainer>
        <PageTitle>Destinos Turísticos</PageTitle>
            <EventsContainer1>
                <EventButton onPress={() =>  {}}>
                    <ButtonText>Atrações</ButtonText>
                </EventButton>
                <EventButton onPress={() => navigation.navigate("Events")}
                rightButton = {true}>
                    <ButtonText>Eventos</ButtonText>
                </EventButton>
            </EventsContainer1>
            <EventsContainer2>
                <FlatList
                    data = {points}
                    renderItem = {({item}) => <ListItem data={item}/>}
                    ItemSeparatorComponent = {Line}/>
            </EventsContainer2>
        </StyledContainer> 
    )
};

const ListItem = ({data}) => {
    return (
        <TouchableOpacity onPress={() =>  {}}>
        <View>
            <SubTitle>{data.name}</SubTitle>
            <AtractImage resizeMode="cover" source={{uri:data.image}}/>
        </View>
        </TouchableOpacity>        
    )
}
export default Attracts;