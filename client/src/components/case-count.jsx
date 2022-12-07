export const CaseCount = ({count,heading}) => {
  const formatCount = (count) => {
    if (count < 100) {
      return `0${count}`;
    }
    return count;
  };
    return (
    <div >
      <div >
        <p >
          {formatCount(count)}
        </p>
      </div>
      <div >
        <p>
          {heading.split(" ")[0]}
          <br />
          {heading.split(" ")[1]}
        </p>
      </div>
    </div>
  );
};

export default CaseCount;