import { memo } from "react"
import { Label, Row } from "./styles";

const Item = ({ item }) => {
    
    return(
        <Row onPress={item.onPress}>
            <Label>{item.label}</Label>
        </Row>
    )
}

export default memo(Item);