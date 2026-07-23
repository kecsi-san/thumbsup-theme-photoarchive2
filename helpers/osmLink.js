/*
  Build a link to the full OpenStreetMap site for a given lat/lon.
  Usage: {{osmLink meta.exif.GPSLatitude meta.exif.GPSLongitude}}
*/
module.exports = (lat, lon) => {
  const latNum = parseFloat(lat)
  const lonNum = parseFloat(lon)
  return `https://www.openstreetmap.org/?mlat=${latNum}&mlon=${lonNum}#map=16/${latNum}/${lonNum}`
}
