import express = require('express');
// import mongoose = require('mongoose');
let mongoose = require('mongoose');
// let Movie = require('../models/Movie');
let router = express.Router();

mongoose.createConnection('mongodb://localhost/myNewDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Server connection successful!')
});

/* Post to create or update movie */
router.post('/movies', function(req, res, next) {
  let Movie = mongoose.model('Movie', { title: String , genre: String});
  let new_movie = new Movie({ title: req.body.title, genre: req.body.genre });
  new_movie.save(function (err, movie) {
    if (err) {
      console.log(err);
    } else {
      console.log(movie);
    }
  })
  // let movie = req.body;
  // // update existing movie
  // if (movie.id) {
  //   let original = findMovie(movie.id);
  //   original.title = movie.title;
  //   original.director = movie.director;
  // // create new movie
  // } else {
  //   movie.id = ++movieId;
  //   movies.push(movie);
  // }
  // res.sendStatus(200);
});

// create static list of movies
// let movies = [
//    {id:1, title:"Star Wars", director:"Lucas" },
//    {id:2, title:"The Martian", director:"Scott" },
//    {id:3, title:"Ex Machina", director:"Garland" },
//    {id:4, title:"Superman", director:"Donner" },
//    {id:5, title:"Shrek", director:"Adamson" }
//
// ];
// unique movie id
// let movieId = movies.length;

/* GET movies */
// router.get('/movies', function(req, res, next) {
//   res.json(movies);
// });

/* GET movie by id */
// router.get('/movies/:id', function(req, res, next) {
//   let id = parseInt(req.params['id']);
//   let movie = findMovie(id);
//   if (movie) {
//     res.json(movie);
//   } else {
//     res.sendStatus(404);
//   }
// });


/* delete movie by id */
// router.delete('/movies/:id', function(req, res, next) {
//   let id = parseInt(req.params['id']);
//   if (!findMovie(id)) {
//     res.sendStatus(404);
//   } else {
//     movies = movies.filter((movie)=> {
//       return movie.id != id;
//     });
//     res.sendStatus(200);
//   }
// });

/* find matching movies */
// router.get('/movies/search/:search', function(req, res, next) {
//     let search = req.params['search'];
//     let matches = movies.filter((movie)=>{
//       return movie.title.indexOf(search) == 0;
//     });
//     res.json(matches);
// });
//
// function findMovie(id:number) {
//   let matches = movies.filter((movie) => {
//     return movie.id == id;
//   });
//   return matches.length ? matches[0] : null;
// }

export = router;
