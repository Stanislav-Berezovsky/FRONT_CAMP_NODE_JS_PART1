module.exports = (router) => {
    const responceData = {
        "get": {
            "value": "get"
        },
        "getId": {
            "value": "getId"
        },
        "post": {
            "value": "post"
        },
        "putId": {
            "value": "putId"
        },
        "deleteId": {
            "value": "deleteId"
        },
        "other":{
            "value":"other"
        }
    };

    router.post('/blogs', (req, res) => {
        console.log('post');
        res.send(responceData.post);
    });
    router.get('/blogs', (req, res) => {
        console.log('get');
        res.json(responceData.get);
    });
    router.get('/blogs/:blogId', (req, res) => {
        console.log('getId');
        res.json(responceData.getId);
    });
    router.put('/blogs/:blogId', (req, res) => {
        console.log('put');
        res.json(responceData.putId);
    });
    router.delete('/blogs/:blogId', (req, res) => {
        console.log('delete');
        res.json(responceData.deleteId);
    });

    router.get('/other', (req, res) => {
        console.log('other');
        res.json(news.other);
    });
};