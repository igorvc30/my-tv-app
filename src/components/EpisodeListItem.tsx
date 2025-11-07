import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { PlayCircleOutline } from "@mui/icons-material";
import { Divider } from "@mui/material";
import type { Episode } from "../types";
import styled from "@emotion/styled";

const temp = {
  Duration: 56,
  EpisodeNumber: 2,
  ID: "EPI-02",
  Image:
    "https://agile-releases.s3.us-east-1.amazonaws.com/tests/assets/0989084209.jpeg",
  SeasonNumber: 1,
  Synopsis:
    "Vanessa e Sir Malcolm vão a uma festa na casa do egiptólogo Sir Ferdinand Lyle e encontram o belo e enigmático Dorian Gray.",
  Title: "Sessão Espírita",
};

export function NestedList() {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   style={{ display: "flex", background: "red" }}
    >
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
      <EpisodeListItem {...temp} />
    </List>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-bottom: 0.8rem;
`;

export default function EpisodeListItem({
  Title,
  Image,
  Synopsis,
  Duration,
  EpisodeNumber,
}: Episode) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleClick} sx={{ opacity: 0.5 }}>
        <ListItemText
          primary={`${EpisodeNumber} ${Title}`}
          slotProps={{
            primary: {
              fontSize: "1.8rem",
              color: "white",
            },
          }}
        />
        <PlayCircleOutline sx={{ fontSize: "3.2rem" }} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledContainer>
          <img style={{ height: "15rem" }} src={Image} />
          <p style={{ marginTop: "1rem" }}>{Synopsis}</p>
          <span
            style={{ fontWeight: "bold" }}
          >{`Duration: ${Duration}min`}</span>
        </StyledContainer>
      </Collapse>
      <Divider style={{ background: "white", opacity: 0.3 }} />
    </div>
  );
}
