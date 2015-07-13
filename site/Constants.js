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
    next: 'REACT_PROPS_VS_STATE'
  },
  REACT_PROPS_VS_STATE: {
    location: 'react-props-vs-state.html',
    title: 'React - Props vs State',
    prev: 'REACT_UVOD',
    next: 'REACT_JSX'
  },
  REACT_JSX: {
    location: 'react-jsx.html',
    title: 'React - JSX',
    prev: 'REACT_PROPS_VS_STATE',
    next: null
  }
};
