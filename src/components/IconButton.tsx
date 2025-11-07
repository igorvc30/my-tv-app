import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import styled from "@emotion/styled";

type Props = {
  label: string;
  Icon: SvgIconComponent;
};

const StyledIconContainer = styled(Box)(() => ({
  border: "2px solid white",
  borderRadius: "50%",
  padding: "4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "0.5rem",
}));

const StyledLabel = styled.span`
  font-size: 1.2rem;
`;

export default function BorderedIconButton({ label, Icon }: Props) {
  return (
    <IconButton
      aria-label={label}
      color="primary"
      title={label}
      sx={{ display: "flex", flexDirection: "column", opacity: 0.5 }}
    >
      <StyledIconContainer>
        <Icon sx={{ fontSize: 20 }} />
      </StyledIconContainer>
      <StyledLabel>{label}</StyledLabel>
    </IconButton>
  );
}
