import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardNavComponent } from './leaderboard-nav.component';

describe('LeaderboardNavComponent', () => {
  let component: LeaderboardNavComponent;
  let fixture: ComponentFixture<LeaderboardNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
