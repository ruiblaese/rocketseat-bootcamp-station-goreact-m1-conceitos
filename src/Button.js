import React from "react";
//import { Component, Fragment } from "react";
import PropTypes from "prop-types";

/*
export default class Button extends Component {
  //consigo colocar isso pq foi instalado -> "@babel/plugin-proposal-class-properties
  static defaultProps = {
    children: "Salvar"
  };
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.title} - {this.props.children}
      </button>
    );
  }
}
*/
/*
//posso colocar isso dentro da classe pq instalei "@babel/plugin-proposal-class-properties
Button.defaultProps = {
  children: "Salvar"
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};
*/

const Button = props => (
  <button onClick={props.onClick}>
    {props.title} - {props.children}
  </button>
);
Button.defaultProps = {
  children: "Salvar"
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
