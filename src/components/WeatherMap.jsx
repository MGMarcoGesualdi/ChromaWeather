import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function RecenterMap({ lat, lon }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lon], 10, {
      duration: 1.5,
    });
  }, [lat, lon, map]);
  return null;
}

export default function WeatherMap({ coord, city }) {
  if (!coord) return null;

  const { lat, lon } = coord;

  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        marginTop: "16px",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <RecenterMap lat={lat} lon={lon} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
