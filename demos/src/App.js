function App() {
  const [isOn, setIsOn] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  // console.log('without useEffect...')
  // let interval;

  // if (isOn) {
  //   interval = setInterval(
  //     () => setTimer(timer => timer + 1),
  //     1000,
  //   );
  // }


  //this runs when mounting and when component updates unless adding [] as second param.
  React.useEffect(() => {
    console.log('inside useEffect...')
    let interval;

    if (isOn) {
      interval = setInterval(
        () => setTimer(timer => timer + 1),
        1000,
      );
    }

    return () => clearInterval(interval);
  }, [isOn]);

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };

  return (
    <div>
      {timer}

      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}

      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}

      <button type="button" disabled={timer === 0} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

ReactDOM.render(
      <App />, 
      document.getElementById('root')
);