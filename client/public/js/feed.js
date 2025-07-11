window.addEventListener('load', () => {
    const portal = document.getElementById('portal_button');
    if (portal) {
        portal.addEventListener('click', () => {
            window.location.href = 
        });
    }
})
function feedItem(title, body, linkUrl, imageUrl){
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}
 const currentStories = [ 
    new feedItem('Dream Mom Car','This mercades benz is the perfect it girl mom car, with so many features. This car is a real upgrade.','https://www.mbusa.com/en/vehicles/class/gls/suv','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mbusa.com%2Fen%2Fvehicles%2Fmodel%2Fgls%2Fsuv%2Fgls450w4&psig=AOvVaw3XEorOu-lghB0TlVBp-3Gx&ust=1752258578504000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCkq4j2so4DFQAAAAAdAAAAABAL'  );
    new feedItem('Thinking of an electric car?','This Aston Martin is a dream. The interior of this car is a gorgeous pink and very luxurious.' );
    new feedItem('BMW of your dreams');
 ];

 console.log(currentStories)
function createFeedItemHTML(feedItem) {
  return `
  <div class="feed-item">
    <h3><a href="${feedItem.linkUrl}" target="_blank">${feedItem.tittle}</a></h3>
    <img src="${feedItem.imageUrl}" alt="${feedItem.title}">
    <p>${feedItem.body}</p>
  </div>
  `;
}

function displayItem(feeditem) {
    const newsfeedElement = document.getElementById('newsfeed');
    if (newsfeedElement) {
        newsfeedElement.innerHTML += createFeedItemHTML(feedItem);
    }
    
}

  currentStories.forEach(displayItem);



