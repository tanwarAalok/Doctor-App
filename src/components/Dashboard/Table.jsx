import { Table } from "react-bootstrap";
import { BlockUser } from "../Axios/apis";
import { useNavigate } from "react-router-dom";
const DashTable = ({ user, setUpdate }) => {
  const navigate = useNavigate();

  const Action = async (id, state) => {
    try {
      await BlockUser({ userId: id, isBlock: state });
      alert(`user ${state ? "Blocked" : "UnBlocked"}`);
    } catch (error) {
      console.log(error);
    }
    setUpdate(true);
  };
  const Details = (e) => {
    navigate(`/usermanage/${e}`);
  };
  return (
    <>
      {user?.length !== 0 ? (
        <Table className="report-table-main">
          <thead>
            <tr className="Rtable-header">
              <th>S.no</th>

              <th>User Name</th>
              <th>E-mail</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Plan</th>
              <th>Action</th>
            </tr>
          </thead>
          {user?.map((data, id) => {
            return (
              <>
                <tbody key={id} style={{ border: "none" }}>
                  <tr>
                    <td
                      className="Rtable-data"
                      onClick={() => Details(data?._id)}
                    >
                      {id + 1}
                    </td>
                    <td
                      className="Rtable-data"
                      onClick={() => Details(data?._id)}
                    >
                      {data?.name}
                    </td>
                    <td
                      className="Rtable-data"
                      onClick={() => Details(data?._id)}
                    >
                      {data?.email}
                    </td>
                    <td
                      className="Rtable-data"
                      onClick={() => Details(data?._id)}
                    >
                      {data?.number}
                    </td>

                    <td
                      className="Rtable-data"
                      onClick={() => Details(data?._id)}
                    >
                      {data?.city}, {data?.state}
                    </td>
                    <td
                      className="Rtable-data"
                      onClick={() => Details(data?._id)}
                    >
                      {data?.plan}
                    </td>
                    {!data.isBlock ? (
                      <td
                        onClick={() => Action(data?._id, true)}
                        className="Rtable-data"
                        style={{
                          color: "#28318C",
                          cursor: "pointer",
                        }}
                      >
                        Block
                      </td>
                    ) : (
                      <td
                        onClick={() => Action(data?._id, false)}
                        className="Rtable-data"
                        style={{
                          color: "green",
                          cursor: "pointer",
                        }}
                      >
                        UnBlock
                      </td>
                    )}
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
      ) : (
        <h2 className="text-center">No User Data To Display</h2>
      )}

      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="R-bottom-text">
          {work?.length !== 0 ? `Showing Page ${page} out of ${total}` : ""}
        </p>{" "}
        {work?.length !== 0 ? (
          <p className="R-bottom-pgno">
            <MdOutlineNavigateBefore
              size={21}
              title="previous page"
              cursor="pointer"
              onClick={() => (pg[0] > 1 ? setPg(pg.map((num) => num - 5)) : "")}
            />
            &nbsp;{" "}
            <span
              style={{
                color: parseInt(page) === pg[0] ? "#f20e29" : "",
                cursor: "pointer",
              }}
            >
              {pg[0]}
            </span>{" "}
            &nbsp;{" "}
            <span
              style={{
                color: parseInt(page) === pg[1] ? "#f20e29" : "",
                cursor: "pointer",
              }}
            >
              {pg[1]}
            </span>{" "}
            &nbsp;{" "}
            <span
              style={{
                color: parseInt(page) === pg[2] ? "#f20e29" : "",
                cursor: "pointer",
              }}
            >
              {pg[2]}
            </span>{" "}
            &nbsp;{" "}
            <span
              style={{
                color: parseInt(page) === pg[3] ? "#f20e29" : "",
                cursor: "pointer",
              }}
            >
              {pg[3]}
            </span>{" "}
            &nbsp;{" "}
            <span
              style={{
                color: parseInt(page) === pg[4] ? "#f20e29" : "",
                cursor: "pointer",
              }}
            >
              {pg[4]}
            </span>{" "}
            &nbsp;
            <MdOutlineNavigateNext
              title="next page"
              cursor="pointer"
              size={21}
            />
          </p>
        ) : (
          ""
        )}
      </div> */}
    </>
  );
};
export default DashTable;
