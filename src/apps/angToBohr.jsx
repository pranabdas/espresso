import React from "react";

class AngToBohr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ang: 5.42,
    };
  }

  handleChange = (e) => {
    this.setState({
      ang: e.target.value,
    });
  };

  render() {
    const bohr = (parseFloat(this.state.ang) / 0.529177249).toFixed(10);

    return (
      <>
        <p>
          <input
            className="appInput"
            type="number"
            step="0.000000001"
            value={this.state.ang}
            onChange={this.handleChange}
          />
          &nbsp;Å&nbsp;= <span className="appOutput">{bohr}</span>
          &nbsp;Bohr.&ensp;
          <button
            className="appBtn"
            onClick={() => {
              navigator.clipboard.writeText(bohr);
            }}
          >
            Copy
          </button>
        </p>
      </>
    );
  }
}

export default AngToBohr;
