import { useAppSelector } from "@redux";
import { Container, Row } from "./styles";

const EventList = () => {
    const events = useAppSelector(state => state?.events?.events) || [];
    console.log(events);
    return(
        <Container>
            <Row>

            </Row>
        </Container>
    )
}

export default EventList;