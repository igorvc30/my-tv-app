import styled from "@emotion/styled";
import { Activity, useEffect, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IconButton } from "@mui/material";
import { Close, Reorder } from "@mui/icons-material";
import MoviesTabs from "../components/MoviesTabs";
import EpisodesTabs from "../components/EpisodesTabs";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";

import getEpisodes from "../api/getEpisodes";
import getMovie from "../api/getMovie";
import { ADDITIONAL_DATA, CAST } from "../mocks";
import type { Episode, Movie_Experimental } from "../types";
import React from "react";

type BackgroundProps = {
  image?: string;
};

const Background = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-image:
    url(${(props: BackgroundProps) => props?.image}), url("./placeholder.jpg");
  background-size: cover; /* Ensures the image covers the entire area, maintaining aspect ratio */
  background-position: center; /* Centers the image within the viewport */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-attachment: fixed; /* Keeps the image fixed while content scrolls (optional) */
  margin: 0; /* Removes default body margin */
  padding: 0; /* Removes default body padding */
  min-height: 65vh; /* Ensures the body takes up the full viewport height */
  width: 100vw; /* Ensures the body takes up the full viewport width */
  box-shadow: inset 20vw 200px 50px rgba(1, 1, 1, 0.5);
`;

const Header = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 5rem;

  @media (max-width: 720px) {
    margin-left: 2rem;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  @media (max-width: 720px) {
    font-size: 4rem;
  }
`;

const Heading = styled.span`
  font-size: 2rem;
  opacity: 0.5;
`;

const Footer = styled.div`
  min-height: 35vh;
  background: #0f1316;
  padding-left: 5rem;
  padding-top: 2rem;
  @media (max-width: 720px) {
    padding-left: 2rem;
  }
`;

export default function MoviesPage() {
  const [showEpisodes, setShowEpisodes] = useState(false);

  const { data: episodesData } = useQuery<Array<Episode>>({
    queryKey: ["getEpisodes"],
    queryFn: getEpisodes,
    select: (data) => data.filter(Boolean), // Transforms titles to uppercase
  });

  const { data: movieData } = useQuery<Movie_Experimental>({
    queryKey: ["getMovie"],
    queryFn: getMovie,
    select: (data) => {
      const result = {
        ...data,
        ...ADDITIONAL_DATA,
        cast: CAST,
        formattedGenres: data.Genres.map((item) => item.Title)
          .join(" ")
          .toUpperCase(),
        formattedRating: ADDITIONAL_DATA.imdbRating
          .replace(".", "")
          .concat("%"),
      };
      return result;
    }, // Transforms titles to uppercase
  });

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setShowEpisodes((prevState) => !prevState);
    };

  useEffect(() => {
    if (episodesData) {
      setShowEpisodes(true);
    }
  }, [episodesData]);

  return (
    <>
      <React.Fragment key={"right"}>
        <SwipeableDrawer
          slotProps={{
            paper: {
              style: {
                background: "rgba(1, 1, 1, 0.5)",
                width: 400,
                paddingTop: "2rem",
              },
            },
            backdrop: {
              style: { background: "transparent", width: 400 },
            },
          }}
          anchor={"right"}
          open={showEpisodes}
          onClose={toggleDrawer()}
          onOpen={toggleDrawer()}
        >
          <IconButton
            onClick={toggleDrawer()}
            sx={{ alignSelf: "flex-end", marginBottom: "4rem" }}
          >
            <Close sx={{ fontSize: 32, color: "white" }} />
          </IconButton>
          <EpisodesTabs episodes={episodesData} />
        </SwipeableDrawer>
      </React.Fragment>
      <Background image={movieData?.Images?.Background}>
        {movieData ? (
          <Header>
            <div>
              <Title>{movieData?.Title}</Title>
              <Heading>{`${movieData?.formattedRating} INDICADO / ${movieData?.formattedGenres} / ${movieData?.Year} / ${movieData?.countryISO} / ${movieData?.Rated}`}</Heading>
            </div>

            <Activity mode={showEpisodes ? "hidden" : "visible"}>
              <IconButton onClick={toggleDrawer()}>
                <Reorder sx={{ fontSize: 32, color: "white" }} />
              </IconButton>
            </Activity>
          </Header>
        ) : (
          <Loading />
        )}
      </Background>
      {movieData && (
        <Footer>
          <MoviesTabs synopsis={movieData?.Synopsis} />
        </Footer>
      )}
    </>
  );
}
