import { memo } from "react"
import { ASide, Content, Description, Row, Title, Date } from "./styles";

const Item = ({ item }) => {
    console.log(item.startDate);

    const formatDate = (d) => {
        // fix Date object bug
        return (d?.toJSON ? 
                d?.toJSON()?.split('T')?.shift(): 
                d?.split('T')?.shift()).split('-').reverse().join('/');
    }

    return(
        <Row>
            <Content>
                <Title numberOfLines={1}>{item.name}</Title>
                <Description numberOfLines={1}>{item.description}</Description>
                <Description numberOfLines={1}>{item.address}</Description>
            </Content>
            <ASide>
                <Date numberOfLines={1}>{formatDate(item.startDate)}</Date>
            </ASide>
        </Row>
    )
}

export default memo(Item);