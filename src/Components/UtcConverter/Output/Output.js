const Output = (props) => {
  const userTime = new Date(props.time * 1000);
  const isoStr = userTime.toISOString();
  const utcStr = userTime.toUTCString();
  const localTime = userTime.toLocaleString();
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>GMT/UTC</td>
            <td>{utcStr}+0000</td>
          </tr>
          <tr>
            <td>Your timezone</td>
            <td>{localTime}</td>
          </tr>
          <tr>
            <td>ISO string</td>
            <td>{isoStr}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Output;
