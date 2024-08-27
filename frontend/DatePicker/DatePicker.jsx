import React from 'react'
// add proper imports

const DatePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                id="id"
                label="Label"
                onChange={(date) => {
                    // do whatever your code does after date change
                }}
                slots={{
                    textField: (params) => (
                        <TextField
                            {...params}
                            sx={{
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    fontSize: '1rem',
                                },
                            }}
                        />
                    ),
                }}
            />
        </LocalizationProvider>
    )
}

export default DatePicker