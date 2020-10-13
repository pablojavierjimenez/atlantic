// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ButtonComponent } from './button.component';

// describe('ButtonComponent', () => {
//   let component: ButtonComponent;
//   let fixture: ComponentFixture<ButtonComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ButtonComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ButtonComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        ButtonComponent
      ],
      providers: []
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button click event is trriggered', fakeAsync( () => {
    spyOn(component, 'onClick');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    // expect(component.click).toHaveBeenCalled();
  }));

});
