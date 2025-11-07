import {
  Add,
  IosShare,
  FiberManualRecord,
  ThumbsUpDownOutlined,
} from "@mui/icons-material";

import IconButton from "../components/IconButton";
import styled from "@emotion/styled";

type Props = {
  sinopse: string;
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function MobileDescription({ sinopse }: Props) {
  return (
    <RowContainer>
      <RowContainer>
        <IconButton Icon={Add} label="Mi Lista" />
        <IconButton Icon={ThumbsUpDownOutlined} label="Evaluar" />
        <IconButton Icon={FiberManualRecord} label="Grabar" />
        <IconButton Icon={IosShare} label="Compartir" />
      </RowContainer>
      <div style={{ marginLeft: "1rem" }}>
        <p style={{ fontSize: "1.8rem" }}>SINOPSE</p>
        <span style={{ fontSize: "1.4rem" }}>
          Contos de personagens clássicos como Drácula, Frankenstein e Dorian
          Gray estão reunidos nesta série de terror ambientada nas ruas da
          Londres vitoriana.
        </span>
      </div>
    </RowContainer>
  );
}
