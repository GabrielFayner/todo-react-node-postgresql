import { styled } from "@/global/stitches.config";

export const Container = styled("main", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "$8 $4",
  gap: "$5",
});

export const Header = styled("div", {
  backgroundColor: "$primary",
  width: "508px",
  maxWidth: "100%",
  minHeight: "64px",
  borderRadius: "$lg",
  boxShadow: "0 12px 32px -18px $shadow",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
});

export const Title = styled("h1", {
  fontSize: "$xl",
  lineHeight: 1.2,
});

export const InputWrapper = styled("div", {
  width: "508px",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const InputLabel = styled("label", {
  fontSize: "$sm",
  fontWeight: 600,
  color: "$textLight",
});

export const TaskInput = styled("input", {
  width: "100%",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
  color: "$text",
  height: "52px",
  padding: "0 $4",
  fontSize: "$md",
  transition: "all 0.2s ease",
  boxShadow: "0 10px 24px -20px $shadow",
  "&::placeholder": {
    color: "#a2a8bf",
  },
  "&:focus": {
    outline: "none",
    borderColor: "$primary",
    boxShadow: "0 0 0 3px rgba(168,121,230,0.22)",
  },
});

export const TaskButton = styled("button", {
  border: "none",
  backgroundColor: "$primary",
  minWidth: "160px",
  height: "50px",
  borderRadius: "$full",
  color: "white",
  fontWeight: 700,
  fontSize: "$sm",
  cursor: "pointer",
  transition: "background-color 0.2s ease, transform 0.2s ease",
  "&:hover": {
    backgroundColor: "$primaryDark",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
});
