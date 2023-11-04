const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/t', async(req, res) => {
    console.log("Just got a test request!")
    for(let i=0; i<11;i++){
      res.cork()
        res.write("i:"+i+"<br>\n")
      res.uncork()
        await sleep(1e3)
    }
    res.write("end!")
    res.end()
})
app.all('/t1', async(req, res) => {
    console.log("Just got a test request!")
    for(let i=0; i<1;i++){
        res.write("i:"+i+"<br>\n")
        await sleep(1e3)
    }
    res.write("end!")
    res.end()
})
app.listen(process.env.PORT || 3000)

function sleep(timeout) {
  return new Promise((res) => setTimeout(res, timeout))
}
