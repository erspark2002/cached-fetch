// Default 5 min
cachedFetch('https://httpbin.org/get')
  .then(r => r.json())
  .then(info => {
    console.log('Your origin is ' + info.origin)
  })

// 2 minutes
cachedFetch('http://httpbin.org/gzip', 2 * 60)
  .then(r => r.json())
  .then(info => {
    console.log('Your origin (with gzip) is ' + info.origin)
  })

// 1 minute
cachedFetch('http://httpbin.org/ip', {
    seconds: 60
  })
  .then(r => r.json())
  .then(info => {
    console.log('Your origin (by ip only) is ' + info.origin)
  })

// cachedFetch('https://httpbin.org/html')
// .then(r => r.text())
// .then(document => {
//   console.log('Document has ' + document.match(/<p>/).length + ' paragraphs')
// })

// cachedFetch('https://httpbin.org/image/png')
// .then(r => r.blob())
// .then(image => {
//   console.log('Image is ' + image.size + ' bytes')
// })
