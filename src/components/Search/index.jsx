import React from 'react'
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import { SEARCH } from "../../constants/ActionTypes";
import {useNavigate} from "react-router-dom";



function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filteredResults = useSelector((state) => state.resultReducer.filteredResults);
    const searchText = useSelector((state) => state.resultReducer.searchText);

    let inputHandler = (e) => {
        //convert input text to lower case
        const searchTextLowercase = e.target.value.toLowerCase();
        const isBackspacePressed = e.key  === "Backspace";
        if (searchTextLowercase.length >= 3 || (isBackspacePressed && searchTextLowercase.length >= 3)) {
            dispatch({
                type: SEARCH,
                payload: searchTextLowercase,
            });
        } else if (searchTextLowercase.length <= 2) {
            dispatch({
                type: SEARCH,
                payload: "",
            });
        }
    };
    return (
        <div className="main">
            <h1>Project Search</h1>
            <div className="search">
                <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    onKeyUp={inputHandler}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Search project'
                    defaultValue={searchText}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" disabled={filteredResults.length === 0 || searchText.length < 3} onClick={(() => navigate('/results'))}>
                    <SearchIcon />
                </IconButton>
                </Paper>
            </div>
            {filteredResults.length === 0 ?   <h1> No project found.</h1>
                : null  }
        </div>
    )
}

export default Search;
