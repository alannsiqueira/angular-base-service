import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService extends BaseService {

  // overload to type to our specific Type
  protected _subject$: Subject<Array<Post>>;

  constructor(protected http: HttpClient) {
    super(http);

    const options = {
      route: 'posts'
    };
    this.init(options);
  }

  // expose our subject as an observable
  get posts$() {
    return this._subject$.asObservable();
  }

  // force a manual refesh
  public getLatest(entity?: Post): Promise<Array<Post>> {
    return this.load(entity);
  }
}

export class Post {
  userId?: number;
  id: number;
  title?: string;
  body?: string;
}
