import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamsComponent } from './myteams.component';

describe('MyteamsComponent', () => {
  let component: MyteamsComponent;
  let fixture: ComponentFixture<MyteamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyteamsComponent]
    });
    fixture = TestBed.createComponent(MyteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
