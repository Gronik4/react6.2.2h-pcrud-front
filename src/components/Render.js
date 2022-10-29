import React, { Component } from 'react';
import { RenderMessage } from './RenderMessage';
import { RenderUpdata } from './RenderUpdata';
import { RenderAdding } from './RenderAdding';
import propTypes from 'prop-types';

export class Render extends Component {
  constructor(props) {
    super(props);
    this.url = 'https://react621h-pcrud.herokuapp.com/notes';
    this.state = ([]);
  }
  
  async getData(url) {
    const response = await fetch(url);
    const responseVtext = await response.text();
    const result = JSON.parse(responseVtext);
    this.setState([result]);
  }
  
  componentDidMount() {
    this.getData(this.url);
  }

  hendleUppdata() {
    this.getData(this.url);
    console.log('It`s updata.');
  }
  async hendeleAdd(text) {
    const data = {
      method: 'POST',
      body: text
    }
    await fetch(this.url, data);
    this.getData(this.url);
  }

  async hendeleDelete(elm) {
    const urlVdelet = this.url + `/${elm}`;
    await fetch(urlVdelet, {method: 'DELETE'});
    this.getData(this.url);
  }
  render() {
    return (
      <React.Fragment>
        <RenderUpdata onHendleClick={() => {this.hendleUppdata()}}/>
        <RenderMessage messages={this.state[0]} onDeleteMessage={(dat) => {this.hendeleDelete(dat)}}/>
        <RenderAdding onHendlAdd={(text) => {this.hendeleAdd(text)}}/>
      </React.Fragment>
    )
  }
}

Render.propTypes = {
  getData: propTypes.func,
  hendeleAdd: propTypes.func,
  hendeleDelete: propTypes.func,
  hendleUppdata: propTypes.func
}

export default Render;
