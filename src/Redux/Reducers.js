import { combineReducers } from "redux";

let listData = (iniState = [{ time: '9am-10am' }, { time: '10am-11am' }, { time: '11am-12pm' }, { time: '12pm-1pm' }, { time: '1pm-2pm' }, { time: '2pm-3pm' }, { time: '3pm-4pm' }, { time: '4pm-5pm' }], action) => {
    switch (action.type) {
        case "LIST": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
};

let allReducers = combineReducers({
    listData
});

export default allReducers;