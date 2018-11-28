const fetchPosts = () => {
  return jest.fn()
    .mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(
          [
            {message: 'message 1', id: '1'},
            {message: 'message 2', id: '2'},
          ]
        )
      })
    }))
}
export default fetchPosts
