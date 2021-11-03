export const parseDate = (string) => {
  let parsedate = new Date(string)
  let dateString = parsedate.toLocaleString('en-GB')
  return dateString
}
