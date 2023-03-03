import axios from "axios";

export async function getQuotes() {
  const response = await axios.get(
    "https://api.gameofthronesquotes.xyz/v1/random"
  );

  return response.data;
}
