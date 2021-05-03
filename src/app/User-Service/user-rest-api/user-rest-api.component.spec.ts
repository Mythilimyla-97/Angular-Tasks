import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestAPIComponent } from './user-rest-api.component';

describe('UserRestAPIComponent', () => {
  let component: UserRestAPIComponent;
  let fixture: ComponentFixture<UserRestAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
