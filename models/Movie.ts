// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;
//
// let MovieSchema = new Schema({
//     title: String,
//     genre: String
// });
//
// let Movie = mongoose.model("Movie", MovieSchema);

// let mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost/myNewDB');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('we are connected!')
// });
//
// let Movie = mongoose.model('Movie', { title: String , genre: String});
//
// let new_movie = new Movie({ title: 'Fast n Furious', genre: 'Action' });
// new_movie.save(function (err, movie) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(movie);
//   }
// })
