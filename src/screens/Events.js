import React  from "react";
import { FlatList, View, TouchableOpacity} from "react-native";
import { AtractImage, ButtonText, EventButton, EventsContainer1, EventsContainer2, PageTitle,StyledContainer, Line, SubTitle} from "../components/styles";
import points from "../components/dataAtracts.json"



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
            <EventsContainer2>
                <FlatList
                    data = {points}
                    renderItem = {({item}) => <ListItem data={item}/>}
                    ItemSeparatorComponent = {Line}/>
            </EventsContainer2>
        </StyledContainer>
        /*adding fontsize and tittle, also a flatlist to join with the other methods*/
        /*do another .js for calling each other with differents renders*/
        /*between the imagens do another separtor lines for guidance */
        /*this section need to be implemetaded with navigator to work as well */     

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

export default Events;