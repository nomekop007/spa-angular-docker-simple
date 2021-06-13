import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHeroeComponent } from './find-heroe.component';

describe('FindHeroeComponent', () => {
  let component: FindHeroeComponent;
  let fixture: ComponentFixture<FindHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
