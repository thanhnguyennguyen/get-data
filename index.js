const axios = require('axios')

function getData(url, method = '', data = {}, timeout = 2000) {
    let op = {
        url: url,
        method: method,
        timeout: timeout,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if (Object.keys(data).length > 0) {
        op['data'] = data
    }
    return axios(op)
}
module.exports = getData
