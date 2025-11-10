import {
  Add,
  IosShare,
  FiberManualRecord,
  ThumbsUpDownOutlined,
} from "@mui/icons-material";

import IconButton from "../components/IconButton";
import styled from "@emotion/styled";

type Props = {
  synopsis: string;
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export default function MovieDescription({ synopsis }: Props) {
  return (
    <RowContainer>
      <ButtonContainer>
        <IconButton Icon={Add} label="Mi Lista" />
        <IconButton Icon={ThumbsUpDownOutlined} label="Evaluar" />
        <IconButton Icon={FiberManualRecord} label="Grabar" />
        <IconButton Icon={IosShare} label="Compartir" />
      </ButtonContainer>
      <div style={{ marginLeft: "1rem" }}>
        <p style={{ fontSize: "1.8rem" }}>SINOPSE</p>
        <span style={{ fontSize: "1.4rem" }}>{synopsis}</span>
      </div>
    </RowContainer>
  );
}
