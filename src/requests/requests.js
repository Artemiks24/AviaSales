const fetchId = async () => {
  const idURL = 'https://aviasales-test-api.kata.academy/search'
  const responseId = await fetch(idURL)
  if (!responseId.ok) {
    throw new Error('Could not fetch')
  }
  const res = await responseId.json()
  const resId = res.searchId
  return resId
}

const fetchTicketsData = async () => {
  const resId = await fetchId()
  const ticketsURL = `https://aviasales-test-api.kata.academy/tickets?searchId=${resId}`
  const responseTicket = await fetch(ticketsURL)
  if (!responseTicket.ok) {
    throw new Error('Could not fetch')
  }
  const tickets = await responseTicket.json()
  return tickets
}

export default fetchTicketsData
