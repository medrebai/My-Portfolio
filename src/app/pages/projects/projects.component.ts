import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: "Business Intelligence Solution",
      desc: "ETL with Talend, dashboards with Power BI, and reporting via Jaspersoft for a retail enterprise.",
      tech: ["Talend", "Power BI", "Jaspersoft", "PostgreSQL"],
      img: "assets/bi-dashboard.png",
      demo: "",
      code: "",
      github: "https://github.com/yourrepo",
      year: "2025"
    },
    {
      title: "Artar Mobile App",
      desc: "Developed and deployed an AR/VR art gallery app with Flutter and Firebase.",
      tech: ["Flutter", "Firebase", "Unity", "AR/VR"],
      img: "assets/artar-app.png",
      demo: "http://artanit.org/",
      code: "",
            github: "https://github.com/yourrepo",

      year: "2023"
    },
    {
      title: "ERP Module Integration",
      desc: "Streamlined business operations with a custom ERP module using WinDev and Java.",
      tech: ["WinDev", "Java", "ERP"],
      img: "assets/erp.png",
      demo: "",
      code: "",
            github: "https://github.com/yourrepo",

      year: "2022"
    },
    {
      title: "Log Management Platform",
      desc: "Built cloud log management with Datadog, GCS and Talend. Automated cleanup, Dockerized workflows.",
      tech: ["Datadog", "GCP", "Talend", "Docker"],
      img: "assets/log-mgmt.png",
      demo: "",
      code: "",
            github: "https://github.com/yourrepo",

      year: "2024"
    }
    // Add more projects as needed!
  ];

  visibleCards: boolean[] = [];

  @ViewChildren('projectCardRef') projectCardRefs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.visibleCards = Array(this.projects.length).fill(false);
    this.projectCardRefs.forEach((card, idx) => {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            this.visibleCards[idx] = true;
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(card.nativeElement);
    });
  }
}
