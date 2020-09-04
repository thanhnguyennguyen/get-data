const axios = require('axios')
function getData(url, method = '', timeout = 2000) {
	return axios({
        url: url,
        method: method,
        timeout: timeout,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

module.exports = getData

