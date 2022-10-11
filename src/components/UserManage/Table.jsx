import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { BlockUser } from "../Axios/apis";

const DashTable = ({ user, page,setUpdate }) => {
  const navigate = useNavigate();
  const Details = (e) => {
    navigate(`/usermanage/${e}`);
  };
  const Action = async (id, state) => {
    try {
      await BlockUser({ userId: id, isBlock: state });
      alert(`user ${state ? "Blocked" : "UnBlocked"}`);
    } catch (error) {
      console.log(error);
    }
    setUpdate(true);
  };
  return (
    <>
      {user?.length !== 0 ? (
        <Table className="report-table-main mb-5">
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
                      style={{ cursor: "pointer" }}
                      onClick={() => Details(data?._id)}
                    >
                      {((parseInt(page))*10 + parseInt(id + 1))}
                    </td>
                    <td
                      className="Rtable-data"
                      style={{ cursor: "pointer" }}
                      onClick={() => Details(data?._id)}
                    >
                      {data?.name}
                    </td>
                    <td
                      className="Rtable-data"
                      style={{ cursor: "pointer" }}
                      onClick={() => Details(data?._id)}
                    >
                      {data?.email}
                    </td>
                    <td
                      className="Rtable-data"
                      style={{ cursor: "pointer" }}
                      onClick={() => Details(data?._id)}
                    >
                      {data?.number}
                    </td>

                    <td
                      className="Rtable-data"
                      style={{ cursor: "pointer" }}
                      onClick={() => Details(data?._id)}
                    >
                      {data?.city}, {data?.state}
                    </td>
                    <td
                      className="Rtable-data"
                      style={{ cursor: "pointer" }}
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
                          cursor:"pointer"
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
                          cursor:"pointer"
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
    </>
  );
};
export default DashTable;
