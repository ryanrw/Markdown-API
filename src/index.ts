import app from './app'

const port: number = app.get('port')

app.listen(port, () => {
  console.log(`App is start at http://localhost:${port}`)
})
