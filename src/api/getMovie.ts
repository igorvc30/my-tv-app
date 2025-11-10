const apiUrl =
  "https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json";

export default async function getMovie() {
  const response = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
