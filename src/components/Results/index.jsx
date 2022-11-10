import React from 'react'
import { useSelector} from "react-redux";
import {Container} from "@mui/material";

function Results() {
    const filteredResults = useSelector((state) => state.resultReducer.filteredResults);
    return (
        <Container maxWidth="sm">
        <ul>
            {Object.keys(filteredResults).map((index) => (
                <div key={index}>
                    <h5>{filteredResults[index].projectName} </h5>
                    <h6>{filteredResults[index].description}</h6>
                  
                </div>
            ))}
        </ul>
        </Container>
    )
}

export default Results;
