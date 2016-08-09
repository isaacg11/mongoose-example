import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Movie = mongoose.model('Movie', {
  title: String,
  genre: String
});

/* CREATE or UPDATE movies */
router.post('/movies', function(req, res, next) {
  if(req.body.id === undefined){
    let new_movie = new Movie({
      title: req.body.title,
      genre: req.body.genre
    });
    new_movie.save(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }
  else{
    Movie.findByIdAndUpdate(req.body.id, { $set: { title: req.body.title, genre: req.body.genre}}, function (err, movie) {
      if (err) {
        console.log(err);
      } else {
        console.log(movie);
      }
      res.send(req.body);
    });
  }
});

/* GET movies */
router.get('/movies', function(req, res, next) {
  Movie.find({}).then(function(movies){
    res.json(movies);
  })
});

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
