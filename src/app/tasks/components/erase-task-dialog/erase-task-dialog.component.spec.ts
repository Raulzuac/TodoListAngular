import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseTaskDialogComponent } from './erase-task-dialog.component';

describe('EraseTaskDialogComponent', () => {
  let component: EraseTaskDialogComponent;
  let fixture: ComponentFixture<EraseTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EraseTaskDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EraseTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
