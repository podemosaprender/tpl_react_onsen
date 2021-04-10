//INFO: asi usamos onsen con html
const { createElement, useState } = React;
const render = ReactDOM.render;
const html = htm.bind(createElement);
//A: definimos las funciones de react como requiere este runtime

//VER: https://github.com/developit/htm
class OnsenApp extends React.Component {
  constructor(props) {
    super(props);
  }

  renderToolbar() {
    return html`
      <${Ons.Toolbar}>
        <div className='center'>Card</div>
      <//>
    `;
  }

  render() {
    return html`
        <${Ons.Page} renderToolbar=${this.renderToolbar}>
          <${Ons.Card}>
            <img src="https://monaca.io/img/logos/download_image_onsenui_01.png" alt="Onsen UI" style=${{width: '100%'}} />
            <div className="title right">Awesome framework</div>
            <div className="content">
              <${Ons.Button}><${Ons.Icon} icon="ion-thumbsup"><//><//>
              <${Ons.Button}><${Ons.Icon} icon="ion-share"><//><//>
              <${Ons.List}>
                <${Ons.ListHeader}>Bindings<//>
                <${Ons.ListItem}>Vue<//>
                <${Ons.ListItem}>Angular<//>
                <${Ons.ListItem}>React<//>
              <//>
            </div>
          <//>
        <//>
  `;
	}
}

export default OnsenApp;
