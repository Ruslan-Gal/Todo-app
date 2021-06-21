function App() {

  // React-component
  const TodoList = () => {

    const items = ['Learn React', 'Build Awesome App'];

    return (
      <ul>
        <li>{items[0]}</li>
        <li>{items[1]}</li>
      </ul>
    );
  };

  const AppHeader = () => {
    return <h1>My Todo List</h1>;

  };

  const SearchPanel = () => {

    const searchText = 'Type here to search';

    const searchStyle = {
      fontSize: '20px'
    };

    return <input
      style={searchStyle}
      placeholder={searchText}
      className='foo'
      // disabled={true} = disabled
      htmlFor='for html element...' />;

  };

  const App = () => {

    const value = '<script>alert("")</script>'

    return (
      <div>
        {value}
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
