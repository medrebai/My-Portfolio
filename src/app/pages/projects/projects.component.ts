import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: "Business Intelligence Solution For Retail and Ecommerce Enterprise",
      desc: "Sales data management to analyze commercial performance, inventory tracking to optimize product availability, and e-commerce interaction analysis to improve user experience.",
      tech: ["Talend", "Power BI", "PostgreSQL"],
      images: [
        "assets/PFA 2.png",
        "assets/PFA 1.png",
        "assets/PFA 3.png",
        "assets/PFA 4.png"
      ],
      demo: "",
      code: "",
      github: "",
      year: "2025"
    },
    {
      title: "Business Intelligence Solution For a Fitness Center",
      desc: "Implementing a comprehensive decision-making system to optimize subscription management, analyze sports activities, and track financial performance.",
      tech: ["Power BI", "SSIS", "SSMS", "SSAS", "SQL Server"],
    images: [
        "assets/Power BI Project.png",
        "assets/Power BI Project 2 .png",

      ],
      code: "",
      github: "",
      year: "2025"
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
