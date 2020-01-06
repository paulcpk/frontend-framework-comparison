import useSWR from "swr";
import fetch from "unfetch";

const API_URL = "https://dev.to/api";
async function fetcher(path) {
  const res = await fetch(API_URL + path);
  const json = await res.json();
  return json;
}

export default function fetchData(path) {
  return useSWR(path, fetcher);
}