const fs = require('fs');
const Twit = require('twit');
const dotenv = require("dotenv")

dotenv.config()


/** DONT PUSH! Secrets */
const T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN_KEY, 
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});

// stackoverflow: https://stackoverflow.com/questions/55835359/bot-that-change-twitter-profile-picture
// twitter docs: https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_image

/** The avatar image for the profile, base64-encoded. 
 * Must be a valid GIF, JPG, or PNG image of less than 700 kilobytes in size. 
 * Images with width larger than 400 pixels will be scaled down */
// var image64str = fs.readFileSync('kitten.jpg', {encoding: 'base64'});

// T.post('account/update_profile_image', { image: image64str }, function(err) {
//     if(err) {console.error(err); return;}
//     console.log('done');
// });


// curl -X GET -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAH7FUQEAAAAAmIuzdLCy2ndBTc6w1GJDMtGF%2BcE%3DM199PKlIm9Ljfoy564TZUew5EYdJ3WkGRm2wR2G8QjecNyN26L" "https://api.twitter.com/2/tweets/20"
// curl -X GET -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAH7FUQEAAAAAmIuzdLCy2ndBTc6w1GJDMtGF%2BcE%3DM199PKlIm9Ljfoy564TZUew5EYdJ3WkGRm2wR2G8QjecNyN26L" "https://api.twitter.com/2/tweets/440322224407314432"
/** Includes Author ID (author_id)- Inlcudes author details like username and profile desc, not just ID
 * Includes Attachemtns and media (attachments.media_keys) - Includes details about media present in the tweet (images, vidoes, gifs)
 */
//curl -X GET -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAH7FUQEAAAAAmIuzdLCy2ndBTc6w1GJDMtGF%2BcE%3DM199PKlIm9Ljfoy564TZUew5EYdJ3WkGRm2wR2G8QjecNyN26L" "https://api.twitter.com/2/tweets/440322224407314432?expansions=author_id,attachments.media_keys"

/** TEST */
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//     console.log("tweets", data)
// });

// function to encode file data to base64 encoded string: 
// https://stackoverflow.com/questions/24523532/how-do-i-convert-an-image-to-a-base64-encoded-data-url-in-sails-js-or-generally
// function base64_encode(file) {
//     // read binary data
//     var bitmap = fs.readFileSync(file, { encoding: 'base64' });

//     // convert binary data to base64 encoded string
//     // return new Buffer(bitmap).toString('base64');
// }


const _1  = fs.readFileSync('./images/_0006_1.png',  {encoding: 'base64'});
const _2  = fs.readFileSync('./images/_0005_2.png',  {encoding: 'base64'});
const _3  = fs.readFileSync('./images/_0004_3.png',  {encoding: 'base64'});
const _4  = fs.readFileSync('./images/_0003_4.png',  {encoding: 'base64'});
const _5  = fs.readFileSync('./images/_0002_5.png',  {encoding: 'base64'});
const _6  = fs.readFileSync('./images/_0001_6.png',  {encoding: 'base64'});
const _7  = fs.readFileSync('./images/_0000_7.png',  {encoding: 'base64'});
const _8  = fs.readFileSync('./images/_0023_8.png',  {encoding: 'base64'});
const _9  = fs.readFileSync('./images/_0022_9.png',  {encoding: 'base64'});
const _10 = fs.readFileSync('./images/_0021_10.png', {encoding: 'base64'});
const _11 = fs.readFileSync('./images/_0020_11.png', {encoding: 'base64'});
const _12 = fs.readFileSync('./images/_0019_12.png', {encoding: 'base64'});
const _13 = fs.readFileSync('./images/_0018_13.png', {encoding: 'base64'});
const _14 = fs.readFileSync('./images/_0017_14.png', {encoding: 'base64'});
const _15 = fs.readFileSync('./images/_0016_15.png', {encoding: 'base64'});
const _16 = fs.readFileSync('./images/_0015_16.png', {encoding: 'base64'});
const _17 = fs.readFileSync('./images/_0014_17.png', {encoding: 'base64'});
const _18 = fs.readFileSync('./images/_0013_18.png', {encoding: 'base64'});
const _19 = fs.readFileSync('./images/_0012_19.png', {encoding: 'base64'});
const _20 = fs.readFileSync('./images/_0011_20.png', {encoding: 'base64'});
const _21 = fs.readFileSync('./images/_0010_21.png', {encoding: 'base64'});
const _22 = fs.readFileSync('./images/_0009_22.png', {encoding: 'base64'});
const _23 = fs.readFileSync('./images/_0008_23.png', {encoding: 'base64'});
const _24 = fs.readFileSync('./images/_0007_24.png', {encoding: 'base64'});

const images = [ _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _1, _2, _3 ];

const hourly = 1000*60*60;
const every10Seconds = 1000*10;
setInterval(update_profile_image, hourly);

function update_profile_image () {
    
    const currentHour = new Date().getHours();
    console.log("Current Hour", currentHour);

    // Grab correct index from images array by using the curent hour to map to the correct image
    const params = { image: images[currentHour] };

    T.post('account/update_profile_image', params, function(err) {
        if(err) {console.error("caught error update_profile_image", err); return;}
        console.log('update_profile_image done');
    })
}
