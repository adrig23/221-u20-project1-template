const express = require('express')
const app = express();
app.use(express.static('client/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})
 let feedItemController = require('./controller/feedItemController');

 app.route('/api/feedItem')
     .get(feedItemController.getAllFeedItems)
     .post(feedItemController.saveFeedItemHandler)

 app.route('/api/feedItem/:id')
    .get(feedItemController.getFeedItem)
    .delete(feedItemController.deleteFeedItem)
    .patch(feedItemController.updateFeedItem)

     


app.listen(1337, () => console.log('Listening on port 1337.'))
