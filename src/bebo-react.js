/**
 * Created by jonas on 9/13/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import hoistStatics from 'hoist-non-react-statics'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export function withBebo(WrappedComponent) {
  const WithBebo = React.createClass({
    render() {
      // eslint-disable-next-line
      if(Bebo) {
        // eslint-disable-next-line
        return <WrappedComponent {...this.props} bebo={Bebo} />
      }
      return console.error('Bebo is not defined yet...');


    }
  });

  WithBebo.displayName = `withBebo(${getDisplayName(WrappedComponent)})`;
  WithBebo.WrappedComponent = WrappedComponent;

  return hoistStatics(WithBebo, WrappedComponent)
}

export default new class BeboDOM {
  constructor (){
    // eslint-disable-next-line
    this.bebo = Bebo;
  }

  render(component, element, beboOptions) {
    this.bebo.onReady(() => {
      const { disableKeyboardDoneStrip } = beboOptions;
    if(disableKeyboardDoneStrip) {
      // eslint-disable-next-line
      Bebo.UI.disableKeyboardDoneStrip();
    }
    ReactDOM.render(component, element);
  })
  }
}