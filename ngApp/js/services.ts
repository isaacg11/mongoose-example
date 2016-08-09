namespace app.Services {
  export class MovieService {
    private MovieResource;
    private UpdateResource;

    public getAll() {
      return this.MovieResource.query();
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
    constructor(private $resource: ng.resource.IResourceService){
      this.MovieResource = $resource('/api/movies/:id');
    }
  }
  angular.module('app').service('movieService', MovieService);
}
