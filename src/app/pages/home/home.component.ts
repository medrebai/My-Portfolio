import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  internships = [
    {
      company: 'TELNET',
      title: 'Software Engineering Intern',
      location: 'Tunis, Tunisia',
      date: 'June 2025 – Aug 2025',
      bullets: [
        'Developed a centralized platform to collect, visualize, and analyze Jira project data via Atlassian APIs.',
        'Integrated dashboards using Power BI for KPI visualization and performance insights.'
      ],
      keywords: ['Jira API', 'Agile Analytics', 'Power BI', 'Scrum', 'Springboot', 'Angular', 'PostgreSQL', 'SOLID Principles']
    },
    {
      company: 'OliveSoft',
      title: 'Data Engineering Intern',
      location: 'Sfax, Tunisia',
      date: 'June 2024 – Aug 2024',
      bullets: [
        'Built cloud-based log management solution with Datadog, Google Cloud Storage, and Talend.',
        'Automated log cleanups to optimize storage.',
        'Dockerized the job workflows for consistency.'
      ],
      keywords: ['Datadog', 'Log Management', 'Docker', 'GCP', 'Scrum', 'Monitoring', 'Data Integration']
    },
    {
      company: 'OliveSoft',
      title: 'Apprenticeship',
      location: 'Sfax, Tunisia',
      date: 'Jan 2024 – June 2024',
      bullets: [
        'Supported HR and administrative operations.',
        'Observed and documented data engineering and AI projects.',
        'Assisted in restructuring the company’s graphic charter and website.'
      ],
      keywords: ['Project Management', 'Marketing Strategy', 'Data Engineering', 'Data Science', 'Retail', 'E-commerce']
    },
    {
      company: 'Artanit',
      title: 'Mobile Development Intern',
      location: 'Sfax, Tunisia',
      date: 'Feb 2023 – May 2023',
      bullets: [
        'Developed features for the “Artar” mobile app using Flutter and Firebase.',
        'Integrated AR/VR technologies enabling virtual gallery visits.'
      ],
      keywords: ['AR', 'Flutter', 'Firebase', 'Unity', 'Mobile App Development', 'Kanban']
    },
    {
      company: 'ABS Computer',
      title: 'ERP Development Intern',
      location: 'Sfax, Tunisia',
      date: 'June 2022',
      bullets: [
        'Built ERP module integration app to streamline business operations.',
        'Implemented features with WinDev and Java.'
      ],
      keywords: ['ERP', 'WinDev', 'Java']
    },
    {
      company: 'Syphax Services',
      title: 'Marketing & Media Management Intern',
      location: 'Sfax, Tunisia',
      date: 'July 2021',
      bullets: [
        'Managed digital content and media campaigns.',
        'Coordinated media calendars and basic reporting.'
      ],
      keywords: ['Media', 'Marketing']
    }
  ];

  visibleEntries: boolean[] = [];

  @ViewChildren('expRef') expItems!: QueryList<ElementRef>;

  // Minimal addition: education entries (no extra animations to avoid layout changes)
  education = [
    {
      school: 'International Institute of Technology',
      degree: 'Software and Data Engineering Degree (GLID)',
      date: 'Present'
    },
    {
      school: "ENET’Com",
      degree: 'License in Information Technology and Communication (LTIC)',
      date: 'June 2023'
    },
    {
      school: 'Lycée 25 juillet 1956',
      degree: 'Baccalaureate in Experimental Sciences',
      date: '2019'
    }
  ];

  ngAfterViewInit() {
    this.visibleEntries = Array(this.internships.length).fill(false);
    this.expItems.forEach((entry, idx) => {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            this.visibleEntries[idx] = true;
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(entry.nativeElement);
    });
  }
}
