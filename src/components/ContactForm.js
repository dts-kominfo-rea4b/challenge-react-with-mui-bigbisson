// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
    TextField,
    Button,
    Grid,
    Box
} from '@mui/material';

import React, { useState } from 'react';

const ContactForm = ({ handleclick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [inputData, setInputData] = useState({name:'', phone:'', email:'', url:''});

    const inputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputData(values => ({...values, [name]: value}));
    }

    const onSubmit = event => {
        event.preventDefault(); 
        setInputData(inputData);
    };


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form action='' onSubmit={onSubmit}>
                    <Grid item xs={12}>
                        <TextField required fullWidth value={inputData.name} name="name" id="standard-basic" label="Name" variant="standard" onChange={inputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth value={inputData.phone} name="phone" id="standard-basic" label="Phone" variant="standard" onChange={inputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth value={inputData.email} name="email" id="standard-basic" label="Email" variant="standard" onChange={inputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth value={inputData.url} name="url" id="standard-basic" label="Photo URL" variant="standard" onChange={inputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            onClick={() => handleclick(inputData)}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            ADD NEW
                        </Button>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default ContactForm;
