//function adding and subtracting from the counter 
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function () {
        console.log('Component will mounting')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

     decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log('Render component')
        return React.createElement('div', {},
            React.createElement('button',{onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button',{onClick: this.increment}, '+')
        );
  
    },

    shouldComponentUpdate: function () {
      console.log('Should component update')
      return true;
      
    },

     componentDidMount: function () {
        console.log('Componennt did mount')
    },

      componentWillUpdate: function () {
      console.log('Component will update')
    },
    
    componentDidUpdate: function () {
      console.log('Component did update')
    },

    componentWillUnmount:  function () {
      console.log('Component will unmount')
    }

});

 
var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));


