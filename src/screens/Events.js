import React  from "react";
import { FlatList, Text, View, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { AtractImage, ButtonText, EventButton, EventsContainer1, EventsContainer2, PageTitle,StyledContainer, Line, SubTitle} from "../components/styles";
import points from "../components/dataAtracts.json"



const Events = () => {
    return (
        <StyledContainer>
        <PageTitle>Destinos Turísticos</PageTitle>
            <EventsContainer1>
                <EventButton>
                    <ButtonText onPress = {atractions}>Aaaaaa</ButtonText>
                </EventButton>
                <EventButton onPress = {dwevents}
                rightButton = {true}>
                    <ButtonText>bbbbbb</ButtonText>
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
        <TouchableOpacity onPress={() =>{item}}>
        <View>
            <SubTitle>{data.name}</SubTitle>
            <AtractImage resizeMode="cover" source={{uri:data.image}}/>
        </View>
        </TouchableOpacity>        
    )
}

const AtractDetails = ({data}) => {
    return (
        <View>
            <AtractImage resizeMode="cover" source={{uri:data.image}}/>
            <Text>{data.name}</Text>
            <Text>{data.type}</Text>
            <Text>{data.describe}</Text>
            <Line />
        </View>
    )
}

const atractions = () => {
    return(
        console.log('aaaa')
    );
};

const dwevents = () => {
    return(
        console.log('bbbb')
    )
};

export default Events;