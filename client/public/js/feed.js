window.addEventListener('load', () => {
  const portal = document.getElementById('portal_button');
  if (portal) {
    portal.addEventListener('click', () => {
      window.location.href = 'https://www.pinterest.com/';
        });
      }
}
)

  /*function FeedItem(title, body, linkUrl, imageUrl){
      this.title = title;
      this.body = body;
      this.linkUrl = linkUrl;
      this.imageUrl = imageUrl;
  }

  const currentStories = [ 
    new FeedItem('Future Dream Mom Car','This Mercedes Benz is the perfect it girl mom car with so many features.' ,'https://www.mbusa.com/en/vehicles/class/gls/suv', 'https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2023/10/Mercedes-Benz-GLS.jpg'),
    new FeedItem('Thinking of ways to stay Active','You do not like running? Or lifting weights? Pilates is a great form of exercising. It focuses on your core but is a full body workout as well. Trust me you do not want to miss out on the rewarding feeling of being active. Not convinced? Read some benefits of pilates', 'https://www.betterhealth.vic.gov.au/pilates-health-benefits', 'https://images.squarespace-cdn.com/content/v1/619d262b80de15571c7a0a75/f96bc888-5e57-44c8-a165-e0a790fda007/DSC_9942.jpg?format=1500w' ),
    new FeedItem('Plans to make this summer with your Friends','Each summer goes by and you never know what to do? Here is an easy solution to your boredom.', 'https://rusticpathways.com/inside-rustic/online-magazine/15-great-ideas-for-your-summer-bucket-list', 'https://herviewfromhome.com/wp-content/uploads/2018/05/shutterstock_378610153-768x512.jpg'),
  ];
*/

  function createFeedItemHTML(feedsItem, index) {
    return `
      <div class="feed-item">
        <h3><a href="${feedsItem.linkUrl}" target="_blank">${feedsItem.title}</a></h3>
        <img src="${feedsItem.imageUrl}" alt="${feedsItem.title}">
        <p>${feedsItem.body}</p>
        <button class ="delete-button" onclick ="deleteFeedItem(${index})">Delete</button>
      </div>
    `;
  }

  function getcurrentFeed() {
    fetch("/api/feedItem")
     .then(res => res.json())
     .then(data => {
       const newsfeedsElement = document.getElementById("newsfeed");
    if (newsfeedsElement) {
      newsfeedsElement.innerHTML = "";
      data.forEach((feedsItem. index) => {
        newsfeedsElement.innerHTML += createFeedItemHTML(feedsItem, index);
      });
    }
     })
  }
  getcurrentFeed();

  window.deleteFeedItem = function (index) {
    fetch("/api/feedItem/" + index, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        getcurrentFeed();
      })
      .catch(error => {
        console.error('Error deleting feed item', error);
      });
    };

    const addButton = document.getElementById("add-button");

    if (addButton) {
      addButton.addEventListener("click", () => {
        const title = document.getElementById("title").value.trim();
        const body = document.getElementById("body").value.trim();
        const linkUrl = document.getElementById("linkUrl").value.trim();
        const imageUrl = document.getElementById("imageUrl").value.trim();

        const newFeedItem = { title, body, linkUrl, imageUrl};
      } )

      }
    
    
  
  /*function loadFeed() {
    const newsfeedElement = document.getElementById('newsfeed');
    if (newsfeedElement) {
      newsfeedElement.innerHTML = currentStories.map(createFeedItemHTML).join('');
    }
  }

  loadFeed();
});

*/