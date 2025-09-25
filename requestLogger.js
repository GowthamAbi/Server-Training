const fs = require('fs')
const path = require('path')

// log file path
const logFile = path.join(__dirname, 'requests.log')

function requestLogger(req, res, next) {
  const start = Date.now()

  // listen for response finish event
  res.on('finish', () => {
    const logData = {
      time: new Date().toISOString(),
      method: req.method,
      baseUrl: req.baseUrl,
      originalUrl: req.originalUrl,
      query: req.query,
      params: req.params,
      body: req.body,
      headers: req.headers,
      cookies: req.cookies || {}, // if cookie-parser is used
      ip: req.ip,
      statusCode: res.statusCode,
      responseTime: `${Date.now() - start} ms`
    }

    fs.appendFile(logFile, JSON.stringify(logData) + '\n', (err) => {
      if (err) console.error('Error writing log:', err)
    })

    Object.entries(logData).forEach(([key,values])=>{
        if(values){
            console.log(`${key}:${JSON.stringify(values)}`)
        }else{
            console.log(`${key} :"Not Found`)
        }
    })
  })

  next()
}

module.exports = requestLogger
