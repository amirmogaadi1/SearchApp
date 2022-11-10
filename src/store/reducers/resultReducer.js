import data from "../../assets/ProjectData.json";
import { SEARCH } from "../../constants/ActionTypes";

const initialState = {
    searchText: '',
    filteredResults: data.reduce((acc, val, index) => {
        return {...acc, [index]: val};
    }, {}),
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH: {
            return {
                ...state,
                searchText: action.payload,
                filteredResults: data.filter((el) => {
                    //if no input the return the original
                    if (action.payload === '') {
                        return el;
                    }
                    //return the item which contains the user input
                    else {
                        return el.projectName.toLowerCase().includes(action.payload)
                    }
                })
            };
        }
       
        default:
            return state;
    }
};



export default resultReducer;
