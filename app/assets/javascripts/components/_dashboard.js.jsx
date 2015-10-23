var Dashboard = React.createClass({
  getInitialState: function() {
    return {value: 'Come join us', rawIdeas: []}
  },
  onButtonBoxClick: function() {
    this.setState({value: "You clicked a button, and here I am all of a sudden."});
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/v1/ideas.json',
      type: 'GET',
      success: function(response) {
        this.setState({rawIdeas: response});
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className='dashboard'>
        <h1>Preparation is key!!!!</h1>

        <ButtonBox onButtonClick={this.onButtonBoxClick} />
        <ContentBox text={this.state.value} />

        <IdeaBox ideas={this.state.rawIdeas} />
      </div>
    )
  }
});

var ButtonBox = React.createClass({
  handleClick: function() {
    this.props.onButtonClick()
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleClick} >
          Click me!
        </button>
      </div>
    )
  }
});

var ContentBox = React.createClass({
  render: function() {
    return (
      <div className='content-box'>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
});

var IdeaBox = React.createClass({
  render: function() {
    var ideaElements = this.props.ideas.map(function(idea, index) {
      return (
        <div className='idea' key={index} >
          <h1>{idea.title}</h1>
          <h3>{idea.body}</h3>
          <p>Quality: {idea.quality}</p>
        </div>
      )
    });

    return (
      <div>
        {ideaElements}
      </div>
    )
  }
});