export const Pages = {
  HOME: {
    location: 'index.html',
    title: 'Home'
  }
};

export const Articles = {
  BABEL: {
    location: 'babel.html',
    title: 'Javascript? Babel.',
    prev: null,
    next: 'NASTROJE'
  },
  NASTROJE: {
    location: 'nastroje.html',
    title: 'Nástroje',
    prev: 'BABEL',
    next: 'STACK'
  },
  STACK: {
    location: 'prvni-dev-stack.html',
    title: 'První dev stack',
    prev: 'NASTROJE',
    next: 'REACT_UVOD'
  },
  REACT_UVOD: {
    location: 'react-uvod.html',
    title: 'React - Úvod',
    prev: 'STACK',
    next: null
  }
};
