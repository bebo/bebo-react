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
        return <WrappedComponent {...this.props} bebo={Bebo} Bebo={Bebo} />
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
      const { disableKeyboardDoneStrip, disableAudio  } = beboOptions;
    if(disableKeyboardDoneStrip) {
      // eslint-disable-next-line
      Bebo.UI.disableKeyboardDoneStrip();
    }
      // eslint-disable-next-line
    if(disableAudio && Bebo.Audio && Bebo.Audio.disable) {
      // eslint-disable-next-line
      Bebo.Audio.disable();
    }
    ReactDOM.render(component, element);
  })
  }
}