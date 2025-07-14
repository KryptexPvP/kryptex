# 🚀 GitHub Pages Deployment Anleitung

## Schritt 1: Repository erstellen
1. Gehe zu [GitHub](https://github.com) und erstelle ein neues Repository
2. Nenne es `dein-username.github.io` (z.B. `kryptex.github.io`)
3. Stelle sicher, dass es **Public** ist

## Schritt 2: Code hochladen
1. Lade alle Dateien aus dem Portfolio in dein Repository hoch
2. Stelle sicher, dass alle Dateien im Root-Verzeichnis sind

## Schritt 3: GitHub Actions einrichten
Erstelle eine Datei `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Export
      run: npm run export
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
\`\`\`

## Schritt 4: GitHub Pages aktivieren
1. Gehe zu deinem Repository → **Settings**
2. Scrolle zu **Pages** (links im Menü)
3. Wähle **Source**: `Deploy from a branch`
4. Wähle **Branch**: `gh-pages`
5. Klicke **Save**

## Schritt 5: Warten und testen
1. GitHub Actions wird automatisch ausgeführt (dauert 2-5 Minuten)
2. Deine Website ist dann verfügbar unter: `https://dein-username.github.io`

## 🔧 Troubleshooting

### Problem: Build schlägt fehl
- Überprüfe die `package.json` Datei
- Stelle sicher, dass alle Dependencies korrekt sind

### Problem: Seite lädt nicht
- Überprüfe ob GitHub Pages aktiviert ist
- Warte 5-10 Minuten nach dem ersten Deploy

### Problem: Bilder werden nicht angezeigt
- Stelle sicher, dass alle Bilder im `public/` Ordner sind
- Verwende relative Pfade (`/image.png` statt `./image.png`)

## 📝 Wichtige Hinweise
- Jeder Push auf `main` Branch löst automatisch ein neues Deployment aus
- Die Website ist öffentlich zugänglich
- Änderungen können bis zu 10 Minuten dauern bis sie live sind

## 🎯 Custom Domain (Optional)
1. Kaufe eine Domain (z.B. bei Namecheap, GoDaddy)
2. Erstelle eine `CNAME` Datei im Repository mit deiner Domain
3. Konfiguriere DNS-Einstellungen bei deinem Domain-Provider
