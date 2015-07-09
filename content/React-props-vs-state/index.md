#React - Props vs State

**React se točí kolem props a tak je nejvyšší čas si ukázat, co jsou zač**. Minule jsem už naznačil, že jde o druhý zdroj dat, který React komponenty pro své vykreslení používají. Povíme si, jak se props liší od state a jakým způsobem se používají. To vše si demonstrujeme na pokročilejším příkladě, který se bude skládat z více komponent. Na nich uvidíte i to, jakým způsobem se komponenty do sebe skládají a jak spolu komunikují. **Dnes to bude o úplných základech Reactu**.

##Props

**React komponenty lze do sebe skládat** a proto je potřeba, aby měly prostředek pro předávání dat. Tím jsou právě ony props, které tak tvoří páteř všech React aplikací.

V hlavní React komponentě můžeme mít metodu:

```js
render() {
  return(
    <div>
      <h1>Zvířata</h1>
      <Animal name="Baryk" type="dog" />
      <Animal name="Lizza" type="cat" />
    </div>
  );
}
```

**Animal je přitom jen další React komponenta**. Ta tímto získala přístup k `this.props.name` a `this.props.type`. Její `render` metoda může vypadat třeba takto:

```js
render() {
  return(
    <div>
      <h1>Zvíře</h1>
      Jméno: {this.props.name}
      Typ: {this.props.type}
    </div>
  );
}
```

**Předávat můžeme samozřejmě i funkce či objekty. Všechno je jen a pouze čistý JavaScript. Props fungují pouze jednosměrně směrem zhora dolů.** Zvíře tudíž nemá způsob, jak změnit props komponenty Zvířata. Může nicméně dostat od rodičovské komponenty skrz props callback a ten zavolat. Tento jednosměrný postup velmi redukuje komplexnost aplikací.

Už víte, že `render()` se volá při změně props a state. **S jeho voláním se ale navíc přerendruje i celý podstrom potomků.** Pokud by někdo změnil state/props v komponentě Zvířata, tak se zavolají `render` metody i u komponenty Zvíře.

##Zadání úlohy

**Dnešním cílem bude vytvoření jednoduché databáze aut**. Každé auto bude mít 3 údaje - značku, model a rok výroby. Tyto údaje budou seskupené do karty, která bude umožňovat (roz)skrýt model a rok. Jednotlivá auta budeme moct přidávat a mazat.

##Návrh komponent

**Při navrhování React aplikací začínáme tím, že si musíme aplikaci rozkouskovat do jednotlivých komponent**. Při rozdělování do komponent se lze přidržet i vizuální podoby. Logickým kandidátem na samostatnou komponentu je karta auta. Další částí rozhraní je formulář pro přidání auta, šup s ním do druhé komponenty. Nakonec potřebujeme ještě někde formulář a auta vypsat a máme tak komponentu třetí - hlavní.

##Kam se stavem

**Jaké stavy v aplikaci vlastně budeme mít? Jde především o detaily aut**. Vhodným kandidátem pro uložení je pole objektů, kde každý objekt bude reprezentovat jedno auto. Ale kam s ním? V naší jednoduché aplikaci moc na výběr nemáme. Pole aut musí být v hlavní komponentě, která jednotlivá auta bude vykreslovat.

**Dalším stavem pak bude to, zda je karta auta rozbalená či zabalená.** Asi vás ihned napadne, že tento stav patří do komponenty auta. Také ho ale můžeme umístit jako další vlasnost objektu auto. Oba přístupy jsou v pohodě.

Nicméně, obecným **trendem v React aplikacích je zahnat veškeré stavy někam "do rohu" na jedno místo**. Proč nechceme mít stavy roztroušené po aplikaci? Tak například si představte, že bychom chtěli přidat tlačítko "Rozbal všechna auta". Podobnou funkcionalitu bychom přirozeně umístili do hlavní komponenty, ale jak pak aktualizovat tento stav v jednotlivých komponentách aut? Není způsob jak komponenty aut proiterovat a zavolat `auto.rozbalit()`, protože to by byl imperativní přístup, který v Reactu (naštěstí) nefunguje.

