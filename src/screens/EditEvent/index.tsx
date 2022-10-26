import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { Container, Row, MiniRow, Label } from './styles';
import i18n from '@translate';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { useAppDispatch } from '@context';
import { createEvent, editEvent } from '@context/actions/event.actions';

const EditEvent = ({ navigation, route }) => {

    const { params } = route || {};
    const currentEvent = params?.event || {};

    const [name, setName] = useState(currentEvent?.name || '');
    const [startDate, setStartDate] = useState(currentEvent?.startDate ? new Date(currentEvent?.startDate) : new Date());
    const [price, setPrice] = useState(currentEvent?.price || 0);
    const [description, setDescription] = useState(currentEvent?.description || '');
    const [address, setAddress] = useState(currentEvent?.address || '');

    const dispatch = useAppDispatch();

    const pricePrefix = `${i18n.t('event.symbol')} `;

    const getPrice = (value) => {
        return (`${value}`)?.replace(pricePrefix,'');
    }

    const handleChangePrice = (value) => {
        if(value.length < 3){
            return;
        }
        setPrice(getPrice(value));
    }

    const handleSaveEvent = () => {
        const event = {
            name,
            description,
            startDate,
            address,
            price: getPrice(price)
        }
        const response = dispatch(
            isNaN(currentEvent?.id) ? createEvent(event) : editEvent({
                ...currentEvent,
                ...event
            })
        );
        if(!response){
            alert(i18n.t('editEvent.error'));
            return;
        }
        alert(i18n.t('editEvent.success'));
        navigation.goBack();
    }

    return(
        <Container>
            <Row>
                <TextInput 
                    label={i18n.t('event.name')}
                    onChangeText={setName}
                    value={name}
                />
            </Row>
            <Row>
                <TextInput 
                    label={i18n.t('event.address')}
                    onChangeText={setAddress}
                    value={address}
                />
            </Row>
            <Row>
                <TextInput 
                    label={i18n.t('event.description')}
                    onChangeText={setDescription}
                    value={description}
                    multiline={true}
                    numberOfLines={4}

                />
            </Row>
            <Row>
                <Label>{i18n.t('event.startDate')}</Label>
                <DatePicker 
                    date={startDate} 
                    onDateChange={setStartDate}
                    minimumDate={new Date()} 
                    mode={"datetime"}
                />
            </Row>
            <MiniRow>
                <TextInput 
                    label={i18n.t('event.price')}
                    value={`${pricePrefix}${price}`}
                    keyboardType={'numeric'}
                    onChangeText={handleChangePrice}
                />
            </MiniRow>
            <Row>
                <Button 
                    label={i18n.t('event.save')}
                    onPress={handleSaveEvent}
                />
            </Row>
        </Container>
    )
}

export default EditEvent;
