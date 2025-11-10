import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import styled from "@emotion/styled";
import List from "@mui/material/List";

import type { Episode } from "../types";
import { useMemo } from "react";
import EpisodeListItem from "./EpisodeListItem";

interface TabPanelProps {
  children?: React.ReactNode;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, ...other } = props;

  return (
    <div
      role="tabpanel"
      id="episodes-list"
      aria-labelledby="episodes-list"
      style={{
        display: "flex",
        maxHeight: "90%",
      }}
      {...other}
    >
      <Box
        sx={{
          p: 2,
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </div>
  );
}

const StyledTab = styled(Tab)(() => ({
  minWidth: 0,
  fontFamily: "Nunito",
  fontWeight: "bold",
  fontSize: "1.8rem",
  opacity: 0.5,
  color: "white",
  "&.Mui-selected": {
    background: "transparent",
    color: "white",
    opacity: 1,
  },
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  "& .MuiTab-wrapper": {
    alignItems: "flex-start", // Align content to the start (left)
    justifyContent: "flex-start", // Justify content to the start (left)
  },
}));

function a11yProps(index: number) {
  return {
    id: `season-tab-${index}`,
    "aria-controls": `season-tabpanel-${index}`,
  };
}

type Props = {
  episodes?: Array<Episode>;
};

export default function EpisodesTabs({ episodes }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log("handleChange ... ", newValue);
  };

  const filteredList = useMemo(() => {
    if (!episodes) {
      return [];
    }
    const filteredEpisodes = episodes?.filter(
      (item) => item.SeasonNumber === value + 1,
    );

    return filteredEpisodes;
  }, [value, episodes]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#4B795B",
              height: "2px",
            },
            "& .MuiTab-root": {
              borderBottom: "1px solid lightgray" /* Border for all tabs */,
            },
          }}
        >
          <StyledTab label="T1" {...a11yProps(0)} sx={{ maxWidth: "5rem" }} />
          <StyledTab label="T2" {...a11yProps(1)} sx={{ maxWidth: "5rem" }} />
          <StyledTab
            label="T3"
            {...a11yProps(2)}
            sx={{ alignItems: "flex-start" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel>
        <List component="nav" aria-labelledby="nested-list-subheader">
          {filteredList.length ? (
            filteredList.map((item) => <EpisodeListItem {...item} />)
          ) : (
            <h2 style={{ color: "white" }}>Temporada indisponível</h2>
          )}
        </List>
      </CustomTabPanel>
    </Box>
  );
}
