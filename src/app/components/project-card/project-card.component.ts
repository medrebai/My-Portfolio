import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: any;
  @Input() visible = false;

  currentImageIndex = 0;
  modalImageIndex = 0;
  isModalOpen = false;

  get currentImage(): string {
    if (this.project.images && this.project.images.length > 0) {
      return this.project.images[this.currentImageIndex];
    }
    return this.project.img || '';
  }

  get hasMultipleImages(): boolean {
    return this.project.images && this.project.images.length > 1;
  }

  get modalCurrentImage(): string {
    if (this.project.images && this.project.images.length > 0) {
      return this.project.images[this.modalImageIndex];
    }
    return this.project.img || '';
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    if (this.hasMultipleImages) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    if (this.hasMultipleImages) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  goToImage(index: number, event: Event): void {
    event.stopPropagation();
    this.currentImageIndex = index;
  }

  openModal(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.modalImageIndex = this.currentImageIndex;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextModalImage(event: Event): void {
    event.stopPropagation();
    if (this.project.images && this.project.images.length > 0) {
      this.modalImageIndex = (this.modalImageIndex + 1) % this.project.images.length;
    }
  }

  prevModalImage(event: Event): void {
    event.stopPropagation();
    if (this.project.images && this.project.images.length > 0) {
      this.modalImageIndex = (this.modalImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  goToModalImage(index: number, event: Event): void {
    event.stopPropagation();
    this.modalImageIndex = index;
  }
}
