import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  loading = false;
  showSuccess = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.loading = true;

    emailjs.send(
      environment.emailjs_service_id,
      environment.emailjs_template_id,
      {
        from_name: this.name,
        from_email: this.email,
        message: this.message
      },
      environment.emailjs_public_key
    )
    .then((result: EmailJSResponseStatus) => {
      this.loading = false;
      this.showSuccess = true;
      this.name = '';
      this.email = '';
      this.message = '';
      setTimeout(() => this.showSuccess = false, 3500);
    }, (error) => {
      this.loading = false;
      alert('Oops, sending failed! Please check your network or try again.');
      console.error('EmailJS error:', error);
    });
  }
}
