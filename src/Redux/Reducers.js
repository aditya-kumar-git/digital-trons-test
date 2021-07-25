import { combineReducers } from "redux";

let listData = (iniState = [{ time: '9am-10am',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '10am-11am',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '11am-12pm',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '12pm-1pm',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '1pm-2pm',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '2pm-3pm',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '3pm-4pm',FirstName:'',LastName:'',PhoneNumber:'' }, { time: '4pm-5pm',FirstName:'',LastName:'',PhoneNumber:'' }], action) => {
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