import express from 'express'

export default class {

    constructor (port, sslKey = null, sslCert = null) {
        this.port = port

        this.ssl = sslKey && sslCert
        this.sslKey = sslKey
        this.sslCert = sslCert

        this.handler = (req, res) => {
            res.send('Not implemented')
        }
    }

    start () {
        this.app = express()

        // this.app.all('*', this.handler)
        this.app.listen(this.port)
    }

}