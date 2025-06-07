import { AfterViewInit, ElementRef, ViewChild, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  isVisible = false;
  @ViewChild('funfactSection') funfactSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(this.funfactSection.nativeElement);
  }

  getTimelineIcon(type: string) {
    switch(type) {
      case 'leader': return '⭐';
      case 'finance': return '💸';
      case 'tech': return '💻';
      case 'event': return '📅';
      case 'award': return '🏆';
      case 'media': return '📣';
      case 'web': return '🌐';
      default: return '🔷';
    }
  }

  ieeeTimeline = [
    {
      year: '2025',
      title: 'Student Representative',
      chapter: 'IEEE Tunisia Section',
      type: 'leadership',
      icon: 'leader',
    },
    {
      year: '2025-2026',
      title: 'Treasurer',
      chapter: 'IEEE IES Tunisia Chapter',
      type: 'finance',
      icon: 'money',
    },
    {
      year: '2025-2026',
      title: 'Treasurer',
      chapter: 'IEEE SIGHT Tunisia Chapter',
      type: 'finance',
      icon: 'money',
    },
    {
      year: '2025',
      title: 'Technical Track Chair',
      chapter: 'IEEE IES SYP 2025',
      type: 'technical',
      icon: 'tech',
    },
    {
      year: '2024',
      title: 'Program & Planning Manager',
      chapter: 'IEEE Tunisian SYP 12',
      type: 'events',
      icon: 'event',
    },
    {
      year: '2023',
      title: 'Ambassador (Best Ambassador Award)',
      chapter: 'IEEE Tunisian SYP 11',
      type: 'award',
      icon: 'award',
    },
    {
      year: '2023',
      title: 'Social Media Coordinator',
      chapter: 'IEEE ENETCOM Student Branch',
      type: 'media',
      icon: 'media',
    },
    {
      year: '2022',
      title: 'Webmaster',
      chapter: 'IEEE Computer Society ENETCOM SBC',
      type: 'web',
      icon: 'web',
    },
  ];
}
