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

 
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


//function multiplying and dividing the counter 
var Multiplyer = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },

    divide: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button',{onClick: this.divide}, '/'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button',{onClick: this.multiply}, '*'),
        );
    }
});


var element2 = React.createElement(Multiplyer);
ReactDOM.render(element2, document.getElementById('app2'));



//function counting sinus and cosinus of the counter
var SinCosine = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    sinus: function() {
        this.setState({
            counter: Math.sin(this.state.counter)
        });
    },

    cosinus: function() {
        this.setState({
            counter: Math.cos(this.state.counter)
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button',{onClick: this.sinus}, 'sin'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button',{onClick: this.cosinus}, 'cos'),
        );
    }
});


var element3 = React.createElement(SinCosine);
ReactDOM.render(element3, document.getElementById('app3'));


