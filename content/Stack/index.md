#První dev stack

Hlavním hrdinou dnešního článku se stane bundlovací nástroj webpack. Lecos jste se o něm mohli dozvědět už v [minulém článku](nastroje.html). S jeho pomocí postavíme první jednoduchou "Hello world" aplikaci v Reactu, která bude například používat Babel (JavaScript budoucnosti) a LESS (CSS preprocesor). **Ukážeme si sílu moderních JS nástrojů v praxi**.

##Očekávání

Co po takovém dev stacku můžeme vlastně chtít? V čem nám může ulehčit práci?

**Chceme:**
- **programovat v Babelu**, protože [je to lepší JavaScript](babel.html)
- budovat velkou a škálovatelnou aplikaci → **chceme modularitu**
- mít možnost jednoduše integrovat a **používat 150 000 balíčků z npm**
- používat nějaký šikovný **CSS preprocesor**, třeba LESS
- po každé změně v JS i CSS **ihned vidět výsledek v prohlížeči**, ideálně bez refreshnutí
- mít na očích **chybové hlášení** v přehledné formě
- mít **2 módy**: vývojářský a produkční
- v produkčním módu všechny potřebné JS soubory (moduly) **sloučit do jednoho a minimalizovat**, obdobně i pro kaskádové styly
- v produkčním módu ignorovat warningy a jiné debugovací výpisy
- mít **kód kontrolovaný linterem**, aby zůstal pěkný a jednotný
- aby po prvotním nastavení **všechno fungovalo automaticky**

Celkem dlouhý a náročný seznam, že? Na druhou stranu jsme programátoři, náš čas je drahý a investice do ladění našeho ideálního vývojářského procesu se nám bohatě vrátí. **Chtějme pro sebe vždy jen to nejlepší**. Ale nebojte, nemusíte si kvůli tomu vyprázdnit kalendář na příští 3 měsíce. Sfoukneme to raz dva.

<p class="pic-container" style="max-width:534px">
  <img src="pics/wheels.png" class="pic" title="Nemáte čas na zlepšování?" />
</p>







