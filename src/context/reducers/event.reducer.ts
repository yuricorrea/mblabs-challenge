import Types from "../types/event.types";

export type Event = {
    creator?: string,
    name: string,
    description: string,
    startDate: Date,
    price: string|number,
    address: string,
    id?: number,
    buyers?: string[]
}

type T = {
    nonce: number,
    events: Event[]
}

type A = {
    type: string,
    event?: Event,
    user?: string,
}

const initialState: T = {
    nonce: 0,
    events: [],
}

const dateToString = (event: Event) => {
    const d = new Date(event.startDate);
    return d?.toJSON() || d?.toString() || `${event?.startDate}`;
}

const eventReducer = (state=initialState,action:A) => {
    const { type, event, user } = action;
    let events = [];
    switch (type){
        case Types.CREATE_EVENT:
            events = [
                ...state.events,
                {
                    ...event,
                    startDate: dateToString(event),
                    id: state.nonce,
                }
            ]
            return {
                ...state,
                nonce: state.nonce + 1,
                events,
            }
        case Types.EDIT_EVENT:
            events = state.events.map((e: Event) => {
                if (e.id == event.id){
                    event.buyers = e.buyers || [];
                    event.startDate = dateToString(event);
                    return event;
                }
                return e;
            });
            console.log(events);
            return {
                ...state,
                events,
            }
        case Types.BUY_EVENT:
            return {
                ...state,
                events: state.events.map((e: Event) => {
                    if(e.id == event.id && user){
                        let buyers = [...(e.buyers || [])];
                        buyers.push(user);
                        return {
                            ...e,
                            buyers,
                        }
                    }
                    return e;
                })
            }
        default:
            return state;
    }
}

export default eventReducer;
