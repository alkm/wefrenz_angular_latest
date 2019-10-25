import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentitemComponent } from './commentitem.component';

describe('CommentitemComponent', () => {
  let component: CommentitemComponent;
  let fixture: ComponentFixture<CommentitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
