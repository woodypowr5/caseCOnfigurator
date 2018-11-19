import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguredImageComponent } from './configured-image.component';

describe('ConfiguredImageComponent', () => {
  let component: ConfiguredImageComponent;
  let fixture: ComponentFixture<ConfiguredImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguredImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguredImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
