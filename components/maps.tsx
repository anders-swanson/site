export default function MapEmbed({
  height = 400,
  width = 650,
  query = "",
  lat = "",
  long = "",
}) {
  let q = `${query}`;
  if (lat && long) {
    q = `${lat},${long}`;
  }
  const url = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${q}`;

  return (
    <iframe
      width={width}
      height={height}
      style={{
        border: "0",
      }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={url}
    />
  );
}
