import React, {useState, useEffect, Fragment} from "react";
import Table from "react-bootstrap/Table";

const Accessories = () => {

    const AccessoriesData = [
        {
            AccessoriesID : 1,
            Name : 'Book Page Holder',
            Image : 'Loading..',
            Seller : 'Wacantik',
            Description : 'Walnut Book Page Holder, Smooth Finish Wood Book Holder for Reading.',
            Dimensions : '3.2"D x 0.7"W x 1.5"H',
            Quantity : '25',
            Price : '11.89'
        }
    ]

    const [data, setData] = useState([])

    useEffect(() =>{
        setData(AccessoriesData);
    },[])
    return(
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="add-button">
                <Link to="/add-accessories">
                <Button variant="dark" className="btn-add">
                    Add
                </Button>
                </Link>
            </div>
            <Table striped bordered hover className="tables">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>AccessoriesID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Seller</th>
                    <th>Description</th>
                    <th>Dimensions</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {data && data.length > 0
                    ? data.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.AccessoriesID}</td>
                            <td>
                            <img src={item.image} alt="Book Cover" />
                            </td>
                            <td>{item.Name}</td>
                            <td>{item.Seller}</td>
                            <td>{item.Description}</td>
                            <td>{item.Dimensions}</td>
                            <td>{item.Price}</td>
                            <td>{item.Quantity}</td>
                            <td colSpan={2} className="btn">
                            <Button
                                variant="outline-dark"
                                className="btn-edit"
                                onClick={() => handleEdit(item.id)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="outline-dark"
                                className="btn-delete"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </Button>
                            </td>
                        </tr>
                        );
                    })
                    : "Loading..."}
                </tbody>
            </Table>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                    
                <Modal.Header closeButton>
                <Modal.Title>Edit Accessories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleUpdate}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formAccessoriesID">
                            <Form.Label>AccessoriesID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter AccessoriesID"
                                name="AccessoriesID"
                                value={editAccessoriesID}
                                onChange={(e) => setEditAccessoriesID(e.target.value)}
                            />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                name="image"
                                value={editImage}
                                onChange={(e) => setEditImage(e.target.value)}
                            />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                name="Name"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                            />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formSeller">
                            <Form.Label>Seller</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Seller"
                                name="Seller"
                                value={editSeller}
                                onChange={(e) => setEditSeller(e.target.value)}
                            />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter Description"
                                name="Description"
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                            />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formDimensions">
                            <Form.Label>Dimensions</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Dimensions"
                                name="Dimensions"
                                value={editDimensions}
                                onChange={(e) => setEditDimensions(e.target.value)}
                            />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row> 
                        <Col>
                            <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                name="price"
                                value={editPrice}
                                onChange={(e) => setEditPrice(e.target.value)}
                            />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Quantity"
                                name="Quantity"
                                value={editQuantity}
                                onChange={(e) => setEditQuantity(e.target.value)}
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
                        onClick={handleClose}>

                        Close

                    </Button>

                    <Button

                        variant="outline-dark"
                        className="btn-update"
                        onClick={handleUpdate}>

                        Update

                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
     )

} 

export default Accessories;
