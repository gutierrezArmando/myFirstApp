import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshBoardChildComponent } from './darsh-board-child.component';

describe('DarshBoardChildComponent', () => {
  let component: DarshBoardChildComponent;
  let fixture: ComponentFixture<DarshBoardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarshBoardChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarshBoardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
