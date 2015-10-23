var Dashboard = React.createClass({ // react component
  getInitialState: function () {
    return {value: 'what\'s up'}
  },
  onButtonBoxClick: function () {
    // update the state of value ^^^
    this.setState({value: "You clicked a button, and here I am all of a sudden."})
  },
  render: function() {
     // the return statement can only return one single element. There can be nested elements, but only one top level
    return (
      <div className='dashboard'>
        <h1>Preparation is Key!!!!</h1>

        <ButtonBox onButtonClick={this.onButtonBoxClick} />
        <ContentBox text={this.state.value} />
        <IdeaBox />
      </div>
    )
  }
});

var ButtonBox = React.createClass({
  handleClick: function () {
    this.props.onButtonClick();
  },
  render: function () {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
});

var ContentBox = React.createClass({
  render: function () {
    return (
      <div className='content-box'>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
})

var IdeaBox = React.createClass({
  getIdeasFromApi: function () {
    $.ajax({
      url: '/api/v1/ideas.json',
      type: 'GET',
      success: function (response) {
        console.log(response);
      }
    })
  },
  render: function () {
    this.getIdeasFromApi();
    return (
      <div>
        <h1>We are in the idea box component.</h1>
      </div>
    )
  }
});