import { memo } from "react";
import { Event } from "@context/reducers/event.reducer";
import { ASide, Content, Description, Row, Title, Date } from "./styles";

type T = {
    item: Event,
    onPress: Function
}

const Item = ({ item, onPress }: T) => {

    const formatDate = (d) => {
        // fix Date object bug
        return (d?.toJSON ? 
                d?.toJSON()?.split('T')?.shift(): 
                d?.split('T')?.shift())?.split('-')?.reverse()?.join('/') || '';
    }

    return(
        <Row onPress={onPress}>
            <Content>
                <Title numberOfLines={1}>{item?.name}</Title>
                <Description numberOfLines={1}>{item?.description}</Description>
                <Description numberOfLines={1}>{item?.address}</Description>
            </Content>
            <ASide>
                <Date numberOfLines={1}>{formatDate(item?.startDate)}</Date>
            </ASide>
        </Row>
    )
}

export default memo(Item);