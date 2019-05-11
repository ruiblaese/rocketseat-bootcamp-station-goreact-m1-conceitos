import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
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

class App extends Component {
  state = {
    counter: 0
  };

  //quando componente eh montado
  componentDidMount() {}

  //antes de render, veta renderizacao
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  //executa depois do render
  componentDidUpdate(prevProps, prevState) {}

  //quando componente deixa de existir, geralmente para limpar eventList
  componentWillMount() {}

  handleClick = () => {
    alert("Botao clicado(evento do componente pai)");
    /*
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
    */
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={() => alert("Button1")} />
        <br />
        <Button title="Envia(propriedade)" onClick={this.handleClick}>
          Envia(dentro-children)
        </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
