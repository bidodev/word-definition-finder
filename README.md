
# Word definition Dictionary 
> It uses Oxford Dictionary API.

#### The dictionary give the definition of any given word. 


### Getting Started

#### 1. Installing everything...
```
npm install
```
#### 2. Create a config.js
> In the same folder of package.json you need a config.js like this
```javascript
const credentials = {
     id : '********',
     key : '******************'
}
module.exports = credentials;
```

>> If you dont have an KEY You can get an one here: https://developer.oxforddictionaries.com/


#### 3. Deploy **Word Finder** 

```
npm run deploy
```
> It might ask for super user permission, if so please use sudo npm run deploy

#### 4. Usage
```
word-definition -w happy
word-definition --word happy
word-definition --help
```

Happy search 😎


