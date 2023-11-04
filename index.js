const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/t', async(req, res) => {
    console.log("Just got a test request!")
    for(let i=0; i<1;i++){
        res.write("i:"+i+"<br>\n")
        await sleep(1e3)
    }
    res.send('End!')
})
app.listen(process.env.PORT || 3000)

function sleep(timeout) {
  return new Promise((res) => setTimeout(res, timeout))
}
