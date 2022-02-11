import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Colors, Line, StyledContainer, StyledFormAreaSearch, StyledTextInput } from "../components/styles";
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
                        item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    /*useEffect(() => {
        if (searchText ===''){
            setList(points);
        } else {
            setList(
                points.filter(
                    (item) =>
                        item.type.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);*/

    return (
        <StyledContainer>
            <StyledFormAreaSearch>
                <View>
                    <StyledTextInput //mudar aqui pro styled MyInputText, fazer uma props e colocar iconezinho da lupa
                    placeholder = "Digite aqui"
                    placeholderTextColor = {darkLight}
                    value = {searchText}
                    onChangeText ={(t) => setSearchText(t)}
                    />
                </View>
            </StyledFormAreaSearch>
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
            <Text>{data.name}</Text>
            <Text>{data.type}</Text>
        </View>

    )
}
export default Search;