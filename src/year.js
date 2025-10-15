function convertYear(buddhistYear) {
  // Convert Buddhist Era (BE) to Christian Era (CE)
  // BE is 543 years ahead of CE
  return buddhistYear - 543;
}

export default convertYear;
