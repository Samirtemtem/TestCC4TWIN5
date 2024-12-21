import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantModuleComponent } from './participant-module.component';

describe('ParticipantModuleComponent', () => {
  let component: ParticipantModuleComponent;
  let fixture: ComponentFixture<ParticipantModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantModuleComponent]
    });
    fixture = TestBed.createComponent(ParticipantModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
