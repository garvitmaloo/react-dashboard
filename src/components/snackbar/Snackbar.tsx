import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useDispatch } from "react-redux";
import { setSnackbarOpen } from "../../store/snackbarSlice";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar({ message }: { message: string }) {
  const dispatch = useDispatch();
  const [state, setState] = React.useState<State>({
    open: true,
    vertical: "top",
    horizontal: "center"
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    dispatch(setSnackbarOpen({ isOpen: false, message: "" }));
  };

  return (
    <Box sx={{ width: 500, zIndex: 10000 }}>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </Box>
  );
}
