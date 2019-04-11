'use strict';

function App() {
  const [data, setData] = React.useState({ hits: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://hn.algolia.com/api/v1/search?query=redux');

      setData(result.data);
    };

    fetchData();
  }, []);

  return React.createElement(
    'ul',
    null,
    data.hits.map(item => React.createElement(
      'li',
      { key: item.objectID },
      React.createElement(
        'a',
        { href: item.url },
        item.title
      )
    ))
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));