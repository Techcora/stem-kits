import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTabComponent } from './level-tab.component';

describe('LevelTabComponent', () => {
  let component: LevelTabComponent;
  let fixture: ComponentFixture<LevelTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
