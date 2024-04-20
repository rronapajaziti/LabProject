import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategories = () => {
    const [categoryID, setCategoryID] = useState("");
    const [categoryName, setCategoryName] = useState(""); 
    const [language, setLanguage] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    const handleSave = () => {
        const url = 'https://localhost:7200/api/Category';
        const data = {
            CategoryID: categoryID,
            CategoryName: categoryName,
            Language: language,
            CreatedAt: createdAt
        };
        axios.post(url,data)
            .then((result) => {
                clear();
                toast.success("Category has been added successfully");
            })
            .catch((error) => {
                toast.error("Failed to add category: " + error.message);
            });
    };

    const clear = () => {
        setCategoryID("");
        setCategoryName(""); 
        setLanguage("");
        setCreatedAt("");
    };

    const handleClear = () => {
        clear();
    };

    return ( 
        <Form className="categoryForm">
        <ToastContainer />
        <Row>
            <Col>
                <Form.Group controlId="formCategoryID">
                    <Form.Label>Category ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Category ID"
                        value={categoryID}
                        onChange={(e) => setCategoryID(e.target.value)}
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Category Name"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="formLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formCreatedAt">
                    <Form.Label>Created At</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Creation Date"
                        value={createdAt}
                        onChange={(e) => setCreatedAt(e.target.value)}
                    />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant="primary" onClick={handleSave}>Add Category</Button>
            </Col>
            <Col>
                <Button variant="secondary" onClick={handleClear}>Clear</Button>
            </Col>
        </Row>
    </Form>
);
};

export default AddCategories;  
    

