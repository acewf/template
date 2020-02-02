
export function get(req, res) {
  const { params } = req;
  let data = {
    title: 'no Title',
    image: ''
  }
  if (params.slug === 'pt') {
    data = {
      title: 'Pagina nao encontrada'
    }
  }
  if (params.slug === 'en') {
    data = {
      title: 'Page not found'
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