**Komponentu s vnitřním stavem nemůžeme 100% ovládat z vnějšího prostředí**. Pokud však stav vystrčíme někam ven a komponeta bude používat pro své vykreslování pouze zděděné props, dostaneme nad ní plnou kontrolu.

**Lokální stav je tedy přijatelný pouze, pokud ho nikdy nebudeme potřebovat upravovat či číst vně komponenty**. Nicméně i takovýto superlokální stav můžeme snadno "globalizovat" a mít tak všechny React komponenty "čisté" a plně kontrolovatelné. To si však ukážeme až později s Flux architekturou. A nebojte, je globální stav a globální stav.

##Komponenta Auto

**Nejlepším postupem je budovat aplikaci od spoda**, jelikož pak můžete rychle vše testovat, což je vždy lepší než půl hodiny psát kód naslepo. Napíšeme si tedy nejdříve komponentu auto. Představíme si, jak asi bude vypadat objekt auta, který dostaneme skrz props:

```js
{id: 1, brand: 'Ferrari', model: 'FF', year: '2014', details: false}
```

`id` se nám bude hodit pro snadnou manipulaci v případě mazání a rozbalování. `details` nám pak určuje, zda je karta rozbalená či zabalená.

Začneme tím, že si data vypíšeme:

```js
import React from 'react';

export default class Car extends React.Component {

  render() {
    return (
      <div>
        <div><b>Značka:</b> {this.props.car.brand}</div>
        {this.props.car.details &&
          <div>
            <b>Model:</b> {this.props.car.model} <br />
            <b>Rok:</b> {this.props.car.year}
          </div>
        }
    );
  }

}
```

Všimnětě si, že v JSX nemůžete obalit kus kódu do nějakého makra `{if} ... {else}`, protože by to nebyla regulérní JS syntax. **Do `{}` lze zabalit jen validní JS výrazy, něco co se dá vypsat**. Nikoliv třeba řídící bloky. O JSX bude ještě samostatný článek. Můžeme si ale pomoct jednoduchou obezličkou viz výše. Pokud bychom přesto trvali na `if`, mohli bychom si výsledek předuložit do nějaké proměnné před `return()`.

**Jak si to teď otestujeme?** Vytvoříme si další hlavní komponentu a v ní si `Car` vypíšeme:

```js
import React from 'react';
import Car from './car';

export default class Cars extends React.Component {

  render() {
    const car = {
      id: 1,
      brand: 'Ferrari',
      model: 'FF',
      year: '2014',
      details: true
    };

    return (
      <div>
        <Car car={car} />
      </div>
    );
  }

}
```

Uložíme a výsledek by měl vypadat takto:

$$$cars1$$$

S komponentou auta jsme už skoro hotoví. Zbývá si ji ještě trochu ostylovat a přidat do ní tlačíka pro mazání a rozbalování. **Dobrým zvykem je v komponentách deklarovat jaké typ props očekávají, že jim budou předány**. React pak v devel režimu provádí automatickou kontrolu a upozorní nás, pokud nesedí typy nebo na něco zapomeneme:

```js
import React from 'react';

export default class Car extends React.Component {

  render() {
    const styles = {
      border: '2px solid #CCC',
      padding: 10,
      margin: '10px 10px 10px 0px',
      backgroundColor: '#FFF',
      float: 'left'
    };

    return (
      <div style={styles}>
        <div>
          <b>Značka:</b> {this.props.car.brand}
        </div>
        {this.props.car.details &&
          <div>
            <b>Model:</b> {this.props.car.model} <br />
            <b>Rok:</b> {this.props.car.year}
          </div>
        }

        <button onClick={() => this.props.toggle(this.props.car.id)}>
          {this.props.car.details ? 'Méně' : 'Více'}
        </button>
        {' '}

        <button onClick={() => this.props.remove(this.props.car.id)}>
          x
        </button>
      </div>
    );
  }

}

Car.propTypes = {
  car: React.PropTypes.object.isRequired,
  remove: React.PropTypes.func.isRequired,
  toggle: React.PropTypes.func.isRequired
};
```

