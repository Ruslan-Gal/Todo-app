function App() {

  // React-component
  const TodoList = () => {
    return (
      <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
      </ul>
    );
  };

  const AppHeader = () => {
    return <h1>My Todo List</h1>;

  };

  const SearchPanel = () => {
    return <input placeholder='search' />;

  };

  const App = () => {
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
      </div>
    )
  }


  return (
    <App />
  );
}

export default App;
