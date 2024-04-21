import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import {Row, Col,Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../style.css";
import axios from "axios";


const Categories = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editCategoryID, setEditCategoryID] = useState("");
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editLanguage, setEditLanguage] = useState("");
  const [editCreatedAt, setEditCreatedAt] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7200/api/Category`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  //edit

  const handleEdit = (categoryID) => {
    handleShow();
    setEditCategoryID(categoryID); 
    axios
    .get(`https://localhost:7200/api/Category/${categoryID}`)
    .then((result) => {
      setEditCategoryID(result.data.categoryID);
      setEditCategoryName(result.data.categoryName);
      setEditLanguage(result.data.language);
      setEditCreatedAt(result.data.createdAt);
    })
    .catch((error) => {
      toast.error("Failed to get Category: " + error.message);
    });
};


  //delete
  const handleDelete = (categoryID) => {
    if (window.confirm("Are you sure you want to delete this Category?") == true) {
      axios
        .delete(`https://localhost:7200/api/Category/${categoryID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Category has been deleted");
          }
        })
        .catch((error) => {
          toast.error("Failed to delete Category: " + error.message);
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7200/api/Category/${editCategoryID}`;
    const data = {
      categoryID: editCategoryID,
      categoryName: editCategoryName,
      language: editLanguage,
      createdAt: editCreatedAt,
    };
    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Category has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit Category: " + error.message);
      });
  };

  const clear = () => {
    setEditCategoryID("");
    setEditCategoryName("");
    setEditLanguage("");
    setEditCreatedAt("");
  };

  return (
    <Fragment>
     <ToastContainer></ToastContainer> 
      <div className="add-button">
        <Link to = "/add-categories">
        <Button variant="dark" className="btn-add" >
          Add Category
        </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Language</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? 
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.categoryID}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.language}</td>
                  <td>{item.createdAt}</td>
                  <td colSpan={2} className="btn">
                    <Button
                      variant="outline-dark"
                      className="btn-edit"
                      onClick={() => handleEdit(item.categoryID)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="btn-delete"
                      onClick={() => handleDelete(item.cat)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
           :"Loading..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form onSubmit={handleUpdate}>
  <Row>
  <Col>
    <Form.Group controlId="formCategoryID">
      <Form.Label>Category ID</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Category ID"
        name="categoryID"
        value={editCategoryID}
        readOnly
      />
    </Form.Group>
    </Col>

    <col> 
    <Form.Group controlId="formCategoryName">
      <Form.Label>Category Name</Form.Label>
      <div>
        <Form.Check
          type="checkbox"
          label="Sci-Fi"
          id="checkbox-scifi"
          checked={editCategoryName === "Sci-Fi"}
          onChange={(e) => setEditCategoryName("Sci-Fi")}
        />
        <Form.Check
          type="checkbox"
          label="Romance"
          id="checkbox-romance"
          checked={editCategoryName === "Romance"}
          onChange={(e) => setEditCategoryName("Romance")}
        />
        <Form.Check
          type="checkbox"
          label="Fantasy"
          id="checkbox-fantasy"
          checked={editCategoryName === "Fantasy"}
          onChange={(e) => setEditCategoryName("Fantasy")}
        />
        <Form.Check
          type="checkbox"
          label="History"
          id="checkbox-history"
          checked={editCategoryName === "History"}
          onChange={(e) => setEditCategoryName("History")}
        />
      </div>
    </Form.Group>
    <Form.Group controlId="formLanguage">
      <Form.Label>Language</Form.Label>
      <div>
        <Form.Check
          type="radio"
          label="Albanian"
          name="language"
          id="radio-albanian"
          checked={editLanguage === "Albanian"}
          onChange={(e) => setEditLanguage("Albanian")}
        />
        <Form.Check
          type="radio"
          label="English"
          name="language"
          id="radio-english"
          checked={editLanguage === "English"}
          onChange={(e) => setEditLanguage("English")}
        />
      </div>
    </Form.Group>
  </col>
  </Row>
  </Form>
</Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark"  className="btn-Close" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark"  className="btn-update" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Categories;