**React má i pěkný aparát na zápis inline stylů.** Místo pomlček se používá camelCase a není třeba potřeba psát 'px'. O stylování pomocí JavaScriptu bude možná ještě samostatný článek, protože je to také zajímavá problematika.

Akce v této komponentě řešit nebudeme. Ať se postará rodič a předá nám skrz props callbacky, které máme zavolat. `{' '}` je taková srandička, protože JSX není HTML a nový řádek se nepřeloží do mezery, kterou tam ale mít chceme. Lehce také upravíme root komponentu, protože musíme předat nově i callbacky:

```js
import React from 'react';
import Car from './car';

export default class Cars extends React.Component {

  render() {
    const car1 = {
      id: 1,
      brand: 'Ferrari',
      model: 'FF',
      year: '2014',
      details: true
    };

    const car2 = {
      id: 2,
      brand: 'BMW',
      model: 'M5',
      year: '2013',
      details: false
    };

    return (
      <div>
        <Car car={car1} remove={this.removeCar} toggle={this.toggleCar} />
        <Car car={car2} remove={this.removeCar} toggle={this.toggleCar} />
      </div>
    );
  }

  removeCar(id) {
    console.log(`remove ${id}`);
  }

  toggleCar(id) {
    console.log(`toggle ${id}`);
  }

}
```

Přidali jsme si i další auto, ať vidíme, jak se komponenta chová, když je zabalená. Výsledek (otevřte si konzoli a zkuste poklepat na tlačítka):

$$$cars2$$$

##Komponenta nové auto

Nyní si připravíme komponentu pro přidání nového auta. Bude to jen jednoduchý formulář s metodou, která po jeho odeslání zavolá callback rodiče:

```js
import React, {findDOMNode} from 'react';
import './addCar.less';

export default class AddCar extends React.Component {

  render() {
    return (
      <div className="addCar">
        <h3>Nové auto</h3>
        <form onSubmit={(e) => this.handleSubmit(e)} ref="addCar">
          <label htmlFor="brand">Značka:</label>
          <input id="brand" type="text" name="brand" ref="brand" /><br />

          <label htmlFor="model">Model:</label>
          <input id="model" type="text" name="model" ref="model" /><br />

          <label htmlFor="year">Rok:</label>
          <input id="year" type="text" name="year" ref="year" /><br />

          <input type="submit" value="Přidat" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add({
      brand: findDOMNode(this.refs.brand).value,
      model: findDOMNode(this.refs.model).value,
      year: findDOMNode(this.refs.year).value
    });
    findDOMNode(this.refs.addCar).reset();
  }

}

AddCar.propTypes = {
  add: React.PropTypes.func.isRequired
};
```

V metodě `render()` není mnoho zajímavého. Za zmínku stojí, že **občas jsou některé atributy v JSX přejmenované**. Například `for` na `htmlFor`, či `class` na `className`. To proto, aby nedocházelo ke kolizím s klíčovými slovy JS. Pokud byste na to však zapomněli, tak vám React poradí v konzoli. React je velmi výřečný co se warningů a errorů týče, což je dobře.

Formulář má na sobě pověšený listener `onSubmit`, který po odeslání zavolá příslušnou metodu. **V ní musíme ihned zavolat `e.preventDefault()`**, jinak by došlo k redirectu aneb standardní chování prohlížeče.

