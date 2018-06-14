import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Webpack 4 - React boilerplate';
const additionalTitle = 'Some Additional Information';

ReactDOM.render(<div>{title + ' ' + additionalTitle}</div>, document.getElementById('application'));

module.hot.accept();