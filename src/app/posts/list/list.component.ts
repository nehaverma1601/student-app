import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [PostsService]
})
export class ListComponent implements OnInit {
  items: Post[] | undefined= [];

  constructor(private postService: PostsService){}

  async ngOnInit(): Promise<void>{
      this.items = await this.postService.getPosts();
  }



  async deleteItem(id: number): Promise<void>{
    await this.postService.deletePost(id);
    this.items = await this.postService.getPosts();
  }


}
