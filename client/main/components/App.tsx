import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { Store } from '../../../lib/Store';

import { AppInterface } from '../../AppInterface';

import { createTodo, completeAll, completeTodo, editTodo, clearCompleted, deleteTodo } from '../../todos/mutators';

import {
  Header,
  MainSection,
  model,
  //addTodo,
  //editTodo,
  //clearCompleted,
  //completeAll,
  //completeTodo,
  //deleteTodo
} from '../../todos';

interface AppProps {
  //todos: model.Todo[];
  //dispatch: Dispatch<{}>;
  store: Store<AppInterface>;
  state: any;
}

export class App extends React.Component<AppProps, void> {
  render() {

    return (
      <div className="todoapp">
        <Header addTodo={(text: string) => {console.log('create todo event', text); this.props.store.dispatch(createTodo(text))} } />
        <MainSection
          todos={this.props.state.todos}
          editTodo={(t,s) => this.props.store.dispatch(editTodo({etodo: t, newText: s}))}
          deleteTodo={(t) => this.props.store.dispatch(deleteTodo({todo: t}))}
          completeTodo={(t) => { console.log('complete', t); this.props.store.dispatch(completeTodo(t))}}
          clearCompleted={() => this.props.store.dispatch(clearCompleted({}))}
          completeAll={() => this.props.store.dispatch(completeAll({}))}
          />
      </div>
    )
    /*
    const { todos, dispatch } = this.props;

    return (
      <div className="todoapp">
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <MainSection
            todos={todos}
            editTodo={(t,s) => dispatch(editTodo(t, s))}
            deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
            completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
            clearCompleted={() => dispatch(clearCompleted())}
            completeAll={() => dispatch(completeAll())}/>
      </div>
    );
    */
  }
}

/*
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
*/