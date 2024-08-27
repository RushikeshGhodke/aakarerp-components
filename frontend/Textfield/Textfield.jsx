import React from 'react'
// import as per requirement

const Textfield = () => {
    return (
        <TextField
            label="textfieldLabel"
            variant="outlined"
            value={someValue}
            // onChange={(e) => to whatever you want)}
            sx={{
                width: "300px",
                borderRadius: "1px solid #7D7D7D",
                '& .MuiOutlinedInput-root': {
                    height: '50px',
                },
                '& .MuiFormLabel-root': {
                    height: '50px',
                    lineHeight: '50px',
                    top: '-15px',
                },
            }}
            InputProps={{ sx: { borderRadius: 2 } }}
        />
    )
}

export default Textfield