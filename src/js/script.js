/*
input.click {
    nomeAccount = value;

    fetch .... {
        new Account (value, tweets, )
    }
}    

--ACCOUNT OBJECT: create the account object and a method to call the Tweet obj

classe Account {
this.name
this.tweet

display Name() {
    .....
}

get Tweets() {
    new TweetObj (tweet.text, tweet.image, tweet.title)
}

}

--Tweet OBJECT: create the Tweet object and a method to display it
classe TweetObj {
    this.text
    this.image
    this.title

display() {
    document.query = this.text, image, title ...
}

}

*/

import "../main.scss";

(function init() {
    const searchBtn = document.querySelector(".search-container__button");

    searchBtn.addEventListener("click", searchAccount);
})();


function searchAccount(e) {
    let search = document.querySelector(".search-container__input-text");
    console.log(search.value);
    //let url =  `https://api.twitter.com/2/users/23083404/tweets?media.fields=media_key,preview_image_url,url&expansions=attachments.media_keys,referenced_tweets.id`;
          fetch(`https://api.twitter.com/2/users/by?usernames=${search.value}`,  {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${process.env.Bearer_TOKEN}`,
            }
        })  
          .then(res => {
          return res.json();
      })
      .then(body => {
         return body.data[0].id; 
        }).then(data => {
            getTweet(data);
        })

         
}

function getTweet(id) {
    fetch(`https://api.twitter.com/2/users/${id}/tweets?media.fields=media_key,preview_image_url,url&tweet.fields=referenced_tweets,created_at&expansions=attachments.media_keys`,  {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${process.env.Bearer_TOKEN}`,
        }
    }).then(res => {
        return res.json();
    })
    .then(body => {
        let Tweet;
        console.log(body);
        body.data.forEach(element => {
            let TweetFeed = new Tweet(element.created_at, element.text, element.attachments.media_keys);
            Tweet = document.createElement("div");
            Tweet.classList.add("Tweet-feed__Tweet");
            Tweet.appendChild(document.querySelector(".Tweet-feed"));
            
        })
        /*body.data.forEach(element => {
            body.includes.media.forEach(e => {
                if (element.attachments.media_keys === e) {
                    let 
                }
            })
            
            
        });*/
    })
}


class Tweet {
    constructor(day, text, media) {
        this.day = day;
        this.text = text;
        this.media = media;
      }
    
    get displayData() {
        return this.day;
    }

    get displayText() {
        return this.text;
    }

    get displayMedia() {
        if(this.media != undefined) return this.media;
    }
}

