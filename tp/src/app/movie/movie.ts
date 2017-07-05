export class Movie {
  id:number;
  title:string;
  poster_path:string;
  overview:string;

  public poster():string{
    return this.poster_path? '/api/'+this.poster_path : '';
  }
}
