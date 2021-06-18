<img src="http://assets.angular.schule/header-intensivworkshop.png">

#### **mit Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du unsere Beispielanwendung für den Workshop.

# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## Benötigte Software

1. **Node.js 14** (aktuelle LTS Version): [https://nodejs.org](https://nodejs.org)
   + Mac-Benutzer bitte Homebrew verwenden! ([siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE))
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
   + **[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)** (Chrome Extension)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
4. optional: **Git** (und ggf. ein grafischer Client wie SourceTree oder GitExtensions)

Wir empfehlen dir eine Auswahl an Extensions für Visual Studio Code.
Dazu haben wir ein Extension Pack vorbereitet, das alles nötige einrichtet:
+ [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)

   Dazu gehören die folgenden Extensions. Wenn du möchtest, kannst du diese Extensions auch einzeln manuell installieren:

  * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
  * [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  * [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

## Proxy?

Für die Proxykonfiguration im Unternehmensnetz sind gesonderte Einstellungen nötig.
Wir haben dir hierfür folgende Anleitung erstellt:
https://presentations.angular.schule/PROXY.html  
Sollte es Probleme mit dem Proxy geben, melde Dich bitte bei uns, dann finden wir eine Lösung.


## Pakete installieren

Wir nutzen in diesem Workshop das Buildtool [**Nrwl Nx**](https://nx.dev). Es ist eine Erweiterung der offiziellen Angular CLI.
Mit folgendem Befehl kannst Du die Nx CLI auf dem System installieren:

```
npm install -g nx
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.

```
node -v
> Erwartet: v12.x oder höher

npm -v
> Erwartet: 6.x oder höher
```


## Startprojekt installieren

Wir haben in diesem Repository bereits ein Startprojekt angelegt.
Es handelt sich um eine "frische" Angular-Anwendung in einem Nx-Workspace, die wir im Workshop weiterentwickeln werden.

Bitte lade dir das Projekt herunter und installiere es.

### Herunterladen

Du kannst *entweder* das gesamte Repo mit Git klonen:

```bash
git clone https://github.com/angular-schule/2021-06-angular-workshop-karlsruhe.git
```

... *oder* du lädst das Repo als ZIP herunter: [Download](https://github.com/angular-schule/2021-06-angular-workshop-karlsruhe/archive/refs/heads/main.zip)

### Installieren

Nach dem Download navigiere in den Ordner `2021-06-angular-workshop-karlsruhe` und führe dort die folgenden Befehle aus:

```bash
cd book-rating
npm install
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.

### Starten

Anschließend kannst Du das Projekt aus dem Ordner `book-rating` mit folgendem Befehl starten:

```bash
nx serve
```

> Auf http://localhost:4200 sollte nun eine Website mit dem Text *"book-rating works!"* erscheinen!
Wenn bei allen Teilnehmer:innen das Grundgerüst steht, können wir ohne Zeitverlust loslegen.


### Test-Umgebung prüfen

Beende den laufenden Webserver mit der Tastenkombination `Strg + C`.  
Prüfe bitte zum Abschluss, ob der folgende Befehl ohne Fehlermeldungen ausführt:

```
nx test
```


### Wir freuen uns schon! 🙂

Wenn Du die Vorbereitung erfolgreich abgeschlossen hast, bist Du startbereit für den Workshop! Wenn Du Fragen hast oder Fehler auftreten, melde dich bitte bei uns per Mail unter [team@angular.schule](mailto:team@angular.schule) oder bringe deine Fragen zum Technikcheck mit.

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 18.06.2021



