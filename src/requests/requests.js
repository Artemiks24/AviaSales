let id = ''

const fetchTicketsData = async () => {
  const idURL = 'https://aviasales-test-api.kata.academy/search'

  if (!id) {
    const responseId = await fetch(idURL)
    if (responseId.ok) {
      const res = await responseId.json()
      id = res.searchId
    } else {
      throw new Error(`Could not fetch ${idURL}`)
    }
  }

  const getTickets = `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`

  const responseTicket = await fetch(getTickets)
  if (responseTicket.ok) {
    const tickets = await responseTicket.json()
    return tickets
  }
  throw new Error(`Could not fetch ${getTickets}`)
}

export default fetchTicketsData
