import { createTheme } from "@mui/material/styles";

export const COLORS = {
  blue: {
    900: "#0d092b",
    700: "#2b77ff",
    500: "#54687d",
    300: "#95a5b6",
    250: "#d9efff",
    200: "#dbdaee",
    100: "#f6fbff",
    80: "#eaf1ff",
    70: "#e3eff4",
    60: "#e3e8f4",
    50: "#eff2f9",
    20: "#D4DCED",
  },
  green: {
    800: "#09AF00",
    700: "#26B15C",
    600: "#259866",
    500: "#00837D",
    200: "#dff7ed",
  },
  red: {
    800: "#FF402E",
    700: "#b73723",
    600: "#ef3c3c",
    500: "#ff3b30",
    400: "#ff6963",
    300: "#f64662",
    200: "#ffd4d4",
    100: "#fbebe8",
  },
  yellow: {
    800: "#FF9C28",
    700: "#b58600",
    250: "#fff2ce",
    200: "#fff6d4",
  },
  black: {
    700: "#2c2d2e",
    400: "#c7ccd6",
    300: "#b8bcc6",
    200: "#bfbfbf",
    100: "#c1c1c1",
    50: "#efefef",
  },
  brown: {
    600: "#4F4350",
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.green[500],
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: COLORS.blue[500],
      dark: "#ffffff",
      contrastText: COLORS.blue[500],
    },
    text: {
      main: COLORS.blue[900],
      light: COLORS.blue[500],
    },
    icons: {
      main: COLORS.blue[900],
      blueLight: COLORS.blue[300],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontSize: "13px",
          fontWeight: "600",
          letterSpacing: "0.08em",
          lineHeight: "20px",
          padding: "11px 16px",
          height: "40px",
          "&.Mui-disabled": {
            backgroundColor: "#6A6CE0",
            opacity: "0.5",
            color: "#ffffff",
          },
        },
        outlined: {
          "&.Mui-disabled": {
            backgroundColor: COLORS.blue[50],
            color: COLORS.blue[500],
          },
          color: COLORS.blue[500],
          border: `1px solid ${COLORS.blue[200]}`,
          "& svg": { fill: COLORS.blue[300] },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          fontWeight: "400",
        },
        h1: {
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "40px",
          color: COLORS.blue[900],
        },
        h4: {
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "20px",
          color: COLORS.blue[900],
        },
        h5: {
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "20px",
          color: COLORS.blue[900],
        },
        h6: {
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "16px",
        },
        body1: {
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "20px",
        },
        body2: {
          fontWeight: 400,
          fontSize: "11px",
          lineHeight: "16px",
          color: COLORS.blue[500],
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: "100%",
          minHeight: "100%",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: COLORS.blue[500],
          padding: 0,
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "20px",
          textTransform: "none",
          borderBottom: "2px solid transparent",
          margin: "inherit",
          minWidth: 0,
          "&:hover": {
            borderBottom: `2px solid ${COLORS.green[500]}`,
            color: COLORS.blue[900],
          },
          "&.Mui-selected": {
            borderBottom: `2px solid ${COLORS.green[500]}`,
            color: COLORS.blue[900],
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          right: 2,
          top: 2,
          minWidth: 5,
          width: 5,
          height: 5,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "15px",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          gap: "6px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          width: "40px",
          height: "40px",
          color: `${COLORS.blue[900]}`,
          border: `1px solid ${COLORS.blue[200]}`,
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: `${COLORS.blue[100]}`,
          },
          "&.Mui-selected": {
            backgroundColor: "#ffffff",
            border: `2px solid ${COLORS.green[500]}`,
            color: `${COLORS.blue[900]}`,
            cursor: "default",
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          width: "100%",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "20px",
          border: "none",
          color: COLORS.blue[900],
        },
        main: {
          border: `1px solid ${COLORS.blue[200]}`,
          borderRadius: "8px",
          margin: "1px",
        },
        columnSeparator: {
          visibility: "visible",
          color: COLORS.blue[200],
          maxHeight: "22px",
          right: -8,
          "& svg": {
            transform: "scale(0.8, 2.5)",
          },
        },
        columnHeader: {
          color: COLORS.blue[500],
          padding: "0 16px",
          "&:active, &:focus, &:hover, &:focus-within": {
            outline: "none",
          },
        },
        columnHeaderTitle: {
          fontWeight: 600,
        },
        sortIcon: {
          fontSize: "20px",
          fill: COLORS.blue[900],
        },
        cell: {
          borderTop: `none`,
          borderBottom: "none",
          padding: "0 16px",
          "&:active, &:focus, &:hover, &:focus-within": {
            outline: "none",
          },
        },
        row: {
          "&:hover": {
            backgroundColor: COLORS.blue[100],
            cursor: "pointer",
          },
          "&:first-of-type": {
            borderTop: "none",
          },
          borderTop: `1px solid ${COLORS.blue[200]}`,
        },
        footerContainer: {
          borderTop: "none",
          minHeight: 0,
          marginTop: "24px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
          height: "auto",
        },
        label: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: COLORS.green[500],
          "&.Mui-checked": {
            color: COLORS.green[500],
          },
          "& svg": {
            transform: "scale(1.1)",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {
          alignItems: "center",
          color: COLORS.blue[900],
          display: "flex",
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "20px",
          paddingLeft: 0,
        },
        iconContainer: {
          marginRight: 0,
        },
        content: {
          padding: 0,
          "&.Mui-selected, &.Mui-focused, &.Mui-selected.Mui-focused": {
            backgroundColor: "#ffffff",
          },
          "&:hover, &.Mui-selected:hover": {
            backgroundColor: COLORS.blue[100],
          },
        },
        group: {
          marginLeft: "24px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          "&[aria-expanded=true]": {
            backgroundColor: COLORS.blue[50],
          },
        },
        "& .MuiAutocomplete-option[aria-expanded=true]": {
          backgroundColor: COLORS.blue[50],
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: COLORS.blue[900],
          "&.MuiPickersDay-today": {
            "&:focus": {
              backgroundColor: "transparent",
            },
            border: `1px solid ${COLORS.green[500]}`,
          },
          "&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
            backgroundColor: COLORS.green[500],
          },
          "&:hover, &:focus": {
            backgroundColor: COLORS.blue[50],
          },
        },
      },
    },
  },
});

export default theme;
