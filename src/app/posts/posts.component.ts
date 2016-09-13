import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post, Comment } from './post';
import {UserService, User} from '../users';
import { SpinnerComponent, PaginationComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  providers: [PostService, UserService],
  directives: [SpinnerComponent, PaginationComponent],
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css']
})
export class PostsComponent implements OnInit {
  postsLoading: boolean;
  usersLoading: boolean;
  commentsLoading: boolean;

  users: User[];
  posts: Post[];
  paginatedPosts: Post[];
  postsPerPage = 10;

  selectedPost: Post;
  comments: Comment[];

  constructor(private _postService: PostService,
    private _usersService: UserService) { }

  pageChanged(page) {
    let start = (page - 1) * this.postsPerPage;
    let end = page * this.postsPerPage;
    if (end > this.posts.length) {
      end = this.posts.length;
    }
    this.paginatedPosts = this.posts.slice(start, end);
  }
  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  private loadPosts(filter?) {
    this.postsLoading = true;
    this.posts = [];
    this.selectedPost = null;
    this._postService.getPosts(filter)
      .subscribe(posts => this.posts = posts,
      null,
      () => this.postsLoading = false);
  }

  private loadUsers() {
    this.usersLoading = true;
    this.users = [];
    this._usersService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.usersLoading = false;
      });
  }

  private loadComments(post: Post) {
    this.commentsLoading = true;
    this.comments = [];

    this._postService.getComments(post)
      .subscribe(comments => {
        this.comments = comments;
        this.commentsLoading = false;
      });
  }

  selectPost(post: Post) {
    this.selectedPost = post;
    this.loadComments(post);
  }

  reloadPosts(filter) {
    this.loadPosts(filter);
  }

}
