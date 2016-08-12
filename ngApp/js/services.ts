namespace app.Services {
  export class MovieService {
    private MovieResource;

    constructor(private $resource: ng.resource.IResourceService){
      this.MovieResource = $resource('/api/movies/:id');
    }

    public getAll(user) {
      return this.MovieResource.query({id: user});
    }

    public save(movie) {
      return this.MovieResource.save(movie).$promise;
    }

    public get(id){
      return this.MovieResource.get({id:id})
    }

    public remove(id) {
      return this.MovieResource.remove({id:id}).$promise;
    }
  }

  export class UserService {
    private UserResource;

    constructor(private $resource: ng.resource.IResourceService){
      this.UserResource = $resource('/api/users/:id');
    }

    public login(user) {
      return this.UserResource.save(user).$promise;
    }
  }
  angular.module('app').service('movieService', MovieService);
  angular.module('app').service('userService', UserService);
}
