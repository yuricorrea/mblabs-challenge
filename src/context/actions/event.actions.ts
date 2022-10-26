import { Event } from "../reducers/event.reducer";
import Types from "../types/event.types";

export const createEvent = (event: Event) => (dispatch, getState): boolean => {
    const { currentUser } = getState().account;
    if (!currentUser?.user){
        return false;
    }
    event.creator = currentUser.user;
    event.buyers = [];
    dispatch({
        type: Types.CREATE_EVENT,
        event,
    });
    return true;
};

export const editEvent = (event: Event) => (dispatch, getState): boolean => {
    const { currentUser } = getState().account;
    const { events } = getState().events;
    const currentEvent = events.find(e => e.id == event.id);
    if (!currentUser?.user || currentEvent.creator != currentUser.user){
        return false;
    }
    dispatch({
        type: Types.EDIT_EVENT,
        event,
    });
    return true;
};

export const buyEvent = (eventId: string|number) => (dispatch, getState): boolean => {
    const { currentUser } = getState().account;
    const { events } = getState().events;
    const currentEvent = events?.find(e => e.id == eventId) || {};
    if(currentEvent?.buyers?.includes(currentUser?.user)){
        return false;
    }
    dispatch({
        type: Types.BUY_EVENT,
        user: currentUser?.user,
        event: currentEvent
    })
    return true;

} 

