import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import MobileDescription from "./MovieDescription";
import styled from "@emotion/styled";
import CastCard from "./CastCard";
import { CAST } from "../mocks";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

const StyledImg = styled.img`
  width: 4rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const StyledCastContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type Props = {
  synopsis: string;
};

export default function MoviesTabs({ synopsis }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          <StyledTab
            label="General"
            {...a11yProps(0)}
            sx={{ maxWidth: "15rem" }}
          />
          <StyledTab
            label="Elenco"
            {...a11yProps(1)}
            sx={{ maxWidth: "25rem" }}
          />
          <StyledTab
            sx={{ alignItems: "flex-start" }}
            label="Principales Premios"
            {...a11yProps(2)}
          />
          <StyledImg src="./telecine.svg" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MobileDescription synopsis={synopsis} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StyledCastContainer>
          {/* TODO: REMOVE */}
          {CAST.map((c) => (
            <CastCard actor={c.actor} character={c.character} />
          ))}
        </StyledCastContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h2>
          Nominated for 13 Primetime Emmys. 17 wins & 93 nominations total
        </h2>
      </CustomTabPanel>
    </Box>
  );
}
