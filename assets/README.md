# Info Assets:

## Länk till Figma-dokument

https://www.figma.com/file/25ZNL6M0NKtJARhZ1pxBKL/Untitled?type=design&node-id=86-712&mode=design&t=887A8amce2GQSuR1-0

## Typsnitt

Rubriker: Courgette
Brödtext: Merienda

Länk till google fonts med båda typsnitten:
https://fonts.google.com/share?selection.family=Courgette|Merienda:wght@300..900

Klicka på Select all styles, sen View selected families så har ni alternativ för att ta in typsnitten i projektet.

Textstorlekar finns i figma-dokumnetet under components för respektive storlek, dvs mobile, tablet, desktop.

## Färger

Alla färger finns i figma under colors and fonts. Färgkoder ni inte kommer behöva använda i projektet har ett rött X över sig så dom kan ni ignorera.

## Svg-filer

Båda svg filerna har hover och active effekter, finns i figma under components.

Enklast att bara kopiera in koden från svg filerna i html,

Instruktioner för att styla logotypen i css finns i figma-dokumentet under components - desktop:

### För telefon-svg-filen som används i mobile

Lägg den i en button (användarvänligt :). För att styla svg filen, ge den en egen klass eller id, och sen på liknande sätt som logotypen styla path. Behövs bara
path {fill: #000000;}
eller liknande på denna filen.

## Stars-bild

För att göra det enkelt. Det är bara en bild och den är 5 stjärnor för att pizzerian är fantastisk. Så bara lägg in den och ändra storlek på den i css beroende på om det är mobile, tablet eller desktop.

## Buttons

Finns specs i figmafilen. Inactive kommer bara användas för knappen för Hemleverans. Hover används för alla knappar.

## Links

Finns specs i figmafilen, hover och active används på alla länkar.

## input

Finns specs i figmafilen, active används.

## Skalning mellan enheter

Under 1440 px bredd övergår designen till tablet-läge. Under 834 px bredd övergår designen till mobile-läge.

## Meny-sektionen (alltså menyn för mat, INTE nav)

Är valfri, ni kan skippa den om ni inte har tid.
