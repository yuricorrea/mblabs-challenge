import { FlatList } from "react-native";
import i18n from "@translate";
import { useAppDispatch, useAppSelector } from "@context";
import { doLogout } from "@context/actions/account.actions";
import Item from "./Item";
import { Container, Content, Title } from "./styles";

const Menu = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(state => state.account.currentUser);

    const handleCreateEvent = () => {
        navigation.navigate('create_event');
    }

    const handleOpenMyEvents = () => {
        navigation.navigate('event_list');
    }

    const handleOpenMyPurchases = () => {
        navigation.navigate('purchases', { purchases: true });
    }

    const handleLogout = () => {
        dispatch(doLogout());
    }

    const items = [
        {
            label: i18n.t('menu.createEvent'),
            onPress: handleCreateEvent,
        },
        {
            label: i18n.t('menu.myEvents'),
            onPress: handleOpenMyEvents,
        },
        {
            label: i18n.t('menu.purchases'),
            onPress: handleOpenMyPurchases,
        },
        {
            label: i18n.t('menu.exit'),
            onPress: handleLogout,
        }
    ]

    return(
        <Container>
            <Title>{i18n.t('menu.welcome', { user: currentUser.user })}</Title>
            <Content>
                {items.map((item,i) =>  <Item key={i} item={item} />)}
            </Content>
        </Container>
    )
}

export default Menu;