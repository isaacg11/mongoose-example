import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Movie = mongoose.model('Movie', {
  title: String,
  genre: String,
  owner: String,
  date_created: Date,
  date_deleted: {
    type: Date,
    default: null
  },
});

/* CREATE or UPDATE movies */
router.post('/movies', function(req, res, next) {
  console.log(req.body);
  if(req.body.id === undefined){
    let new_movie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      owner: req.body.owner,
      date_created: new Date()
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
    });
  }
  res.sendStatus(200);
});

/* GET movies */
router.get('/movies/:id', function(req, res, next) {
  let id = req.params['id'];
  Movie.find({ date_deleted: null , owner: id}).then(function(movies){
    res.json(movies);
  })
});

/* DELETE movie */
router.delete('/movies/:id', function(req, res, next) {
  let id = req.params['id'];
  Movie.findByIdAndUpdate(id, { $set: { date_deleted: new Date()}}, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.sendStatus(200);
});

export = router;
