import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrincipaleComponent } from './header-principale.component';

describe('HeaderPrincipaleComponent', () => {
  let component: HeaderPrincipaleComponent;
  let fixture: ComponentFixture<HeaderPrincipaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPrincipaleComponent]
    });
    fixture = TestBed.createComponent(HeaderPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
