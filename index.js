const axios = require('axios')
function getData(url, method = '', data = {} , timeout = 2000) {
	return axios({
        url: url,
        method: method,
	data: data,
        timeout: timeout,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
module.exports = getData

