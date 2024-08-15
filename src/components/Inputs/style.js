import { COLORS } from "../../styles/Theme";

const customInputStyles = {
  width: "100%",
  flex: "1 0 0",
  "&.disabled-multiselect": {
    "& .MuiInputLabel-root": {
      color: COLORS.black[200],
    },
  },
  "& .MuiInputLabel-root": {
    top: "-6px",
    left: "3px",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    color: COLORS.blue[500],
    "&.Mui-focused": {
      color: COLORS.blue[500],
    },
    "&[data-shrink=true]": {
      top: "-3px",
    },
  },
  "& .MuiFilledInput-root": {
    border: "none",
    minWidth: "100px",
    height: "100%",
    borderRadius: "10px",
    fontSize: "15px",
    color: COLORS.blue[900],
    backgroundColor: "#FFFEFC",
    alignItems: "end",
    padding: "0 16px",
    "&:hover, &.Mui-focused, &.Mui-disabled": {
      backgroundColor: "#FFFEFC",
    },
    "&:before, &:after": {
      display: "none",
    },
    "&:hover, &.Mui-focused": {
      backgroundColor: "#FFFEFC",
    },
    "& fieldset": {
      border: "none",
    },
    "& svg": {
      fill: COLORS.blue[300],
      fontSize: "17px",
    },
    "& .MuiFilledInput-input": {
      padding: 0,
      mb: "3px",
      pt: "14px",
    },
    "& .MuiAutocomplete-clearIndicator": {
      marginRight: "22px",
    },
  },
};

const customMultilinesInputStyles = {
  width: "100%",
  flex: "1 0 0",
  "& .MuiInputLabel-root": {
    top: "-3px",
    left: "3px",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    color: COLORS.blue[500],
    "&.Mui-focused": {
      color: COLORS.blue[500],
    },
    "& .MuiFormLabel-asterisk": {
      color: COLORS.red[600],
    },
  },
  "&.MuiTextField-root": {
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: 0,
      right: 0,
      fontSize: "11px",
      fontWeight: 400,
      lineHeight: "19px",
      letterSpacing: "0em",
      color: COLORS.blue[500],
    },
  },
  "&.white-text-area .MuiFilledInput-root": {
    backgroundColor: "#ffffff",
  },
  "& .MuiFilledInput-root": {
    border: "none",
    minWidth: "100px",
    height: "100%",
    fontSize: "15px",
    color: COLORS.blue[900],
    backgroundColor: COLORS.blue[50],
    alignItems: "end",
    padding: "20px 10px 20px 16px",
    "&:before, &:after": {
      display: "none",
    },
    "&:hover, &.Mui-focused, &.Mui-disabled": {
      backgroundColor: COLORS.blue[50],
    },
    "&.white-text-area:hover, &.white-text-area.Mui-focused, &.white-text-area.Mui-disabled":
      {
        backgroundColor: "#ffffff",
      },
    "& .MuiFilledInput-input": {
      padding: 0,
    },
  },
};

export { customInputStyles, customMultilinesInputStyles };
