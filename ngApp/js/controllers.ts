namespace app.Controllers {

  // Home Controller
  export class HomeController {
    public movies;
    constructor(private movieService: app.Services.MovieService) {
      this.movies = movieService.getAll();
    }
  }
  // AddMovie Controller
  export class AddMovieController {
    public movie;
    public id;

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      if($stateParams) {
        this.id = $stateParams['id'];
      }
    }

    public save(movie) {
      this.movieService.save(movie).then((res) => {
        console.log(res);
        this.$state.go('Home');
      });
    }
  }

  // export class UpdateMovieController {
  //   public movieToEdit;
  //   public movieId;
  //
  //   constructor(
  //     $http: ng.IHttpService,
  //     $stateParams: ng.ui.IStateParamsService,
  //     private movieService: app.Services.MovieService,
  //     private $state: ng.ui.IStateService
  //   ) {
  //       let movieId = $stateParams['id'];
  //   }
  //
  //   public edit($http: ng.IHttpService) {
  //     this.movieToEdit._id = this.movieId;
  //     $http.post('/api/movies/update', this.movieToEdit).then((res) => {
  //       console.log(res)
  //     })
  //   }

    // constructor(
    //   private movieService: app.Services.MovieService,
    //   private $state: ng.ui.IStateService,
    //   $stateParams: ng.ui.IStateParamsService,
    //   $http: ng.IHttpService
    // ) {
    //   let movieId = $stateParams['id'];
    // }
  // }

  export class DeleteMovieController {
    public movieToDelete;

    public remove() {
      this.movieService.remove(this.movieToDelete.id).then(() =>{
        this.$state.go("Home");
      })
    }

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      this.movieToDelete = movieService.get($stateParams['id']);
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
