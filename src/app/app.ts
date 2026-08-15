import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const icons: [string, string][] = [
      ['Angular', 'assets/Angular.svg'],
      ['Blazor', 'assets/Blazor.svg'],
      ['C', 'assets/C.svg'],
      ['C#', 'assets/C%23%20(CSharp).svg'],
      ['ClaudeCode', 'assets/claude-code.svg'],
    ]

    icons.forEach(([name, url]) =>
      iconRegistry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(url))
    );
  }
}
