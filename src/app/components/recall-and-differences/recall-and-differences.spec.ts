import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecallAndDifferences } from './recall-and-differences';

describe('RecallAndDifferences', () => {
  let component: RecallAndDifferences;
  let fixture: ComponentFixture<RecallAndDifferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecallAndDifferences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecallAndDifferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
