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
    let url =  `https://api.twitter.com/2/tweets/search/recent?query=nyc`;
          fetch(url,  {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${process.env.Bearer_TOKEN}`,
            }
        })  
          .then(res => {
          return res.json();
      })
      .then(body => {
          console.log(body)
      })
}

