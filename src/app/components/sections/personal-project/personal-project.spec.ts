import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProject } from './personal-project';

describe('PersonalProject', () => {
  let component: PersonalProject;
  let fixture: ComponentFixture<PersonalProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
