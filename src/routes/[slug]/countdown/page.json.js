

const event = new Date();

export function get(req, res) {
  const { params } = req;
  let data = {}
  if (params.slug === 'pt') {
    event.setMinutes(event.getMinutes() + 25);
    data = {
      title: 'Tempo até o evento',
      moreinfo: 'Mais informação',
      date: event.toJSON()
    }
  }
  if (params.slug === 'en') {
    event.setMinutes(event.getMinutes() + 35);
    data = {
      title: 'Time until event starts',
      moreinfo: 'More Info',
      date: event.toJSON()
    }
  }
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(
    JSON.stringify(
      data
    )
  );
}
