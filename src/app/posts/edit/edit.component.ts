import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {

  item: Partial<Post | undefined>= {};

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router){}

 async ngOnInit(): Promise<void> {

      const id = +this.route.snapshot.paramMap.get('id')!; 
      this.item = await this.postsService.getPostById(id);
  }

 async updatePost(): Promise<any>{
    await this.postsService.updatePost(this.item?.id!, this.item as Post);
    this.router.navigate(['/list']);
  }
}
