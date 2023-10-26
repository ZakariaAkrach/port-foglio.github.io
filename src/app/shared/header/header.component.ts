import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private http: HttpClient) {}

  downloadPDF() {
    this.http.get('assets/pdf/CV_ZAKARIA_AKRACH.pdf', { responseType: 'arraybuffer' })
      .subscribe(data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
    }
}
