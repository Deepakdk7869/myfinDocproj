import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileinputComponent } from './mobileinput.component';

describe('MobileinputComponent', () => {
  let component: MobileinputComponent;
  let fixture: ComponentFixture<MobileinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
