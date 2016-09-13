/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PostService } from './post.service';

describe('Service: Post', () => {
  beforeEach(() => {
    addProviders([PostService]);
  });

  it('should ...',
    inject([PostService],
      (service: PostService) => {
        expect(service).toBeTruthy();
      }));
});
