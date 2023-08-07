import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TonedButtonComponent } from './toned-button.component';

describe('TonedButtonComponent', () => {
  let component: TonedButtonComponent;
  let fixture: ComponentFixture<TonedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonedButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TonedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
