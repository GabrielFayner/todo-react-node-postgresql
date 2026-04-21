import { styled } from "@/global/stitches.config";

export const Todos = styled("div", {
  backgroundColor: "$surface",
  width: "508px",
  maxWidth: "100%",
  height: "383px",
  overflowY: "auto",
  borderRadius: "$lg",
  border: "1px solid $border",
  boxShadow: "0 10px 30px -20px $shadow",
  padding: "$3",
});

export const TodoRow = styled("div", {
  display: "grid",
  gridTemplateColumns: "24px 1fr auto auto",
  alignItems: "center",
  gap: "$3",
  padding: "$3",
  borderRadius: "$md",
  "& + &": {
    marginTop: "$2",
  },
  "&:hover": {
    backgroundColor: "#f8f7ff",
  },
});

export const StatusButton = styled("button", {
  width: "18px",
  height: "18px",
  borderRadius: "$full",
  border: "2px solid $textLight",
  backgroundColor: "white",
  cursor: "pointer",
});

export const TodoName = styled("p", {
  fontSize: "$md",
  color: "$text",
  textAlign: "left",
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const IconButton = styled("button", {
  border: "none",
  background: "transparent",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "$textLight",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "$primaryDark",
  },
  variants: {
    danger: {
      true: {
        "&:hover": {
          color: "$danger",
        },
      },
    },
  },
});
