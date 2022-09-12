const cors = require('cors')
const app = require('express')()

app.use(cors({
    origin: '*'
}))

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
app.listen('3000', () => {console.log('API Server running on port 3000')})
// module.exports = app