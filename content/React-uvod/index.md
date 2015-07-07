#React - Úvod

**React je JavaScriptová knihovna pro vytváření webových komponent.** V pomyslném MVC představuje "V" neboli view vrstvu a dal by se tak přirovnat například Latte v Nette. React je však daleko více. Přináší totiž zásadní změnu paradigma. S Reactem už nepíšeme kód, který něco mění, ale kód, který popisuje, jak má vypadat výsledek, což je řádově snažší úloha. Dvojnásob to pak platí, pokud tím výsledkem je "těžká váha" v podobě DOMu.

<p class="pic-container" style="max-width:300px">
  <img src="pics/logo.png" class="pic" title="JS knihoven není nikdy dost" />
</p>


##Trocha historie

**React spatřil světlo světa v květnu 2013**. Opensourcnul ho Facebook, který ho už několik let před tím sám interně používal a vylepšoval. Prvotní vydání se však dočkalo velkého výsměchu. Odezva byla dokonce tak špatná, že Facebook chvíli uvažoval i o jeho stáhnutí. Terčem kritiky se stalo především míchání "HTML a programování". I někteří [čeští prominentní webaři](https://twitter.com/geekovo/status/604710448131391490) mají proto k Reactu odpor :-).  Ovšem, brzo se ukázalo, že došlo k nepochopení základního konceptu a nejen FE vývojáři si začli rychle osvojovat a užívat nové fundamenty, které React přinesl.

**K dnešnímu dni** (červenec 2015) **má 4800 commitů, 25 000 stargazerů a 444 contributorů a je tak jedním z nejoblíbenějších a nejaktivnějších repozitářů na GitHubu**. Facebook během této doby uvolnil i další JS projekty jako [React Native](https://facebook.github.io/react-native/) (React pro iOS a blíží se i vydání Android verze), [Immutable.js](https://facebook.github.io/immutable-js/) (immutable kolekce) či [Flux](https://facebook.github.io/flux/) (M a C doplňující React v pomyslném MVC).

Horkou novinkou je pak [GraphQL](http://facebook.github.io/graphql/), což je dotazovací jazyk, kterým v komponentách popíšete, jaká data ze serveru potřebují. V srpnu 2015 pak vyjde [Relay](https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html), který GraphQL bude umět na straně webu zpracovat a rýsuje se nám tak zajímavé řešení pro datovou komunikaci server-client, která dnes představuje nejtěžší část webové aplikace.

##Pořád jen Facebook

Všechny výše uvedené projekty jsou široce používané a je kolem nich mohutná komunita. Nevezou se však na popularitě Reactu, protože s ním nejsou nijak spojené. Jsou prostě tak dobré. **Facebook v posledních letech jednoznačně udává trendy v tvorbě webových aplikací**. Nevytváří velké ucelené frameworky, ale pouze malé pragmatické knihovny s minimalistickým API, což má v JS ekosystému úspěch. Přístup Facebooku k opensource by měl být vzorem i pro další firmy.

**Druhým webovým hegemonem je Google**, který ale v poslední době působí trochu schyzofrenicky. Jakoby si každý jeho tým budoval vlastní framework/knihovnu a tak tu máme vedle sebe [Angular](https://angularjs.org/), [Closure Tools](https://developers.google.com/closure/) a [Polymer](https://www.polymer-project.org/1.0/). Alespoň už zařízl Dart a třeba tak více konsoliduje své síly, co se JS knihoven týče.

##Server vs prohlížeč

Klasické server-side webovky jsou vcelku jednoduché. **Server totiž nemusí udržovat žádný stav**. Přijde mu požadavek od uživatele, poslepuje dohromady nějaké řetězce (část z nich načte třeba z databáze) a celé to pak pošle uživateli do prohlížeče, který to rozparsuje a sestaví DOM (Document Object Model - stromová reprezetace toho co vidíte v prohlížeči jako HTML stránku + metody, kterými se dá upravovat či procházet).

**Interaktivní JS webovky, které běží v prohlížeči, jsou podstatně složitější**. Chceme totiž po nich daleko více než od server-side aplikací. Chceme nabídnout daleko vyšší uživatelský zážitek. Je trochu zbytečné s každou akcí překreslovat celou stránku, když můžeme změny bleskově provádět pomocí funkcí DOMu a uživateli tak dopřát pohodlí, které zná z desktopových aplikací.

##Zlý DOM

**DOM a JavaScript jsou dvě úplně rozdílné věci**. Teoreticky by mohl být DOM upravován i jiným jazykem, ale v praxi prohlížeče nabízejí pouze JavaScript. DOM je obrovský moloch, práce s ním je pomalá a prohlížeče nejsou vždy jednotné v jeho implementaci. **JavaScript pak často neprávem sklízí nenávistné komentáře, které by ale měly směřovat právě na DOM**. Dnešní JavaScript je naopak velmi rychlý a vcelku lišácky navržený, což ostatně potvrzuje i to, že se rozšiřuje i do oblastí, kde má narozdíl od prohlížečů silnou konkurenci (node.js).

DOM navíc představuje jednu velkou globální proměnou, což přímo svádí k tomu, abychom ho používali jako místo pro ukládání stavu naší aplikace. Asi nemusím popisovat proč jsou globální proměnné zlo. U DOMu to pak ještě zhoršuje jeho pomalost. **Stav aplikace bychom tedy měli udržovat jinde - v našem JavaScriptu** a do DOMu šahat, jenom když je to skutečně potřeba. Pouze do něj zrcadlit změny z našeho JS kódu. Jenže jak to jednoduše udělat?

##Přínos Reactu

**Nejzřejmější výhoda pro začátečníka je ta, že React nás prakticky úplně odstíní od DOMu**. V React komponentách pouze deklarativně zadefinujeme strukturu (HTML) skládáním JS funkcí. Jinými slovy, popíšeme, jak má vypadat výsledná stránka na základě příchozích dat. React si z toho poskládá svůj vlastní virtuální DOM, který pak pomocí chytrých algoritmů porovnává s tím skutečným DOMem a když najde rozdíly, tak ho nejefektivnějším možným způsobem aktualizuje. **My už pak jenom dodáváme nová data do jednotlivých komponent a tím pro nás veškerá práce končí**. V prohlížeči vždy uvidíte aktuální pohled vzhledem k dodaným datům. Tohle je "deal breaker", který vám pravděpodobně není úplně zřejmý, pokud už nemáte předešlou trpkou zkušenost s imperativním přístupem u větší aplikace, což je typicky jQuery a fidlování s jednotlivými DOM elementy.

##Začínáme

Je načase si ukázat první příklad. Komponenty si budete moc vyzkoušet přímo v rámci této stránky nebo zkopírováním do svého [vymazleného stacku](prvni-dev-stack.html). Najdete je samozřejmě také v [repozitáři](https://github.com/tajo/javascript/tree/master/examples/react). Budu téměř výhradně používat novou čerstvě vydanou ES6 syntax.

Naše první komponenta se bude jmenovat `Counter` a **bude udržovat a zobrazovat počet našich kliknutí**. Hned se podívejte na výsledek:

$$$counter$$$

A teď si to pojďme rozebrat a naprogramovat. Jak už to bývá, ani u Reactu se neobejdme bez minimálního boilerplate kódu:

```js
import React from 'react';

export default class Counter extends React.Component {
```

**Nikdy nesmíme zapomenout na importování Reactu**. I když to není na první pohled zřejmé, tak ony HTML tagy (JSX) jsou ve skutečnosti převlečené funkce Reactu, ale to bychom teď předbíhali. Novou komponentu jednoduše oddědíme od `React.Component` a `export default class Counter` nám komponentu zpřístupní napříč celou aplikací.

**React komponenty mají pouze jednu povinnou metodu a to `render()`**. V ní se očekává, že popíšete strukturu komponenty včetně jejích závislostí na data. Metoda musí pak vrátit 1 root element (například `<div/>`), který už může mít libovolný počet potomků včetně dalších React komponent. Takhle vypadá ta naše:

```js
render() {
  return (
    <div>
      Kliknul jsi {this.state.counter}x. <br/>
      <button onClick={(e) => this.handleClick(e)}>
        Klikni!
      </button>
    </div>
  );
}
```

**Povšimněte si, že "uprostřed" JSX zápisu můžete opět vkládat JS výrazy**, pokud je obalíte do `{}` a takhle to můžete prokladát do několika úrovní, pokud máte rádi nepřehledný kód. JSX velmi připomíná klasické HTML a rozdílů byste našli jen několik. Což je vcelku zajímavé, protože pod pokličkou jde o principálně zcela jinou věc.

`this.state` je jeden ze dvou hlavních objektů, který "krmí" React komponenty daty. O tom druhém `this.props` a rozdílech si povíme až příště. **`this.state` je lokální stav komponenty, do kterého si můžeme ukládat libovolná data**. Nám se hodí pro uložení počtu kliknutí. Pomocí `{this.state.counter}` si tento počet pak jednoduše vypíšeme.

Klikací tlačítko má atribut `onClick`. **Vzpomínáte na poučku, že se nemají používat tyto inline atributy pro volání JS? Tak ta stále platí.** Nicméně protože `<button/>` je ve skutečnosti JS funkce a ne HTML element, tak i `onClick` nemá s tím klasickým moc společného.

React má totiž propracované delegování event a tak i když budete mít v aplikaci tisíc onClicků, tak z nich React udělá jenom jeden, který pověsí na root element a příchozí eventy nechá probublat k patřičným odběratelům. To velmi šetří výkon a vám nervy, pokud byste podobnou (a nutnou) optimalizaci museli sami implementovat. V Reactu tak můžete libovolně "plýtvat" s listenery jako `onKeyDown`, `onCopy`, `onFocus`, `onScroll` ... Je jich daleko [více](https://facebook.github.io/react/docs/events.html).

```js
onClick={(e) => this.handleClick(e)}
```

Listener očekává funkci, kterou má zavolat, pokud dojde k dané události. **Otázka za milion: Proč naši funkci `this.handleClick` ještě balíme do další funkce s fat arrow `=>`?** Protože potřebujeme v `handleClick` mít přístup k `this.state` a pokud bychom napsali

```js
onClick={this.handleClick}
```

tak se nám do funkce `handleClick` předá context DOM elementu, ve kterém se ale už nenachází náš `this.state.counter`. **Proto musíme explicitně nastavit (bindnout) správný context React komponety ručně, což dělá právě ona fat arrow**. Pokud jste zmatení z pojmů jako closure, scope nebo context, tak si [přečtěte tento článek](http://ryanmorr.com/understanding-scope-and-context-in-javascript/). Jde o fundamenty, které dělají JS tím čím je.

Kde se vlastně bere state neboli stav komponenty? Musíme ho nejprve inicializovat a to se nemůže dít nikde jinde než v konstruktoru:

```js
constructor() {
  super();
  this.state = {counter: 0};
}
```

Zbývá si už jen napsat funkci, která se zavolá kliknutím na naše tlačítko:

```js
handleClick(e) {
  this.setState(previousState => {
    return {counter: previousState.counter + 1};
  });
}
```
**Stav komponenty se vždy a pouze mění pomocí metody `this.setState()`**. Vyvarujte se pokušení napsat `this.state =`, protože by se vám pak nezavolal `render()`. Do `setState` můžeme jako první argument předat přímo novou hodnotu stavu nebo funkci, do které dostaneme předchozí stav (a props), což se právě hodí pro inkrementování. Náš případ by šel zapsat i jako:

```js
handleClick(e) {
  this.setState({counter: this.state.counter + 1});
}
```

**Kdy a jak probíhá překreslení?** To už má plně v režii React. K zavolání metody `render()` dochází, pokud se změní `this.state` nebo `this.props`, případně, pokud zavoláme `forceUpdate()`. **Metoda render vygeneruje nový virtuální DOM a porovná ho s tím skutečným v prohlížeči**. Pokud najde nějaké změny, tak je nejefektivnějším způsobem aplikuje. Svižné a elegantní. Nikde jsme nemuseli definovat, jak, kdy a které DOM elementy je potřeba aktualizovat. **Pouze jsme popsali strukturu a její vztah k datům.**

Výsledný kód:

```js
import React from 'react';

export default class Counter extends React.Component {

  constructor() {
    super();
    this.state = {counter: 0};
  }

  render() {
    return (
      <div>
        Kliknul jsi {this.state.counter}x. <br/>
        <button onClick={(e) => this.handleClick(e)}>
          Klikni!
        </button>
      </div>
    );
  }

  handleClick(e) {
    this.setState(previousState => {
      return {counter: previousState.counter + 1};
    });
  }

}
```

##Závěrem

**Představili jsme si React, jeho krátkou historii a související projekty**. Jedním ze strašáků "programování v prohlížeči" je DOM, často chybně a neférově zaměňován s JavaScriptem. React nám mj. umožňuje kompletní abstrakci od DOMu. Strukturu jednotlivých komponent zapisujeme (deklarujeme) skládáním React funkcí, kterým následně dodáváme data a tím pro nás práce končí. React toho nabízí samozřejmě daleko více. Nakousli jsme třeba i systém event. **S Reactem je to tak trochu jako dobrým čajem nebo kafem**. Zpočátku vám bude připadat divný a musíte se k němu postupně "propít". Až poté se stane nepostradatelnou součástí vašeho programátorského dne.

**Příště si ukážeme, co jsou to `this.props` a jak se liší od `this.state`**. Také si více povíme o životním cyklu komponenty a jejích dalších metodách.













