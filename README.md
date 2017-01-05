# react
For learning react

## pre-condiction

* Install live-server *globally*

  ```shell
  # live-server
  $ npm install -g live-server
  ```

## Topics

### Using State Correctly

There are three things you should know about setState().

* Do Not Modify State Directly
  
  ```shell
  // Wrong
  this.state.comment = 'Hello';

  // Correct
  this.setState({comment: 'Hello'});
  ```

* State Updates May Be Asynchronous

React may batch multiple setState() calls into a single update for performance.

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

  ```shell
  // Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });

  // Correct
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }));
  ```

* State Updates are Merged

When you call setState(), React merges the object you provide into the current state.

### The Data Flows Down

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:
  
  ```shell
  <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  ```

This also works for user-defined components:

  ```shell
  <FormattedDate date={this.state.date} />
  ```