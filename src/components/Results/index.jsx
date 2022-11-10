import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup, Container} from "@mui/material";
import { SWITCH_STATUS } from "../../constants/ActionTypes";

function Results() {
    const dispatch = useDispatch();

    const filteredResults = useSelector((state) => state.resultReducer.filteredResults);
    return (
        <Container maxWidth="sm">
        <ul>
            {Object.keys(filteredResults).map((index) => (
                <div key={index}>
                    <h5>{filteredResults[index].projectName} </h5>
                    <h6>{filteredResults[index].description}</h6>
                    <ButtonGroup>
                        <Button
                            variant={filteredResults[index].status === "CREATED" || (filteredResults[index].status !== "CREATED" && filteredResults[index].status !== "APPROVED" && filteredResults[index].status !== "PUBLISHED") ? 'contained' : 'outlined'}
                            onClick={() =>
                                dispatch({
                                    type: SWITCH_STATUS,
                                    payload: {status: 'CREATED', index},
                                })
                            }
                        >
                            Created
                        </Button>
                        <Button
                            variant={filteredResults[index].status === "APPROVED" ? 'contained' : 'outlined'}
                            onClick={() =>
                                dispatch({
                                type: SWITCH_STATUS,
                                payload: {status: 'APPROVED', index},
                                })
                            }
                        >
                            Approved
                        </Button>
                        <Button
                            variant={filteredResults[index].status === "PUBLISHED" ? 'contained' : 'outlined'}
                            onClick={() =>
                                dispatch({
                                    type: SWITCH_STATUS,
                                    payload: {status: 'PUBLISHED', index},
                                })
                            }
                        >
                            Published
                        </Button>
                    </ButtonGroup>
                </div>
            ))}
        </ul>
        </Container>
    )
}

export default Results;
