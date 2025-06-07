import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  internships = [
    {
      company: 'OliveSoft',
      title: 'Data Engineering Intern',
      date: 'June 2024 – Aug 2024',
      desc: `Built cloud-based log management solution with Datadog, GCS and Talend. Automated log cleanups and Dockerized workflows.`,
      keywords: ['Datadog', 'Talend', 'Docker', 'GCP'],
    },
    {
      company: 'OliveSoft',
      title: 'Apprenticeship',
      date: 'Jan 2024 – June 2024',
      desc: `Supported HR & admin operations, observed AI/data projects, helped restructure company branding.`,
      keywords: ['HR', 'AI', 'Data Engineering'],
    },
    {
      company: 'Artanit',
      title: 'Mobile Development Intern',
      date: 'Feb 2023 – May 2023',
      desc: `Developed features for 'Artar' mobile app (Flutter, Firebase), enabled AR/VR for virtual gallery visits.`,
      keywords: ['Flutter', 'Firebase', 'AR/VR'],
    },
    {
      company: 'ABS Computer',
      title: 'ERP Development Intern',
      date: 'June 2022',
      desc: `Built ERP module integration app to streamline business ops. Used WinDev and Java.`,
      keywords: ['ERP', 'WinDev', 'Java'],
    },
    {
      company: 'Syphax Services',
      title: 'Marketing & Media Management Intern',
      date: 'July 2021',
      desc: `Managed digital content and media campaigns.`,
      keywords: ['Media', 'Marketing'],
    }
  ];

  visibleEntries: boolean[] = [];

  @ViewChildren('timelineEntry') timelineEntries!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.visibleEntries = Array(this.internships.length).fill(false);
    this.timelineEntries.forEach((entry, idx) => {
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
