import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMoviePageComponent } from './one-movie-page.component';

describe('OneMoviePageComponent', () => {
  let component: OneMoviePageComponent;
  let fixture: ComponentFixture<OneMoviePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMoviePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
