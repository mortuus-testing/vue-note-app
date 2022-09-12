const app = require('express')()

app.get('/api/notes', (req, res) => {
    // This cache-control is needed by vercel.
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send({
        status: 200,
        message: 'success',
        data: [
            {
                id: 1,
                title: 'How to Create an App from Scratch'
            },
            {
                id: 2,
                title: 'The Ultimate Guide for Using Vim.'
            }
        ]
    })
})

module.exports = app