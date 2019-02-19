# Kirpyklos-turinio-valdymo-sistema-NFQ-akademija

Internetinė aplikacija skirta "Geriausiai miesto Kirpyklai"

Vartojimo instrukcija:

1. Aplikaciją sudaro dvi dalys - viena skirta kirpyklos klientams, kita kirpėjoms - paspaudus ant atitinkamai pavadintų mygtukų patenkama į norimą puslapio dalį.
2. Klientų puslapyje pateikiamas kalendorius (šis kalendorinis mėnuo ir kitas) - galima spausti ant kalendoriaus dienų ir apačioje pasirinkti laiką, kurį norėtumėte rezervuoti.
3. Paspaudus iššoks registracijos formą - reikia užpildyti visus formos laukelius, be to, jei jau turite registraciją, sistema neleis jums dar kartą registruotis.
4. Užimti laikai pavaizduoti raudonai, laisvi žaliai.

5. Kirpėjų puslapyje galima matyti šios dienos, rytojaus, ar bet kurios pasirinktos dienos rezervacijų sąrašą, su kliento vardu, el. pašto adresu bei telefonu.
6. Aplikacija veikia nepersikraudama, SPA principu.
7. Aplikacijai sukurti naudota vanilla JS

Svetainės trūkumai (deja, bet nespėti ištaisyti):
a) nėra kodo komentarų, kas padaro kodą sunkiai skaitomą ir suprantamą
b) failų struktūra nėra optimali
c) nėra galimybės iš kirpėjų puslapio pridėti naują rezervaciją
d) duomenys gaunami iš localStorage ir lokalaus failo - kad aplikacija būtų funkcionali reiktų duomenų bazės
e) duomenų trūkumas (jei klientas turėjo rezervaciją ankščiau nei šiandien) - jam vis tiek neleis daryti naujos registracijos, trūkumas nesunkiai pašalinamas
f) nėra išnaudotos sass galimybės, nesudėti variables, nesunkiai pakeičiama
g) tikriausiai yra ir daugiau trūkumų :D
