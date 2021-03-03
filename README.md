# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

Most of the commits in this repository correspond to videos in the program.

## Project Setup

* clone the Project - `git@github.com:yushanwebdev/reactnd-chirper-app.git`
* install the dependencies - `npm install`

## Planning Stage

### Step 1 - Identify Each View

We need to determine the look and functionality of each view in your app. One of the best approaches is to draw each view of the app on paper so that you'll have a good idea of what information and data you're planning to have on each page.

Instead of paper and pencil, you can be a bit more digital and [use software for creating mockups](https://codingsans.com/blog/mockup-tools). If you were given project specifications, check your mock against them to make sure that you have all of the required features.

For this project, we'll use the screenshots of the app we'll be building instead of mocks.

**<span style="text-decoration:underline;">View for the Dashboard Page</span>**

Let's start by looking at the Dashboard View.

![Dashboard](./img/dashboard.jpg)
*<center>The "dashboard" view displaying the navigation and tweets.</center>*

**Requirements**
- is located at the home route (`/`)
- shows tweets sorted from most recently added at the top, to oldest at the bottom
- each tweet will show:
  - the author
  - the time stamp
  - who the author is replying to
  - the text of the tweet
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)

**<span style="text-decoration:underline;">View for the Tweet Page</span>**

![Tweet](./img/tweet.jpg)
*<center>The view for a single tweet.</center>*

**Requirements**
- is located at `/tweet/:id`
- shows an individual tweet
  - the author
  - the time stamp
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)
- has a reply form
- shows all replies 

**<span style="text-decoration:underline;">View for Creating a New Tweet</span>**

![New Tweet](./img/new-tweet.jpg)
*<center>The view for creating a new Tweet.</center>*

**Requirements**
- is located at `/new`
- has a textbox for adding a new tweet

**<span style="text-decoration:underline;">Recap</span>**

So these are the 3 views we need in our app: 
- Dashboard
- Tweet
- New Tweet

We now have a clear idea of what we're trying to build and can be confident that our views meet all of the provided requirements.

Now, let's move on to Step 2, where we'll make a conceptual skeleton of our app.
<hr/>

### Step 2 - Break Each View Into a Hierarchy of Components
In this step, we'll do 2 things:
- draw boxes around every component
- arrange our components into a hierarchy

**[Q1] How do you know whether something should be a component in a React app?**

[A1] According to the [Thinking in React docs](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy), the Single Responsibility Principle is a great strategy!

**[Q2] Which of the following are true?**

[A2] 
- Components let you split the UI into independent, reusable chunks.
- Each view typically has a component that represents that view.
- Presentation Components don't know where their data comes from.
- Components that are connected to the store are called "containers".
- Use components to your advantage to isolate specific sections of the app, either as access data (containers) or focused on the UI (presentational).
<br/>
<br/>

**<span style="text-decoration:underline;">Components for the Dashboard View</span>**

![Components for the Dashboard View](./img/dashboard-break.png)
*<center>Dashboard view broken up into Components.</center>*

Broke this view into the following React Components:
- **App** - the overall container for the project
- **Navigation** - displays the navigation
- **Tweets List** - responsible for the entire list of tweets
- **Tweet** - in charge of display the content for a single tweet

**<span style="text-decoration:underline;">Components for the Tweet View</span>**

![Components for the Tweet View](./img/tweet-break.png)
*<center>Tweet view broken up into Components.</center>*

Broke this view into the following React Components:
- **App** - the overall container for the project
- **Navigation** - displays the navigation 
- **Tweet Container** - displays a list of tweets
- **Tweet** - displays the content for a single tweet
- **New Tweet** - display the form to create a new tweet (reply)

**<span style="text-decoration:underline;">Components for the New Tweet View</span>**

![Components for the Tweet View](./img/new-tweet-break.png)
*<center>New Tweet view broken up into Components.</center>*

Broke this view into the following React Components:
- **App** - the overall container for the project
- **Navigation** - displays the navigation
- **New Tweet** - display the form to create a new tweet

**<span style="text-decoration:underline;">All Components</span>**

So from the way I broke things down, the application will have the following components:
- App
- Navigation
- Tweets List
- Tweet Container
- Tweet
- New Tweet

This component hierarchy tells us which components will be used inside of other components. It gives us the skeleton of our app. All of these are presentational components. Right now, we don't care which components will be upgraded to containers. As we start building out the store, we'll create additional components that will be container components to get data from the store and pass it to the presentational components that need the data.

Thus far, we haven't done anything that's special to Redux; all of the steps above are applicable and useful for React applications that do not use Redux. 

Remember that Redux doesn't care about how our app looks or what components it uses. Instead, it gives a way to manage the state of the application in a predictable way. When we talk about state, we're really talking about data - not just any kind of data inside the app, but data that can change based on the events in the app. 

Let's move on to Step 3, where we'll start thinking about the data in this app.
<hr/>

### Step 3 - Determine What Events Happen in the App

We need to take a look at *what* is happening in each component. Let's determine what actions the app or the user is performing **on the data**. Is the data being set, modified, or deleted?...then we'll need an action to keep track of that event!

**<span style="text-decoration:underline;">Tweets List Component</span>**

![Tweets List Component](./img/tweet-list-comp.png)
*<center>The Tweets List Component</center>*

For the Tweets List component, the only information that we see is that we'll have to get a list of all of the tweets. So for this component, we just need to:
- get the tweets

So the action type for event this will probably be something like `GET_LIST_OF_TWEETS` or `GET_DATA`.

**<span style="text-decoration:underline;">Tweet Component</span>**

![Tweets List Component](./img/tweet-comp.png)
*<center>The Tweet Component</center>*

- We get a particular tweet from a list of tweets.
- We get the authedUser (user that is currently logged in) so the user can toggle the likes on each tweet.
- We get the authedUser so the user can reply to a tweet.

**<span style="text-decoration:underline;">Tweet Container Component</span>**

![Tweet Container Component](./img/tweet-container-comp.png)
*<center>The Tweet Container Component</center>*

- We get a specific tweet from a list of tweets.
- We get the replies to a specific tweet from a list of tweets.

**<span style="text-decoration:underline;">New Tweet Component</span>**

![New Tweet Component](./img/new-tweet-comp.png)
*<center>The New Tweet Component</center>*

- We get the authedUser so the user can create a new tweet.
- We set the text of the new tweet.

Let's move on to Step 4, where we'll determine which of the data above will live in the store.
<hr/>



## Contributing

Because this is a code-along project and the commits correspond to specific videos in the program.

If you feel like there's a major problem, please open an issue to discuss the problem and potential resolution.
