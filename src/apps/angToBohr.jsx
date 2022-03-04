import React from "react";

class AngToBohr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ang: 1,
      showCopied: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      ang: e.target.value,
    });
  };

  handleCopy = () => {
    const bohr = (parseFloat(this.state.ang) / 0.529177249).toFixed(10);

    this.setState({
      showCopied: true,
    });

    setTimeout(() => {
      this.setState({
        showCopied: false,
      });
    }, 1500);

    navigator.clipboard.writeText(bohr);
  };

  render() {
    const bohr = (parseFloat(this.state.ang) / 0.529177249).toFixed(10);

    return (
      <>
        <p>
          <input
            className="appInput"
            type="number"
            step="0.01"
            value={this.state.ang}
            onChange={this.handleChange}
          />
          &nbsp;Å&nbsp;= <span className="appOutput">{bohr}</span>
          &nbsp;Bohr.&ensp;
          <button className="appBtn" onClick={this.handleCopy}>
            {this.state.showCopied ? "Copied" : "Copy"}
          </button>
        </p>
      </>
    );
  }
}

export default AngToBohr;
