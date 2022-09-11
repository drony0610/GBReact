import React from 'react';
import {useNavigate} from 'react-router'
import Buttons from '@mui/material/Button';
import {Form} from "../form/Form";

export const ChatsNature = () => {
    const hist = useNavigate();
    return (

        <div>
            <h1>ChatsNature</h1>
            <Form/>
            <Buttons style={{
                backgroundColor: "#172674"
            }}
                     sx={{
                         backgroundColor: "#172674",
                         outline: "1px solid ghostwhite"
                     }} variant="contained" onClick={() => hist(-1)}>Go Back
            </Buttons>
        </div>
    );
};
