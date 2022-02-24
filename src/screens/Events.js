import React  from "react";
import { FlatList, View, TouchableOpacity} from "react-native";
import { EventsImage, ButtonText, EventButton, EventsContainer1, EventsContainer3, PageTitle,StyledContainer, Line, SubTitle, Informations, Text1, Text2} from "../components/styles";
import points from "../components/dataEvents.json"



const Events = ({navigation}) => {
    return (
        <StyledContainer>
        <PageTitle>Destinos Turísticos</PageTitle>
            <EventsContainer1>
                <EventButton onPress={() => navigation.navigate("Attracts")}>
                    <ButtonText>Atrações</ButtonText>
                </EventButton>
                <EventButton onPress={() =>  {}}
                rightButton = {true}>
                    <ButtonText>Eventos</ButtonText>
                </EventButton>
            </EventsContainer1>
            <EventsContainer3>
                <FlatList
                    data = {points}
                    renderItem = {({item}) => <ListItem data={item}/>}
                    ItemSeparatorComponent = {Line}/>
            </EventsContainer3>
        </StyledContainer>
    )
};

const ListItem = ({data}) => {
    return (
        <TouchableOpacity onPress={() =>  {}}>
        <View>
            <Text1>
            <EventsImage resizeMode="cover" source={{uri:data.image}}/> 
            {data.name}{'\n'}
            </Text1>
        </View>
        </TouchableOpacity>        
    )
}

export default Events;