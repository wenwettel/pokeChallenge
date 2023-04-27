import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import {DropdownStyles} from './DropdownStyles'

function Dropdown({ options, selections, setSelections }) {
 
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200
      },
    },
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelections(value);
  };

  return (
    <DropdownStyles>
      <FormControl>
        <InputLabel id="drop-down-multiple-label">Pokemon Type</InputLabel>
        <Select
          labelId="drop-down-multiple-label"
          id="drop-down-multiple"
          multiple
          value={selections}
          onChange={handleChange}
          input={<OutlinedInput label="Pokemon Type"/>}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selections.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </DropdownStyles>
  );
}

export default Dropdown;
