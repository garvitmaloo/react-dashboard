import * as React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { AdvancedAnalyticsCardProps } from "../../types/prop_types";

const options = ["See Details", "Report issue", "Examine", "Others"];

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <span onClick={handleClick}>
        <BsThreeDotsVertical
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
        />
      </span>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default function AdvancedAnalyticsCard({
  cardTitle,
  cardSubtitle,
  customStyles,
  AnalyticsComponent
}: AdvancedAnalyticsCardProps): JSX.Element {
  return (
    <div
      className={`p-4 rounded shadow-md shadow-gray-200 dark:shadow-gray-800 text-gray-950 dark:text-gray-50 ${customStyles?.join(
        " "
      )}`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">{cardTitle}</h1>
          {cardSubtitle && (
            <h2 className="text-md font-semibold text-gray-500 dark:text-gray-300">
              {cardSubtitle}
            </h2>
          )}
        </div>

        <LongMenu />
      </div>

      {AnalyticsComponent}
    </div>
  );
}
