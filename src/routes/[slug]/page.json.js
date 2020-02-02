
export function get(req, res) {
  const { params } = req;
  let data = {
    description: (params.slug === 'pt') ? 'ir para contador' : 'go to countdown',
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
