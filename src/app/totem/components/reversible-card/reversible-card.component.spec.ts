import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversibleCardComponent } from './reversible-card.component';

describe('ReversibleCardComponent', () => {
  let component: ReversibleCardComponent;
  let fixture: ComponentFixture<ReversibleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversibleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
