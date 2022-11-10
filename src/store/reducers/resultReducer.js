import data from "../../assets/ProjectData.json";

const initialState = {
    searchText: '',
    // reduce the data array and convert it to object keys where the index is the key
    filteredResults: data.reduce((acc, val, index) => {
        return {...acc, [index]: val};
    }, {}),
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



export default resultReducer;
