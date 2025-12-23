export type Theme = 'dark' | 'light';

class ThemeManager {
  private currentTheme: Theme;
  private listeners: ((theme: Theme) => void)[] = [];

  constructor() {
    this.currentTheme = this.getInitialTheme();
    this.applyTheme(this.currentTheme);
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem('polarlabs-theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  get theme(): Theme {
    return this.currentTheme;
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    localStorage.setItem('polarlabs-theme', theme);
    this.applyTheme(theme);
    this.listeners.forEach(callback => callback(theme));
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  onThemeChange(callback: (theme: Theme) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
}

export const themeManager = new ThemeManager();
