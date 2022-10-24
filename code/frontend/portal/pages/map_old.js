import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../map/initializeMap";
import { fetcher } from "../utils/fetcher";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default function Map1() {

  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";

  useEffect(() => {
    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.0255, 9.6615],
      zoom: 12.5,
      pitch: 45,
      maxBounds: [
        [79.0255, 9.4615], // Southwest coordinates
        [81.0255, 9.7615], // Northeast coordinates
      ],
    });
  }, []);


  return (
    <div>
      <main>
        <div id="my-map" style={{ height: 500, width: 500 }} />
      </main>

    </div>
  );
}