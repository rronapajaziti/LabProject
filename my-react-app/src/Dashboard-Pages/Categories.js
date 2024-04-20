import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import {Form, Button } from "react-bootstrap";
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
 //edit
const handleEdit = (categoryID) => {
  handleShow();
  setEditCategoryID(categoryID); // Corrected function name
  axios
    .get(`https://localhost:7200/api/Category/${categoryID}`)
    .then((result) => {
      const { categoryID, categoryName, language, createdAt } = result.data;
      setEditCategoryID(categoryID);
      setEditCategoryName(categoryName);
      setEditLanguage(language);
      setEditCreatedAt(createdAt);
    })
    .catch((error) => {
      toast.error("Failed to get Category: " + error.message);
    });
};


  //delete
  const handleDelete = (categoryID) => {
    if (window.confirm("Are you sure you want to delete this Category?")) {
      axios
        .delete(`https://localhost:7200/api/Category/${categoryID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Category has been deleted");
            getData();
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
      <ToastContainer />
      <div className="add-button">
        <Button variant="dark" className="btn-add" onClick={handleShow}>
          Add Category
        </Button>
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
          {data && data.length > 0 ? (
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
          ) : (
            <tr>
              <td colSpan={5}>No categories found</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form onSubmit={handleUpdate}>
    <Form.Group controlId="formCategoryID">
      <Form.Label>Category ID</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Category ID"
        value={editCategoryID}
        onChange={(e) => setEditCategoryID(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formCategoryName">
      <Form.Label>Category Name</Form.Label>
      <div>
        <Form.Check
          type="checkbox"
          label="Sci-Fi"
          id="checkbox-scifi"
          checked={editCategoryName === "Sci-Fi"}
          onChange={() => setEditCategoryName("Sci-Fi")}
        />
        <Form.Check
          type="checkbox"
          label="Romance"
          id="checkbox-romance"
          checked={editCategoryName === "Romance"}
          onChange={() => setEditCategoryName("Romance")}
        />
        <Form.Check
          type="checkbox"
          label="Fantasy"
          id="checkbox-fantasy"
          checked={editCategoryName === "Fantasy"}
          onChange={() => setEditCategoryName("Fantasy")}
        />
        <Form.Check
          type="checkbox"
          label="History"
          id="checkbox-history"
          checked={editCategoryName === "History"}
          onChange={() => setEditCategoryName("History")}
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
          onChange={() => setEditLanguage("Albanian")}
        />
        <Form.Check
          type="radio"
          label="English"
          name="language"
          id="radio-english"
          checked={editLanguage === "English"}
          onChange={() => setEditLanguage("English")}
        />
      </div>
    </Form.Group>
  </Form>
</Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Categories;
