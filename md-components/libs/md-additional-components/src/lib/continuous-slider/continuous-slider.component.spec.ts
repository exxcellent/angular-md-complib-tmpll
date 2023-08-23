import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinuousSliderComponent } from './continuous-slider.component';

describe('ContinuousSliderComponent', () => {
  let component: ContinuousSliderComponent;
  let fixture: ComponentFixture<ContinuousSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinuousSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContinuousSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
