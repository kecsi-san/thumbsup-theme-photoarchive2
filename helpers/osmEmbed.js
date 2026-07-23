/*
  Build an OpenStreetMap embeddable iframe URL for a given lat/lon.
  Usage: {{osmEmbed meta.exif.GPSLatitude meta.exif.GPSLongitude}}
*/
module.exports = (lat, lon) => {
  const latNum = parseFloat(lat)
  const lonNum = parseFloat(lon)
  const dLat = 0.003
  const dLon = 0.006
  const bbox = [lonNum - dLon, latNum - dLat, lonNum + dLon, latNum + dLat].join(',')
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${latNum},${lonNum}&layer=mapnik`
}
