import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillsComponent implements AfterViewInit {
  mainSkills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Flutter', level: 78 },
    { name: 'TypeScript', level: 75 },
    { name: 'Power BI', level: 72 },
    { name: 'Talend', level: 70 },
    { name: 'PostgreSQL', level: 70 }
  ];

  otherSkills = [
    'C/C++', 'Dart', 'React', 'Laravel', 'Bootstrap', 'Odoo', 'GCP', 'AWS',
    'Excel', 'MySQL', 'Pandas', 'matplotlib', 'scikit-learn', 'TensorFlow',
    'Deep Learning', 'Machine Learning', 'Jira', 'Git', 'Notion', 'Trello'
  ];

  animatedLevels: number[] = [];
  animatedTags = false;

  @ViewChild('skillsSection') skillsSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          // Animate bars and tags
          this.animatedLevels = this.mainSkills.map(skill => skill.level);
          this.animatedTags = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    observer.observe(this.skillsSection.nativeElement);
  }
}
