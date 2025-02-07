import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { }

  async getPosts(): Promise<Post[] | undefined>{
    return await this.http.get<Post[] | undefined>(this.apiUrl).toPromise();
  }

  async getPostById(id: number):Promise<Post | undefined>{
    return await this.http.get<Post>(`${this.apiUrl}/${id}`).toPromise();
  }

  async addPost(post: Post): Promise<Post | undefined>{
    return await this.http.post<Post>(this.apiUrl, post).toPromise();
  }

  async updatePost(id: number, post: Post): Promise<Post | undefined>{
    return await this.http.put<Post>(`${this.apiUrl}/${id}`, post).toPromise();
  }

  async deletePost(id: number) : Promise<Post | undefined>{
    return await this.http.delete<Post>(`${this.apiUrl}/${id}`).toPromise();

  }
}
