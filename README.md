# WhatsMine: A shared inventory tracker
WhatsMine is a site where users can keep track of the things they care about,
organized into shareable boxes. Users can add and remove each other from boxes,
with variable levels of resource control (read-only, admin). Users can also send
SMS reminder messages to each other about items in their shared boxes.

- Deployed Site: https://ismurray.github.io/whats-mine-client/

## WhatsMine API
- Deployed API: https://whats-mine-api.herokuapp.com/
- GitHub Repo: https://github.com/ismurray/whats-mine-api

![alt text](https://i.imgur.com/Ofm2UHC.png "Live Site Screenshot")

## How to use WhatsMine
When you sign up for your WhatsMine account, registering your phone number is
optional, but including it will allow the people you share items with to message
you via SMS. If you change your mind, you can always change the phone number
tied to your account by going to the Account page.

Start out by making your first box. All boxes are completely private by default,
until you add other users to them. Inside your boxes you can create items to
keep track of the important things in your life. Currently each item has fields
for entering a name (mandatory), and a value (optional). What's Value you ask?
Is it dollars? Is it euros? Is it that indescribeable 'X-factor?' It's whatever
you want it to be! You could make a To-Do list Box filled with Items for each
actionable item. You can make a series of boxes to keep track of which drawer
you keep which nick-nacks in. The sky's the limit.

Now that we've got the hang of making boxes. Let's get some other people into
the mix! Inside one of your boxes, click the 'Edit' button to go to the Box Edit
page. In addition to changing the name of your box, you can share your box with
other users. To do that, enter the username of someone you know into the form at
the bottom of the page.
If you leave the `Make Admin` box unchecked, the
user will only have read-access to the box, meaning they'll be able to see it
and all of it's contents (and remove the box from their list if they want), but
they won't be able to create/edit/delete any items, and they won't be able to
add or change any User permissions. They also won't be able to send any
Item-messages, but they will be able to receive them.
If you do chek the `Make Admin` box, keep in mind that the user you add
will share full administrative control of the box. They'll be able to change and
delete the box, add/change/delete items, add and remove user permissions, and
message other members of the box. So only give Admin status to users you trust!

A great use for WhatsMine is for roommates who want to keep track of who owns
what, and what's for sharing. The built in messaging service is a great way for
roommates to let each other know whose turn it is to buy toilet paper, or that
they're running low on essentials, like eggs or beer.

## Planning and Development:

### Minimum Viable Product Wireframe:
![alt text](https://i.imgur.com/1kPlv99.jpg "MVP Wireframe")

### Minimum Viable Product User Stories
As a user, I should be able to:
- create an account
- login to my account
- change my password
- sign out of my account
- See all of my items
- Create an item
- Delete an item
- Change an item


### Stretch Goal Wireframe:
![alt text](https://i.imgur.com/28Zms7x.jpg "Stretch Wireframe")

### Stretch User Stories
As a user, I should be able to:
- create an account
- login to my account
- change my password
- sign out of my account
- See all of my folders
- Create a folder
- Delete a folder
- Change a folder's name
- See the items in a folder
- Add an item to a folder
- Move an item to a different folder
- Delete an item
- Edit an item's name/value/etc
- Add another user to a folder (shared folder ownership)
- Add another user to an item (shared item ownership)

## Technologies Used
* Ember
* JavaScript
* HTML5
* SASS/CSS3
* Bootstrap
* GIT/GITHUB
* Atom
* Webpack
* Twilio

## Installation
1. Fork and clone this repository
2. Install dependencies with `npm install`


## Future Iterations
- Sorted categories for Boxes, so you can see which ones are private, which ones
you share, and which ones you only have read-access to
- Item descriptions
- Item access control that is separate from Box access control
