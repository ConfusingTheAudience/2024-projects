# Votemeter

**Live site: https://cta-votemeter-2024.vercel.app/**  
```diff
- If you want full capabilities you must use the github code locally -
```
* **Used**: Express + EJS <br />
* **Version**: The version available on github works locally, for the production version I needed to make some changes by which some functions do not work as they should <br />

* **Changes**: Things related to voting such as voting and deleting them are blocked, also update profile. The change between what is on github and what is in the production version is due to the fact that vercel is serverless<br />


I use cookies instead of sessions in production <br />

I also had to change the paths to the files in the public and flaticon folder <br />

One of the more significant changes was that in discover.ejs I had to completely change the discover.js script (no longer use it) and put some code of it into a regular script tag <br />

In a normal environment, the votes are counted immediately and displayed next to the item, where you can see the number of votes and the average rating based on all the people's votes. A given user, if he has already cast his vote, does not change the number of all votes <br />

In the profile in the settings section in a normal environment, you can update username or email. Even if the user clicks the Save Changes button the message Profile updated successfully! appears. In case of errors, they are also displayed in red color <br />

On the My Rates subpage, the user can delete a given single record, then the last activity panel updates itself <br />

After registration in the local environment, the user is redirected to the login page , in production - to the profile page <br />

After removing all votes from the profile in settings also displays a message about the successful removal, while in production the user is redirected to the profile page <br />

* **Testing**: Users to test <br />

In production, if a user registers and then logs out, it destroys the cookie, which means that the user will cease to exist <br />

I hash only three users for demo purposes <br />

Login: Admin <br /> Password: 1234 <br /> - category is game <br />

Login: Max <br /> Password: 1111 <br /> - category is music <br />

Login: Wer <br /> Password: 1111 <br /> - category is art <br />


## Run

To run this project (be aware to be on server folder)

```bash
  npm run dev
```

## **Info**

- **Data**: data/users.js, data/games.js, data/music.js, data/art.js and data/badges.js
- **Badges**: Users gets new badge every 5 votes made (You can see on My Rates page)
- **Access login/register**: If a user is logged in and tries to access the login or register page then they are redirected to the profiles page
- **Access discover/my-rate/profile**: If a user isn't logged in and tries to access these pages then he is redirected to login page
- **Hiden Home**: If a user is logged in, they do not have 'Home' in the navigation menu
- **How update works**: When a user updates their profile (e.g., changing their username), both data.js and the category file (e.g., games.js) are updated, where the user’s vote is recorded. A similar process applies when deleting all votes
- **Auto refresh**: I'm using auto refreshing that's why you can see it on fe profile page. I need to do that to get up to date changes made by user (but I should use session save)
- **Bcrypt**: I'm using bcrypt to hash passwords
  
- **Help urls**: For test purposes: /usersList, /gamesList, /musicsList, /artsList and on production also: /check-cookie



## **Urls**

- **Home**: /
- **Discover**: /discover
- **My-Rates**: /my-rates
- **Profile**: /profile -> also settings there
- **Login**: /login
- **Register**: /register

## **Resources / Credits**

- **icons from flaticons**: https://www.flaticon.com/uicons
- **game gif**: https://www.flaticon.com/free-animated-icons/video-game
- **music gif**: https://www.flaticon.com/free-animated-icons/microphone
- **art gif**: https://www.flaticon.com/free-animated-icons/innovation
- **register game video #1**: Ron Lach https://www.pexels.com/pl-pl/video/jasny-ludzie-kobieta-internet-7849228/
- **register music video #2**: ANTONI SHKRABA https://www.pexels.com/pl-pl/video/jasny-swiatla-mezczyzni-kobiety-8041841/
- **register art video #3**: Coverr https://www.pexels.com/pl-pl/video/sztuka-uliczna-854193/
- **login background**: Tara Winstead https://www.pexels.com/pl-pl/zdjecie/tekst-pudelko-listy-litery-8850829/
  
