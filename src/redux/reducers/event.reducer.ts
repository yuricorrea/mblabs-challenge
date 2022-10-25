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

const eventReducer = (state=initialState,action:A) => {
    const { type, event, user } = action;
    switch (type){
        case Types.CREATE_EVENT:
            let events = [
                ...state.events,
                {
                    ...event,
                    id: state.nonce,
                }
            ]

            return {
                ...state,
                nonce: state.nonce + 1,
                events,
            }
        case Types.EDIT_EVENT:
            return {
                ...state,
                events: state.events.map((e: Event) => {
                    if (e.id == event.id){
                        return {
                            ...e,
                            ...event,
                        }
                    }
                    return e;
                })
            }
        case Types.BUY_EVENT:
            return {
                ...state,
                events: state.events.map((e: Event) => {
                    if(e.id == event.id){
                        return {
                            ...e,
                            buyers: [
                                ...e.buyers || [],
                                user
                            ]
                        }
                    }
                })
            }
        default:
            return state;
    }
}

export default eventReducer;
