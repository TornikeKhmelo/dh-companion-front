import { COLORS } from "../../styles/Theme";

export const dialogPaperStyles = {
  width: "100%",
  maxWidth: "520px",
  borderRadius: "10px",
};
export const customTitleStyles = {
  width: "100%",
  padding: "36px 28px 24px 28px",
};
export const titleContentWrapper = {
  display: "flex",
  justifyContent: "space-between",
  "& svg": {
    width: "20px",
    height: "20px",
    fill: COLORS.blue[300],
  },
};