**Důležitým atributem je `ref`**. Ten se hodí, pokud si chceme "šáhnout" na skutečný DOM element. V JSX si ho pomocí tohoto atributu označkujeme a pak se k němu díky `React.findDOMNode(this.refs.foo)` můžeme dostat. Vidíte, že k hodnotám formuláře přistupujeme velmi nízkoúrovňově, nepotřebujeme žádnou komplikovanou a zbytečnou abstrakci.

**V našem příkladě používáme "nekontrolované" vstupní elementy**. Toto je totiž jediná výjimka, kdy React na chvílí přihmouří oči a nechá vás měnit hodnoty v DOMu (value v inputech), aniž by do toho jakkoliv zasahoval. **Existuje však druhý "kontrolovaný" přístup**. Ten je lepší z více důvodů (není potřeba "šahat" na DOM elementy, snadná validace, persistence rozepsaného formuláře atp.), ale o tom bude ještě samostatný článek. V dnešním nám stačí tento první přímočařejší přístup.

Formulář si i decentně ostylujeme. Tentokrát pomocí LESSu:

```
.addCar {
  label {
    width: 65px;
    display: inline-block;
  }
}
```

Nyní si hotovou komponentu zas vyzkoušíme:

```js
import React from 'react';
import AddCar from './addCar';

export default class Cars extends React.Component {

  render() {
    return (
      <div>
        <AddCar add={this.addCar} />
      </div>
    );
  }

  addCar(car) {
    console.log(`add ${car}`);
  }

}
```

A výsledek:

$$$cars3$$$

##Hlavní komponenta Auta

**Teď už nám zbývá to dát vše dohromady** v hlavní komponentě a implementovat metody `addCar`, `toggleCar` a `removeCar`. Začneme konstruktorem, ve kterém si inicializujeme databázi aut a nabindujeme metodám správný context:

```js
constructor() {
  super();
  this.state = {cars: [
    {id: 1, brand: 'Ferrari', model: 'FF', year: '2014', details: false},
    {id: 2, brand: 'BMW', model: 'M5', year: '2013', details: true}
  ]};
  this.addCar = this.addCar.bind(this);
  this.removeCar = this.removeCar.bind(this);
  this.toggleCar = this.toggleCar.bind(this);
}
```

Nyní pojďme na jednotlivé metody. Nebude to už žádná věda. `addCar` vypadá takto:

```js
addCar(car) {
  car.id = this.state.cars.length ?
    this.state.cars[this.state.cars.length - 1].id + 1 : 1;

  this.setState({
    cars: this.state.cars.concat([car])
  });
}
```

Jedinou zvlášností je to, že jsme si potřebovali "vygenerovat" unikátní `id`. Použil jsem prostou inkrementaci `id` posledního přidaného auta. V případě, že v poli `this.state.cars` už žádné položky nejsou, tak se použije `1`. Mohli bychom použít třeba i náhodný řetězec.

`removeCar` má podobu:

```js
removeCar(id) {
  this.setState({
    cars: this.state.cars.filter(car => car.id !== id)
  });
}
```

`filter` je jedna z užitečných funkcí pole. Pro každý prvek v poli zavolá funkci, kterou mu předáme. Pokud je její výsledek `true`, tak ho vrátí i ve výsledném poli. Jednoduše si tedy smazané auto tímto odfiltrujeme.

A zbývá `toggleCar`:

```js
toggleCar(id) {
  this.setState({
    cars: this.state.cars.map(car => {
      if (car.id !== id) {
        return car;
      }
      car.details = !car.details;
      return car;
    })
  });
}
```

