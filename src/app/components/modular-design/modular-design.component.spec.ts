import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularDesignComponent } from './modular-design.component';

describe('ModularDesignComponent', () => {
  let component: ModularDesignComponent;
  let fixture: ComponentFixture<ModularDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModularDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModularDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
