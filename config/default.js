module.exports = {
  kaliber: {
    compileWithBabel: [
      /@kaliber\//,
      /react-spring\//
    ],
  },
  rollbar: {
    post_client_item: 'get an access token at rollbar.com',
  }
}
