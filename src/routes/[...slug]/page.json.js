
export function get(req, res) {
  const { params } = req;
  const slug = params.slug[0];
  let data = {
    description: (slug === 'pt') ? 'pagina 404' : 'page 404',
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
