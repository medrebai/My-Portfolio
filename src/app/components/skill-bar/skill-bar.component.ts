import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  // Skill Icons ID (https://skillicons.dev) — leave empty if not available
  iconId?: string;
  // Simple Icons slug (https://simpleicons.org) as a fallback
  slug?: string;
  // DevIcons class (https://devicon.dev) e.g., 'devicon-odoo-plain colored'
  deviconClass?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {
  categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', iconId: 'py', slug: 'python' },
        { name: 'Java', iconId: 'java', slug: 'java' },
        { name: 'C', iconId: 'c', slug: 'c' },
        { name: 'C++', iconId: 'cpp', slug: 'cplusplus' },
        { name: 'Dart', iconId: 'dart', slug: 'dart' },
        { name: 'TypeScript', iconId: 'ts', slug: 'typescript' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', iconId: 'flutter', slug: 'flutter' },
        { name: 'Angular', iconId: 'angular', slug: 'angular' },
        { name: 'Laravel', iconId: 'laravel', slug: 'laravel' },
        { name: 'Springboot', iconId: 'spring', slug: 'springboot' },
        { name: 'Odoo', slug: 'odoo', deviconClass: 'devicon-odoo-plain colored' }
      ]
    },
    {
      title: 'Data & Cloud',
      skills: [
        { name: 'Talend', slug: 'talend' },
        { name: 'Power BI', slug: 'powerbi' },
        { name: 'PostgreSQL', iconId: 'postgres', slug: 'postgresql' },
        { name: 'AWS', iconId: 'aws', slug: 'amazonaws' },
        { name: 'MySQL', iconId: 'mysql', slug: 'mysql' }
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'Pandas', slug: 'pandas' },
        { name: 'Matplotlib', slug: 'matplotlib' },
        { name: 'scikit-learn', slug: 'scikitlearn' },
        { name: 'TensorFlow', iconId: 'tensorflow', slug: 'tensorflow' },
        { name: 'Deep Learning' },
        { name: 'Machine Learning' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Jira', slug: 'jira', deviconClass: 'devicon-jira-plain colored' },
        { name: 'Confluence', slug: 'confluence', deviconClass: 'devicon-confluence-plain colored' },
        { name: 'Git', iconId: 'git', slug: 'git' },
        { name: 'GitHub', iconId: 'github', slug: 'github' },
        { name: 'GitLab', iconId: 'gitlab', slug: 'gitlab' },
        { name: 'Scrum', slug: 'scrumalliance' },
        { name: 'Notion', slug: 'notion' },
        { name: 'Trello', slug: 'trello', deviconClass: 'devicon-trello-plain colored' },
        { name: 'Datadog', slug: 'datadog', deviconClass: 'devicon-datadog-plain colored' },
        { name: 'Docker', iconId: 'docker', slug: 'docker' }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'Arabic (Native)' },
        { name: 'French (Advanced)' },
        { name: 'English (Advanced)' }
      ]
    }
  ];

  ngOnInit(): void {}

  getSkillIconsUrl(iconId: string) {
    return `https://skillicons.dev/icons?i=${iconId}&theme=dark`;
  }

  getSimpleIconUrl(slug?: string) {
    return slug ? `https://cdn.simpleicons.org/${slug}` : '';
  }

  // Swap to Simple Icons when Skill Icons is missing
  onIconError(ev: Event, slug?: string) {
    const img = ev.target as HTMLImageElement | null;
    if (!img) return;

    const alreadyFallback = img.dataset?.['fallbackDone'] === '1';
    if (alreadyFallback) return;

    const fallback = this.getSimpleIconUrl(slug);
    if (fallback) {
      img.dataset['fallbackDone'] = '1';
      img.src = fallback;
    } else {
      // No fallback available: hide the image box
      img.style.display = 'none';
    }
  }
}
