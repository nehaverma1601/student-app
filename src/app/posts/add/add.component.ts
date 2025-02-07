import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  item: Partial<Post> = {'title':'', 'body': '', 'userId':1}

  constructor(private postsService: PostsService, private router: Router){}

  async createPost(): Promise<void>{

    await this.postsService.addPost(this.item as Post);
    this.router.navigate(['/list']);
  
  }

}
