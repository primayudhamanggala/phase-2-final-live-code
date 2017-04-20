# phase-2-final-live-code
App that able to create, read, update & delete author and article.


## Routes
Route | HTTP | Description
---------- | ---------- | ----------
/api/authors | GET | Get all the authors
/api/authors | POST | Create a author
/api/authors/:id | DELETE | Delete a auhtor
/api/authors/:id | PUT | Update author with new info

/api/articles | GET | Get all the articles
/api/articles | POST | Create a article
/api/articles/:id | DELETE | Delete a article
/api/articles/:id | PUT | Update article with new info

## Usage
```
npm install
npm start
```
How to use : http://localhost:3000<use route available in the Routes table>
example :
To show all the authors data
http://localhost:3000/api/authors
