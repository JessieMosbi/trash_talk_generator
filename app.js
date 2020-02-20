const port = 3000
const targets = [
  {
    name: '工程師',
    id: 'engineer',
    img: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg'
  },
  {
    name: '設計師',
    id: 'designer',
    img: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg'
  },
  {
    name: '創業家',
    id: 'entrepreneur',
    img: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg'
  }
]

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrash = require('./generate_trash')

const app = express()
app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: require('./handlebarsHelper') }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { targets })
})

app.post('/', (req, res) => {
  const options = req.body

  let targetName = ''
  targets.forEach((target) => {
    target.checked = false
    if (target.id === options.target) {
      targetName = target.name
      target.checked = true
    }
  })

  const text = (targetName) ? `身為一個 ${targetName} ${generateTrash(options.target)}` : ''
  const message = (!targetName) ? '請選擇一位幹話產生對象！' : ''

  res.render('index', { targets, options, text, message })
})

app.listen(port, () => {
  console.log(`Server is start and listen port ${port}`)
})
