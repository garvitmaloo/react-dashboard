import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
};

const categories = [
  "Clothing",
  "Footwear",
  "Accessories",
  "Gadgets",
  "Utilities"
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [category, setCategory] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value }
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="text-gray-500 dark:text-gray-300">
      <FormControl
        sx={{
          m: 1,
          mb: 0,
          width: 200
        }}
      >
        <Select
          className="dark:border-2 dark:border-gray-100 rounded-lg outline-none"
          multiple
          displayEmpty
          value={category}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em className="text-gray-500 dark:text-gray-300">Category</em>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Category</em>
          </MenuItem>
          {categories.map((catg) => (
            <MenuItem
              key={catg}
              value={catg}
              style={getStyles(catg, category, theme)}
            >
              {catg}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
