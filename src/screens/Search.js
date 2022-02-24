import React, { useEffect, useState } from "react";
import { FlatList, View} from "react-native";
import { Colors, Line, StyledContainer, StyledFormArea, StyledSearchTextInput, Text1, Text2} from "../components/styles";
import points from "../components/pontos.json";

const {darkLight} = Colors
const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(points);

    useEffect(() => {
        if (searchText ===''){
            setList(points);
        } else {
            setList(
                points.filter(
                    (item) =>
                        item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
                        item.type.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    return (
        <StyledContainer>
            <StyledFormArea>
                <StyledSearchTextInput
                placeholder = "Digite aqui"                    
                placeholderTextColor = {darkLight}
                value = {searchText}
                onChangeText ={(t) => setSearchText(t)}
                />
            </StyledFormArea>
            <FlatList
                data = {list}
                renderItem = {({item}) => <ListItem data={item}/>}
                keyExtractor = {(item) => item.lat}
                ItemSeparatorComponent = {Line}
            />
        </StyledContainer>
    );
};

const ListItem = ({data}) => {
    return (
        <View>
            <Text1>{data.name}</Text1>
            <Text2>{data.type}</Text2>
        </View>
        
    )
}
export default Search;