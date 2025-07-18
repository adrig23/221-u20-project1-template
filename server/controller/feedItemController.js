 const feedItem = require('../model/feedModel');

let FeedItems = [
  feedItem.newFeedItem('Future Dream Mom Car', 'This Mercedes Benz is the perfect it girl mom car...', 'https://www.mbusa.com/en/vehicles/class/gls/suv', 'https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2023/10/Mercedes-Benz-GLS.jpg'),
  feedItem.newFeedItem('Thinking of ways to stay Active', 'You do not like running? Or lifting weights? Pilates...', 'https://www.betterhealth.vic.gov.au/pilates-health-benefits', 'https://images.squarespace-cdn.com/.../DSC_9942.jpg?format=1500w'),
  feedItem.newFeedItem('Plans to make this summer with your Friends', 'Each summer goes by and you never know what to do...', 'https://rusticpathways.com/...', 'https://herviewfromhome.com/.../shutterstock_378610153-768x512.jpg')
];

exports.getAllFeedItems = (req, res) => {
  res.json(FeedItems);
};

exports.getFeedItem = (req, res) => {
  const id = parseInt(req.params.feedItemId);
  if (isNaN(id) || id < 0 || id >= FeedItems.length) {
    return res.status(404).json({ error: "Feed item not found" });
  }
  res.json(FeedItems[id]);
};

exports.saveFeedItemHandler = (req, res) => {
  const { title, body, linkUrl, imageUrl } = req.body;
  const newItem = feedItem.newFeedItem(title, body, linkUrl, imageUrl);
  FeedItems.push(newItem);
  res.status(201).json(newItem);
};

exports.deleteFeedItem = (req, res) => {
  const id = parseInt(req.params.feedItemId);
  if (isNaN(id) || id < 0 || id >= FeedItems.length) {
    return res.status(404).json({ error: "Feed item not found" });
  }
  const deleted = FeedItems.splice(id, 1)[0];
  res.json({ message: "Feed item deleted", deleted });
};

exports.updateFeedItem = (req, res) => {
  const id = parseInt(req.params.feedItemId);
  if (isNaN(id) || id < 0 || id >= FeedItems.length) {
    return res.status(404).json({ error: "Feed item not found" });
  }
  const item = FeedItems[id];
  if (req.body.title) item.title = req.body.title;
  if (req.body.body) item.body = req.body.body;
  if (req.body.linkUrl) item.linkUrl = req.body.linkUrl;
  if (req.body.imageUrl) item.imageUrl = req.body.imageUrl;
  res.json(item);
};

 /*const feedItem = require('../model/feedModel');


let feedItem1 = feedItem.newFeedItem(
    'Future Dream Mom Car',
    'This Mercedes Benz is the perfect it girl mom car with so many features.',
    'https://www.mbusa.com/en/vehicles/class/gls/suv',
    'https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2023/10/Mercedes-Benz-GLS.jpg'
);

let feedItem2 = feedItem.newFeedItem(
    'Thinking of ways to stay Active',
    'You do not like running? Or lifting weights? Pilates is a great form of exercising. It focuses on your core but is a full body workout as well. Trust me you do not want to miss out on the rewarding feeling of being active. Not convinced? Read some benefits of pilates',
    'https://www.betterhealth.vic.gov.au/pilates-health-benefits',
    'https://images.squarespace-cdn.com/content/v1/619d262b80de15571c7a0a75/f96bc888-5e57-44c8-a165-e0a790fda007/DSC_9942.jpg?format=1500w'
);

let feedItem3 = feedItem.newFeedItem(
    'Plans to make this summer with your Friends',
    'Each summer goes by and you never know what to do? Here is an easy solution to your boredom.',
    'https://rusticpathways.com/inside-rustic/online-magazine/15-great-ideas-for-your-summer-bucket-list',
    'https://herviewfromhome.com/wp-content/uploads/2018/05/shutterstock_378610153-768x512.jpg'
);

let FeedItems = [feedItem1, feedItem2, feedItem3];

exports.getAllFeedItems = (req, res) => {
      res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(FeedItems));
}

exports.getFeedItem =  (req, res) => {
    const id = parseInt(req.params.feedItemId);

    if (isNaN(id) ||id < 0 || id >= allFeedItems.length) {
       res.set('Content-Type', 'application/json');
        res.send(JSON.stringify({ error: "Feed item not found" }));
        return;

    }
      const item = allFeedItems[id];

      res.set('Content-Type', 'application/json')
      res.send(JSON.stringify(item))
      console.log(req.params.id)
    
};

exports.saveFeedItemHandler = (req, res) => {

    let newItem = feedItem.newFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl );
    getAllFeedItems.push(newItem)
    res.setHeader('Content-Type', 'application/json')
    res.send(newItem)
    res.send(JSON.stringify(allFeedItems))
};

exports.deleteFeedItem = (req, res) => {
    const id = parseInt(req.params.feedItemId);

  if(isNaN(id) ||id < 0 || id >= this.getAllFeedItems.length) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: "Feed item not found" }));
     return;
  }
  
  const deleted = this.getAllFeedItems.splice(id, 1)[0];
   res.set('Content-Type', 'application/json');
   res.send(JSON.stringify({ error: "Feed item deleted", deleted}));
}
 
exports.updateFeedItem = (req, res) => {
    const id = parseInt(req.params.feedItemId);

    if(isNaN(id) ||id < 0 || id >= allFeedItems.length) {
         res.set('Content-Type', 'application/json');
         res.send(JSON.stringify({ error: "Feed item not found" }));
         return;
    }
    const item = allFeedItems[id];

    if (req.body.title) item.title = req.body.title;
    if (req.body.body) item.body = req.body.body;
    if (req.body.linkUrl) item.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl) item.imageUrl = req.body.imageUrl;

    res.set('Content-Type', 'application/json')
      res.send(JSON.stringify(item))
      
};
*/

