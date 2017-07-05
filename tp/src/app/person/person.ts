import {Type} from 'class-transformer';
export class Person {
  id:any;
  public name:string;
  profile_path:string;
  @Type(() => Date)
  birthday:Date;

  public image():string{
    return this.profile_path? '<img src="/api/'+this.profile_path+'">' : '';
  }
}
