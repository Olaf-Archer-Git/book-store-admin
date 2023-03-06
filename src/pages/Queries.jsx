import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { Row, Col, Select } from "antd";
import TableComponent from "../components/TableComponent";
import { getQueries } from "../features/queries/querySlice";

const Queries = () => {
  const dispatch = useDispatch();
  const queryState = useSelector((state) => state.query.queries);

  useEffect(() => {
    dispatch(getQueries());
  }, [dispatch]);

  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },

    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < queryState.length; i++) {
    data.push({
      key: i + 1,
      name: queryState[i].name,
      email: queryState[i].email,
      comment: queryState[i].comment,
      status: (
        <>
          <Select
            defaultValue={
              queryState[i].status ? queryState[i].status : "Submited"
            }
            options={[
              {
                value: "submitted",
                label: "Submitted",
              },
              {
                value: "contacted",
                label: "Contacted",
              },
              {
                value: "in progress",
                label: "In Progress",
              },
              {
                value: "reseolved",
                label: "Reseolved",
              },
            ]}
          />
        </>
      ),
      action: (
        <>
          <Link to="#!">
            <AiOutlineDelete style={{ fontSize: "21px" }} title="delete" />
          </Link>
        </>
      ),
    });
  }
  console.log(queryState);

  return (
    <Row style={{ margin: "25px 0" }} gutter={10}>
      <h3 style={{ fontSize: "30px", margin: "20px" }}>Queries</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default Queries;
