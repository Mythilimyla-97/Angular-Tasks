import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainPipeComponent } from './chain-pipe.component';

describe('ChainPipeComponent', () => {
  let component: ChainPipeComponent;
  let fixture: ComponentFixture<ChainPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
