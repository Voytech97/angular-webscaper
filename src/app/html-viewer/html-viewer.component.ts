import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.css']
})
export class HtmlViewerComponent implements OnInit {
  htmlContent: any;
  htmlContentLines: any;
  wprowadzonaWartosc: any;
  url = 'https://example.com';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getHTML();
  }

  getHTML() {
    const url = 'https://example.com'; // Podaj adres strony internetowej
    this.http.get(url, { responseType: 'text' }).subscribe(response => {
        this.htmlContent = this.stripHtml(response);
        this.htmlContentLines = this.htmlContent.split('\n'); // Dzieli zawartość na linie
        console.log(this.htmlContentLines); // Wyświetlenie zawartości htmlContentLines w konsoli
    });
}


  stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, ''); // Usuwa znaczniki HTML
  }
}

// wersja z inputem

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-html-viewer',
//   templateUrl: './html-viewer.component.html',
//   styleUrls: ['./html-viewer.component.css']
// })
// export class HtmlViewerComponent implements OnInit {
//   htmlContent: any;
//   htmlContentLines: any;
//   url: string = ''; // Inicjalizacja zmiennej url
//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     // this.getHTML(); // Nie wywołuj getHTML() w momencie inicjalizacji komponentu
//   }

//   getHTML() {
//     if (!this.url) {
//       console.error('URL is empty');
//       return;
//     }

//     this.http.get(this.url, { responseType: 'text' }).subscribe(response => {
//       this.htmlContent = this.stripHtml(response);
//       this.htmlContentLines = this.htmlContent.split('\n');
//       console.log(this.htmlContentLines);
//     });
//   }

//   stripHtml(html: string): string {
//     return html.replace(/<[^>]*>/g, '');
//   }
// }
