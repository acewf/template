
export function get(req, res) {
  const { params } = req;
  let data = {
    title: 'no Title',
    image: ''
  }
  if (params.slug === 'pt') {
    data = {
      title: 'titulo em português',
      image: '/image-1.jpg'
    }
  }
  if (params.slug === 'en') {
    data = {
      title: 'Title in english',
      image: '/image-2.png',
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
