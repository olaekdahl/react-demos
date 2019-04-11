function App() {
    const [data, setData] = React.useState({ hits: [] });
  
    React.useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://hn.algolia.com/api/v1/search?query=redux',
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    return (
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  }

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)