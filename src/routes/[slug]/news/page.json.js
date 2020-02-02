
export function get(req, res) {
  const { params } = req;
  let data = {
    title: 'no Title',
    image: ''
  }
  if (params.slug === 'pt') {
    data = {
      title: 'Noticias em portugues'
    }
  }
  if (params.slug === 'en') {
    data = {
      title: 'News in english'
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
