import { CaseCount } from "./case-count";

const MyDashboard = () => {
  return (
    <div className="gradient-bg-welcome">
      <p>
        My Dashboard
      </p>
      <div >
        <CaseCount count={284} heading={"Registered"} />
        <CaseCount count={192} heading={"Rejected"} />
        <CaseCount count={16} heading={"Approved"} />
      </div>
    </div>
  );
};

export default MyDashboard;
