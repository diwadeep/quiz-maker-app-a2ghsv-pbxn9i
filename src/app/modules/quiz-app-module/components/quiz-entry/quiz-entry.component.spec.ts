import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizEntryComponent } from './quiz-entry.component';

describe('QuizEntryComponent', () => {
  let component: QuizEntryComponent;
  let fixture: ComponentFixture<QuizEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
