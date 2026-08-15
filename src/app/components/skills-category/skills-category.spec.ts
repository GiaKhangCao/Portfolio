import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCategory } from './skills-category';

describe('SkillsCategory', () => {
  let component: SkillsCategory;
  let fixture: ComponentFixture<SkillsCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
