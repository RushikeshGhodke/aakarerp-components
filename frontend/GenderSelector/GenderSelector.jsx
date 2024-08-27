import React from 'react'

const GenderSelector = () => {
  return (
    <FormControl>
      <InputLabel id="gender-label">Gender</InputLabel>
      <Select
        sx={{ width: '200px' }}
        labelId="gender-label"
        id="gender"
        label="Gender"
        value={empGender}
        onChange={(e) => setEmpGender(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
      </Select>
    </FormControl>
  )
}

export default GenderSelector