<!-- README HEADER -->
<br />
  
  <h3 align="center">TribeLink</h3>

  <p align="center">A place for families and friends to stay connected.</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
      <ul>
        <li><a href="#messageBoard">MessageBoard</a></li>
      </ul>
    <li><a href="#challenges">Challenges</a></li>
    <li><a href="#code-snippets">Code Snippets</a></li>
  </ol>
</details>



<!-- Overview -->
## Overview

Because it's tough to stay in touch with family and friends.

* TribeLink is a way for users to send messages, create events, and invite friends and family to join.
* With links to games, it's easy to find a way to still have fun when apart.

In the future, I want each user to have a schedule of events they've created and been invited to. I would also like to implement a way to add freinds for private messaging and a way to invite users to events.

### Technologies Used

Below are a few examples of technologies I used in order to complete the project.

* [Heroku](https://www.heroku.com/)
* [React/Redux](https://react-redux.js.org/)
* [Express](http://expressjs.com/)

<!-- Features -->
## Features

Below is a feature worth sharing.

### MessageBoard

The MessageBoard allows users to post their thoughts to all of their family members and friends.


<!-- CHALLENGES -->
## Challenges

This app was created for the first solo project as part of the AppAcademy curriculum. This project was an incredible learning experience as to what it is like to develop an app from scratch all on your own. Below are a few challenges that were necessary to overcome in order to complete the app in the timeframe given.

1. It was overwhelming to think about all of the working parts that were needed. As a solution, I tried to stay as organized as possible.

2. I struggled a lot getting my frontend to talk to my backend in order to get my routes working. This was by far my biggest struggle and to overcome that, I reached out for help and spent a lot of time learning from others online.

3. There are still many features I want to add to this app in the future. For now, I'm satisfied with how things turned out because I learned an incredible amount of knowledge that will further my abilities as a developer. Also, because I was solo, it was fun to be able to try things out on my own and spend more time playing with the code because I didn't have to ok it with team members. I think that is what really helped me learn the most during this project.

<!-- CODE-SNIPPETS -->
## Code-Snippets

Below are a few code snippets that the deveopers feel demonstrate strong skills and knowledge of what has been learned up to this point.


1. Thunk for creating a message on the MessageBoard
```
  export const createMessage = (payload) => async dispatch => {
  console.log(JSON.stringify(payload))
  const response = await fetch(`/api/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'XSRF-Token': Cookies.get('XSRF-TOKEN')
    },
    body: JSON.stringify(payload),
  });

  if(response.ok){
    const message = await response.json()
    dispatch(addMessage(message))
    return message
  }
}
```

2. Route for posting a message
```
router.post('/', restoreUser, async (req, res, next) => {
    const { userId, body } = req.body
    try {
      const createdMessage = await MessageBoard.create({userId, body})
      const newMessage = await MessageBoard.findByPk(createdMessage.id, {include: [User]})
      res.json(newMessage)
    } catch (e) {
      next(e)
    }
});
```

3. Custom CSS for MessageBoard posts
```
.postEle {
    border: 2px solid black;
    color: #001b2b;
    border-collapse: collapse;
    width: 50%;
    background-color: rgb(63, 96, 107);
    margin-top: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.356);
}
```