`map` zavolá pro každý prvek pole funkci, kterou mu předáme. Není to úplně hezké řešení, ale nám to pro tuto chvíli stačí. Lepší by bylo nemít auta v poli, ale v objektu (mapě) a přistupovat k nim přímo pomocí `id`. Nicméně, to nám zase nezaručí jednoznačné pořadí. Brzo si však představíme [Immutable.js](https://facebook.github.io/immutable-js/), které rožšiřuje JS o pěkné immutable kolekce. Například zde by se nám velmi hodilo `Immutable.OrderedMap()`.

V `render()` už k žádným překvapením nedochází. Vše si pouze vypíšeme:

```js
render() {
  return (
    <div>
      <AddCar add={this.addCar} />
      <h3>Auta ({this.state.cars.length})</h3>
      {this.state.cars.map(car => {
        return <Car car={car}
                    key={car.id}
                    remove={this.removeCar}
                    toggle={this.toggleCar} />;
      })}
    </div>
  );
}
```

**To, že React slouží pro mapování dat na DOM, není jen řečnický obrat, ale doslovná skutečnost.** Můžeme vidět, jak pomocí funkce `map` vytváříme na základě stavu pole nových React komponent, které se ihned vypíší. Přibyl atribut `key={car.id}`. Ten slouží čistě potřebám Reactu, aby měl přehled o tom, které elementy v budoucím rendrování zmizí či se jen přemístí. Může pak lépe optimalizovat. Pokud byste `key` neuvedli, tak vám v konzoli React vynadá, ale kód bude stále funkční.

**Dílo je u konce. Celá hlavní komponenta vypadá takto:**

```js
import React from 'react';
import Car from './car';
import AddCar from './addCar';

export default class Cars extends React.Component {

  constructor() {
    super();
    this.state = {cars: [
      {id: 1, brand: 'Ferrari', model: 'FF', year: '2014', details: false},
      {id: 2, brand: 'BMW', model: 'M5', year: '2013', details: true}
    ]};
    this.addCar = this.addCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
    this.toggleCar = this.toggleCar.bind(this);
  }

  render() {
    return (
      <div>
        <AddCar add={this.addCar} />
        <h3>Auta ({this.state.cars.length})</h3>
        {this.state.cars.map(car => {
          return <Car car={car}
                      key={car.id}
                      remove={this.removeCar}
                      toggle={this.toggleCar} />;
        })}
      </div>
    );
  }

  addCar(car) {
    car.id = this.state.cars.length ?
      this.state.cars[this.state.cars.length - 1].id + 1 : 1;

    this.setState({
      cars: this.state.cars.concat([car])
    });
  }

  removeCar(id) {
    this.setState({
      cars: this.state.cars.filter(car => car.id !== id)
    });
  }

  toggleCar(id) {
    this.setState({
      cars: this.state.cars.map(car => {
        if (car.id !== id) {
          return car;
        }
        car.details = !car.details;
        return car;
      })
    });
  }

}
```

**Tadááááá. Výsledná aplikace:**

$$$cars$$$

##Nedostatky

**Jelikož se zatím soustředíme pouze na React, používáme jeho komponenty na všechno.** V reálném použití se snažíme udržovat React komponenty co nejjednodušší a nikdy do nich nedáváme logiku typu `addCar`, `removeCar` či `toggleCar`. "Zpětná" komunikace pomocí předávání callbacků se také moc nepoužívá, jelikož to vytváří závislosti mezi jednotlivými komponentami. Navíc si představte, pokud byste měli v sobě zanořených třeba 5 komponent a museli byste si pořád vše předávat skrz props. **Chybí nám tu ono M a C, chybí nám tu zatím Flux**. Dalším nedostatkem je nepoužívání immutable kolekcí, které přinášejí optimalizaci velkou jako Brno. A samozřejmě **formulář by také zasloužil více lásky**.

##Závěrem

**Dnes jsme si naprogramovali složitější aplikaci a názorně si demonstrovali základní práci s Reactem.** Páteří každé React aplikace jsou props a předávání dat skrz ně. Při vytváření nových stavů je potřeba velká obezřetnost, protože nám mohou značně zkomplikovat celou aplikaci. Je dobré stavy "vyhnat" na jedno místo, ideálně do root komponenty. **Příště se mrkneme do hloubky na JSX a ukážeme si, že lze používat React i bez něj.**


