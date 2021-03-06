

axios.get('https://api.github.com/users/ArtmanG').then(response => entryPoint.append(createGitHubCard(response.data)));

const entryPoint = document.querySelector('.cards');

// .catch(error => {
//   console.log('the data was not returned', error)
// });

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'bigknell']

followersArray.forEach(a => axios.get(`https://api.github.com/users/${a}`).then(res => entryPoint.append(createGitHubCard(res.data))));

function createGitHubCard(obj) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const usersUserName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userGitHubPage = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  usersUserName.classList.add('username');

  userImg.src = obj.avatar_url
  userName.innerHTML = obj.name;
  usersUserName.innerHTML = obj.login;
  userLocation.innerHTML = obj.location;
  userProfile.innerHTML = `Profile: <a href=${obj.html_url}>${obj.html_url}</a>`;
  userFollowers.innerHTML = `Followers: ${obj.followers}`;
  userFollowing.innerHTML = `Following: ${obj.following}`;
  userBio.innerHTML = `Bio: ${obj.bio}`;

  card.appendChild(userImg);
  card.appendChild(cardInfo);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(usersUserName);
    cardInfo.appendChild(userLocation);
    cardInfo.appendChild(userProfile);
      userProfile.appendChild(userGitHubPage);
    cardInfo.appendChild(userFollowers);
    cardInfo.appendChild(userFollowing);
    cardInfo.appendChild(userBio);


  return card;
};


/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/ArtmanG
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
