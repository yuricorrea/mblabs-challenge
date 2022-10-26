import { useAppDispatch, useAppSelector } from "@context";
import { Event } from "@context/reducers/event.reducer";
import { Label } from "@components/TextInput/styles";
import { Container, Content, Div, Row, Text, Title, RowDivided } from "./styles";
import i18n from "@translate";
import Button from "@components/Button";
import { buyEvent } from "@context/actions/event.actions";

const EventSingle = ({ route, navigation }) => {

    const { params } = route || {};
    const event = params?.event || {};

    const dispatch = useAppDispatch();
    const events = useAppSelector(state => state?.events?.events) || [];
    const currentUser = useAppSelector(state => state?.account?.currentUser) || [];
    const currentEvent = events.find(e => e.id == event.id);
    console.log(currentEvent);
    const isMine = currentUser?.user == currentEvent?.creator;
    const bought = currentEvent?.buyers?.includes(currentUser?.user);

    const buttonLabel = isMine ? 'edit' : bought ? 'bought' : 'buy';

    const formatPrice = currentEvent?.price > 0 ? `${i18n.t('event.symbol')} ${currentEvent.price}` : i18n.t('event.free');
    const formatDate = (new Date(currentEvent?.startDate))?.toLocaleString() || `${currentEvent?.startDate || ''}`;

    const handlePress = () => {
        if(isMine){
            return navigation.navigate('edit_event', { event: currentEvent });
        }
        if(!bought){
            const eventDate = new Date(currentEvent?.startDate);
            if(eventDate < new Date()){
                alert(i18n.t('event.dateError'));
                return;
            }
            dispatch(buyEvent(currentEvent?.id));
        }
        return;
    }

    return (
        <Container>
            <Content>
                <Row>
                    <Title>{currentEvent?.name}</Title>
                </Row>
                <RowDivided>
                    <Div>
                        <Label>{i18n.t('event.startDate')}</Label>
                        <Text>{formatDate}</Text>
                    </Div>
                    <Div>
                        <Label>{i18n.t('event.price')}</Label>
                        <Text>{formatPrice}</Text>
                    </Div>
                </RowDivided>
                <Row>
                    <Label>{i18n.t('event.address')}</Label>
                    <Text>{currentEvent.address}</Text>
                </Row>
                <Row>
                    <Label>{i18n.t('event.description')}</Label>
                    <Text>{currentEvent.description}</Text>
                </Row>
                <Row>
                    <Label>{i18n.t('event.attenders')}</Label>
                    <Text>{currentEvent.buyers?.length ?? 0}</Text>
                </Row>
               <Row>
                    <Button onPress={handlePress} label={i18n.t(`event.${buttonLabel}`)} />
               </Row>
            </Content>
        </Container>
    )
}

export default EventSingle;