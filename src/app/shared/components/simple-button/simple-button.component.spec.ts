import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonComponent } from './simple-button.component';

describe('SimpleButtonComponent', () => {
  let component: SimpleButtonComponent;
  let fixture: ComponentFixture<SimpleButtonComponent>;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SimpleButtonComponent
      ],
      providers: []
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SimpleButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false);
    component.clicked();
    expect(component.isOn).toBe(true);
    component.clicked();
    expect(component.isOn).toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i);
    component.clicked();
    expect(component.message).toMatch(/is on/i);
  });
});
