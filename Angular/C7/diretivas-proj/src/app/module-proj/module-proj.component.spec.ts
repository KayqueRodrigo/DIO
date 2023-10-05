import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleProjComponent } from './module-proj.component';

describe('ModuleProjComponent', () => {
  let component: ModuleProjComponent;
  let fixture: ComponentFixture<ModuleProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
