import React from 'react';

function Hello({name = ''}) {
  
  // return React.createElement('div', { className: 'Hello' }, `Hello ${name}`);
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

export { Hello };