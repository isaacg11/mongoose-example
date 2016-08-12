namespace app.Controllers {

  // Home Controller
  export class HomeController {
    public movies;
    public user;

    constructor(private movieService: app.Services.MovieService) {
      this.user = localStorage.getItem("id");
      this.movies = movieService.getAll(this.user);
    }
  }

  // AddMovie Controller
  export class AddMovieController {
    public movie;
    public id;
    public user;

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      if($stateParams) {
        this.id = $stateParams['id'];
      }
      this.user = localStorage.getItem("id");
    }

    public save() {
      let params = {
        title: this.movie.title,
        genre: this.movie.genre,
        id: this.id,
        owner: this.user
      };

      this.movieService.save(params).then((res) => {
        this.$state.go('Home');
      });
    }
  }

  // DeleteMovie Controller
  export class DeleteMovieController {
    public id;

    public remove() {
      this.movieService.remove(this.id).then(() =>{
        this.$state.go("Home");
      })
    }

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      if($stateParams) {
        this.id = $stateParams['id'];
      }
    }
  }

  // Register/Login Controller
  export class LoginController {
    public user;

    constructor(
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {

    }

    public login() {
      this.userService.login(this.user).then((res) => {
        localStorage.setItem("id", res._id);
        this.$state.go('Home');
      });
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
