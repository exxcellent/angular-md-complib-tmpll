# Session 2 W11K

## Fragen

1. Schnitt der Components bzgl API Beispiel: ein Slider mit Links und rechts
   jeweils einer Component:
   - Soll man besser eine Component bauen, die zwei Components als Kinder
     erlaubt (für links und rechts), um icons, buttons, text Varianten vom
     Slider zu bauen,
   - oder besser konkrete Use cases ausprägen, zB ein TextSlider, ein IconSlider
     ein InteractiveSlider? Was sagt die Erfahrung, wenn es ein Framework für
     viele Apps ist?
2. Kann man bei Custom-Komponenten die auf Material Design Komponenten beruhen,
   die Content-Projektionen so durchreichen, dass keine zusätzlichen Container
   entstehen?
   - Beispiel:
   ```html
   <exx-range-slider>
     <input matSliderStartThumb />
     <input matSliderEndThumb />
   </exx-range-slider>
   ```
3. Wie kann man das Styling eines Buttons invertieren:
   - background-color -> color, border-color
   - color -> background-color
4. Storybook vs App
   - Wir wissen nicht, ob wir Storybook als Abnahmesystem nutzen wollen, oder
     lieber doch die eigene App.
   - Derzeit haben wir beides. Aber Storybook müsste die theme und additional
     components Library konsumieren, damit es "echt testbar ist"
   - Was sagt die Erfahrung?
5. Testen
   - Wie testen wir idealerweise die Material Design Updates, sowohl durch
     eigene Anpassungen, als auch durch materialdesign library Updates?
   - Was sollte man überhaupt testen? Unit Tests für die Additional Custom
     Components?
   - Hast Du Erfahrung mit https://docs.cypress.io/guides/tooling/visual-testing
     ?
6. Können wir unser <div class="exx-theme"> entfernen? Welche Folgen hat das,
   bzw warum hatten wir den überhaupt eingebaut?
7. Build als NPM Package.
   - Kannst du das Kapitel
     https://nx.dev/concepts/more-concepts/buildable-and-publishable-libraries
     streifen?
   - Unser theme hat ja nichts mit nx zu tun. Können wir das regulär mit npm
     push machen? Wie referenzieren wir assets? zB Schriftarten im SCSS?
8. Wie funktioniert das Build System
   - nx vs npm und vs package.json in dem ganzen Monorepo? Den developer Teil
     haben wir grob verstanden und es funktioniert ja. Aber wie ist es mit dem
     Build?

## Antworten

1. Komponenten die Content Projection nutzen, sind immer ein wenig komplizierter
   in der Verwendung, als Komponenten konkret für einen Use Case. Im Falle eurer
   Slider Component werden die Directives nicht unbedingt benötigt. Für das
   select reicht ein Attribut. Siehe
   [Multislot Content Projection](https://angular.io/guide/content-projection#multi-slot-content-projection).
   Die Projection ermöglicht eine sehr flexible Verwendung. Leider wie so oft
   muss im Einzelfall abgewogen werden.
2. Im Template lässt sich `ng-container` verwenden. Dort können z.B.: Direktiven
   genutzt werden und es entsteht kein eigenes DOM Element. Siehe
   [Dokumentation ng-container](https://angular.io/api/core/ng-container). In
   einem ng-content kann auch in einem ng-container verwendet werden und
   umgekehrt. Ein Beispiel versuchen wir in der Session zu erarbeiten
3. Nur mit CSS nicht. Allerdings können wir mit einem Angular Class Binding
   konditional Klassen setzen, die dann zwischen den beiden Styles wechseln.
   Wenn gewollt, kann das ganze auch mit Animations versehen werden.
4. Meine Erfahrung mit Storybook ist leider nicht riesig. Meine Erfahrung ist
   eher eine Demo Applikation zu bauen. Für eine Komponenten-Bibliothek kann ich
   mir Storybook als sehr gutes Abnahmetool vorstellen. Das Storybook gehört
   dann aber in die Bibliotheksprojekte. Dann werden die Komponenten direkt
   isoliert in Storybook entwickelt. Die Demo Applikation zeigt dann nur das
   Zusammenspiel der verschiedenen Komponenten.
   - [Storybook Testing](https://storybook.js.org/docs/react/writing-tests/introduction)
   - [Isolated Component Development Video](https://www.youtube.com/watch?v=ZU8udwXfxko)
   - [Storybook Angular Tutorial](https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/)
5. Wir nutzen bei uns nicht Cypress sondern Playwright. Beide Frameworks lassen
   sich mit Story Book integrieren. Die
   [Integration](https://storybook.js.org/docs/react/writing-tests/stories-in-end-to-end-tests)
   lässt sich nachlesen. Mit Playwright können auch Screenshots für das visuelle
   Regression Testing hergenommen werden
6. Die Klasse `exx-theme` hatten wir eingebaut, um die Änderungen im globalen
   CSS beschränken zu können. Dieses hatten wir in
   `libs/md-components-theme/src/index.scss` stehen. Es würde auch ausreichen,
   wenn die Klasse in der index.html gesetzt ist. Wenn nicht parallel mehrere
   Änderungen möglich sein sollen, lässt sich das Prefix auch entfernen.
7. Nx ist nur ein Tool mit dem wir unser Repo organisieren. Das eigentliche
   "Veröffentlichen" wird mit `npm publish` gemacht. Wir schauen und in der
   Session die Unterschiede bei publishable und buildable an.
8. Nx nutzt für seine Tasks die Einträge in den `project.json` Dateien und
   Schematics. Diese kapseln, das was eigentlich passieren soll. Wir müssen also
   die verschiedenen Schematics ansehen, wenn wir verstehen wollen, wie gebaut
   wird. Nx hat den Vorteil, dass die Dependencies von Projekten dem Tool
   bekannt sind und das fehlende Depedencies automatisch gebaut werden.
