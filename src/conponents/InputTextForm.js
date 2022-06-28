import React from 'react';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "デフォルト",
      changedTitle: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      changedTitle: e.target.value
    });
  }

  handleClick(e) {
    this.setState({
      title: this.state.changedTitle,
      changedTitle: ""
    })
  }

  render() {
    const { title, changedTitle } = this.state;
    return (
      <div>
        <p>{ title }</p>
        <input
          type="text"
          value={changedTitle}
          onChange={this.handleChange}
        />
        <button
          type="button"
          data-testid="executeButton"
          onClick={this.handleClick}>
          変更
        </button>
      </div>
    );
  }
}

export default Sub;
