import { useAppSelector } from "@context";
import { useCallback, useState } from "react";
import { Container, EmptyText, SearchBar } from "./styles";
import TextInput from '@components/TextInput';
import i18n from '@translate';
import { FlatList } from "react-native";
import Item from "./Item";

const EventList = ({ route }) => {

    const events = useAppSelector(state => state?.events?.events) || [];
    const { user } = useAppSelector(state => state?.account?.currentUser) || {};

    const { params } = route || {};
    const mine = params?.mine || false;

    const [term, setTerm] = useState('');

    const compare = (str1: string, str2: string) => {
        console.log(str2);
        if(str2.trim().length == 0)
            return true;
        return ~str1?.toLowerCase()?.indexOf(str2?.trim()?.toLowerCase())
    }

    console.log({
        mine,
        user,
    })

    const filteredEvents = useCallback(() =>{
        return events.filter(e => {
           return ((mine && e.creator == user) || !mine) &&
            (compare(e.title, term) || compare(e.description, term) || compare(e.address, term))
        }) || [];
    }, [events, term]);

    const renderItem = ({ item }) => {
        return <Item item={item} />
    };

    const Empty = (
        <EmptyText>{i18n.t('events.empty')}</EmptyText>
    )

    return(
        <Container>
            <SearchBar>
                <TextInput 
                    placeholder={i18n.t('events.search')}
                    onChangeText={setTerm}
                    value={term}
                />
                <FlatList         
                    data={filteredEvents()}
                    renderItem={renderItem}
                    keyExtractor={(i,k) => `${k}`}
                    ListEmptyComponent={Empty}
                />
            </SearchBar>
        </Container>
    )
}

export default EventList;