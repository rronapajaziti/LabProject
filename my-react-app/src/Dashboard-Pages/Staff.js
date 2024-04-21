import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../style.css";
import axios from "axios";

const Staff = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editStaffID, setEditStaffID] = useState("");
  const [editName, setEditName] = useState("");
  const [editSurname, setEditSurname] = useState("");
  const [editBirthdate, setEditBirthdate] = useState("");
  const [editContactNumber, setEditContactNumber] = useState("");
  const [editPosition, setEditPosition] = useState("");
  const [editEmploymentStatus, setEditEmploymentStatus] = useState("");
  const [editJoiningDate, setEditJoiningDate] = useState("");
  const [editSalary, setEditSalary] = useState("");
  const [editPerformanceRating, setEditPerformanceRating] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7200/api/Staff`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Edit

  const handleEdit = (StaffID) => {
    handleShow();
    setEditStaffID(StaffID);
    axios

      .get(`https://localhost:7200/api/Staff/${StaffID}`)
      .then((result) => {
        setEditName(result.data.name);
        setEditSurname(result.data.surname);
        setEditBirthdate(result.data.birthdate);
        setEditContactNumber(result.data.contactNumber);
        setEditPosition(result.data.position);
        setEditEmploymentStatus(result.data.employmentStatus);
        setEditJoiningDate(result.data.joiningDate);
        setEditPerformanceRating(result.data.performanceRating);
        setEditSalary(result.data.salary);
      })

      .catch((error) => {
        toast.error("Failed to get Staff: " + error.message);
      });
  };

  //delete

  const handleDelete = (StaffID) => {
    console.log("Deleting staff member with ID:", StaffID);
    if (
      window.confirm("Are you sure you want to delete this Staff member") ==
      true
    ) {
      axios
        .delete(`https://localhost:7200/api/Staff/${StaffID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Staff member has been deleted");
          }
        })
        .catch((error) => {
          toast.error("Failed to delete staff memeber: " + error.message);
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7200/api/Staff/${editStaffID}`;
    const data = {
      StaffID: editStaffID,
      Name: editName,
      Surname: editSurname,
      Birthdate: editBirthdate,
      ContactNumber: editContactNumber,
      Position: editPosition,
      EmploymentStatus: editEmploymentStatus,
      JoiningDate: editJoiningDate,
      Salary: editSalary,
      PerformanceRating: editPerformanceRating,
    };
    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Staff has been updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to edit Staff: " + error.message);
      });
  };

  const clear = () => {
    setEditName("");
    setEditSurname("");
    setEditBirthdate("");
    setEditContactNumber("");
    setEditPosition("");
    setEditEmploymentStatus("");
    setEditJoiningDate("");
    setEditPerformanceRating("");
    setEditSalary("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="/add-staff">
          <Button variant="dark" className="btn-add">
            Add Staff
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Birthdate</th>
            <th>Contact Number</th>
            <th>Position</th>
            <th>Employment Status</th>
            <th>Joining Date</th>
            <th>Salary</th>
            <th>Performance Rating</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.birthdate}</td>
                <td>{item.contactNumber}</td>
                <td>{item.position}</td>
                <td>{item.employmentStatus}</td>
                <td>{item.joiningDate}</td>
                <td>{item.salary}</td>
                <td>{item.performanceRating}</td>
                <td colSpan={2} className="btn">
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.StaffID)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.StaffID)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="fromstaffID">
                  <Form.Label>Staff ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Staff ID"
                    // readOnly
                    value={editStaffID}
                  />
                </Form.Group>
                <Form.Group controlId="fromName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Staff Name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Staff Surname"
                    value={editSurname}
                    onChange={(e) => setEditSurname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="Birthdate">
                  <Form.Label>Birthdate</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter Birthdate"
                    value={editBirthdate}
                    onChange={(e) => setEditBirthdate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Contact Number"
                    value={editContactNumber}
                    onChange={(e) => setEditContactNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromPosition">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Position"
                    value={editPosition}
                    onChange={(e) => setEditPosition(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmploymentStatus">
                  <Form.Label>Employment Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Employment Status"
                    value={editEmploymentStatus}
                    onChange={(e) => setEditEmploymentStatus(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromJoiningDate">
                  <Form.Label>Joining Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter Joining Date"
                    value={editJoiningDate}
                    onChange={(e) => setEditJoiningDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Salary"
                    value={editSalary}
                    onChange={(e) => setEditSalary(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPerformanceRating">
                  <Form.Label>Performance Rating</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Performance Rating"
                    value={editPerformanceRating}
                    onChange={(e) => setEditPerformanceRating(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-dark"
            className="btn-Close"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="outline-dark"
            className="btn-update"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Staff;
