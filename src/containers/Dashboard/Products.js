import React from "react"
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/product';
import ProductShowCard from './ProductShowCard';
import { Row, Col, Modal, Button } from "react-bootstrap";
import Masonry from 'react-masonry-component';
import LeftMenuBar from './LeftMenuBar'
import { toast } from "react-toastify";
import 'react-drop-zone/dist/styles.css'
import Dropzone from "react-dropzone";
import Faker from 'faker'
class Products extends React.Component {
  state = {
    openModal: false,
    change: false,
    currentID: "",
    activePage: 1,
    product_state: {
      name: "",
      price: "",
      description: "",
      asset: {
        id: "andy-apis/wzgya35iwaje1w5nhjuy",
        url: ""
      }
    },

  }

  componentDidMount() {
    this.realData();
  }

  realData = () => {
    this.props.Products().then(res => {
      // console.log("Response are", res);
    }).catch(err => {
      // console.log(err || "something went wrong");
    })
  }

  onClickSelectProduct = (id) => {
    console.log("Running", id);
    this.setState({
      openModal: !this.state.openModal,
      change: false,
      currentID: id
    })
    this.props.Product(id).then(res => {

    }).catch(err => {

    })
  }

  onClickEdit = () => {
    this.setState({ change: !this.state.change });
  }

  onClickSave = (id) => {
    const { product_state } = this.state
    this.props.saveProduct(id, product_state).then(res => {
      this.setState({
        change: false
      })
      this.props.Products().then(res => {
      }).catch(err => console.log(err, "err"))
      console.log(res, "res in edit product");
      toast.success("Product updated successfully");
    }).catch(err => {
      this.setState({
        change: false
      })
      console.log(err, "err");
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { product_state } = this.state
    this.setState({
      product_state: {
        ...product_state,
        [name]: value
      }
    })
  }

  onClickDelete = (id) => {
    this.props.deleteProduct(id).then(res => {
      this.setState({
        openModal: false
      })
      toast.success("Product Deleted");
      this.props.Products().then(res => { }).catch(err => { })
    }).catch(err => {
      toast.warn("Something went wrong");
    })
  }

  onDrop = (files, rejectedFiles) => {
    let imagesUploaded = files.map(file => {
      return Object.assign(file, { preview: URL.createObjectURL(file) });
    });

    this.setState({ product_state: { assets: { url: imagesUploaded[0].preview } } })
  }


  rightArrow = () => {
    const { activePage } = this.state;
    this.setState({ activePage: activePage + 1 })
  }

  leftArrow = () => {
    const { activePage } = this.state;
    this.setState({ activePage: activePage - 1 })

  }

  fakeData = () => {

    let fake_data = [];
    for (let i = 1; i <= 100; i++) {
      let image = Faker.image.avatar()
      let name = Faker.internet.userName()
      fake_data.push({ asset: { url: image }, name: name });
    }
    this.props.saveData(fake_data);
  }
  render() {

    const { openModal, change, currentID, product_state } = this.state;
    //const { activePage} = product_state;
    let { product = {}, allProduct = [] } = this.props.product;
    const { asset = {} } = product;
    const { url } = asset;
    const { activePage } = this.state;
    let lastarrow = Math.ceil(allProduct.length / 5);
    let new_array;

    if (allProduct.length > 5) {
      let first = activePage * 5 - 4;
      let last = activePage * 5 + 1;
      let array = allProduct.slice(first, last);
      new_array = array;
    } else {
      new_array = allProduct;
    }


    return (

      <React.Fragment>
        <Row style={{ marginLeft: "0px  " }}>
          <Col xs={2} sm={2} md={2} style={{ textAlign: "left" }} >
            <LeftMenuBar {...this.props} />
          </Col>
          <Col xs={10} sm={10} md={10} style={{ backgroundColor: "white" }}>
            <Masonry style={{ marginTop: "10px" }}>
              {new_array && new_array.length && new_array.map((items, key) => {
                return <ProductShowCard
                  key={key}
                  name={items.name}
                  asset={asset || {}}
                  onClickSelectProduct={this.onClickSelectProduct}
                  item={items}
                />
              })
              }
            </Masonry>
          </Col>
        </Row>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={openModal}
          onHide={this.onClickSelectProduct}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3>Product Details</h3>
            </Modal.Title>
          </Modal.Header>
          <Row>
            <Col xs={6} sm={6} md={8}>
              <Modal.Body>
                <Dropzone onDrop={this.onDrop}
                  type="image/*"
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p> <img src={url} alt="Not found" /></p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Modal.Body>
            </Col>
            <Col xs={6} sm={6} md={4}>
              <p>Name: {!change ? product.name : <input value={product_state.name || product.name} name="name" onChange={e => this.handleChange(e)} />}</p>
              <p>Price: {!change ? product.price : <input value={product_state.price || product.price} name="price" onChange={this.handleChange} />}</p>
              <p>discription: {!change ? product.description : <input value={product_state.description || product.description} name="description" onChange={this.handleChange} />}</p>
              <Modal.Footer>
                {!change ?
                  <React.Fragment>
                    <Button variant="info" onClick={this.onClickEdit}>Edit</Button>
                    <Button variant="danger" onClick={() => this.onClickDelete(currentID)}>Delete</Button>
                    <Button variant="outline-primary" onClick={() => this.setState({ openModal: false })}>Close</Button>
                  </React.Fragment>
                  : <React.Fragment>
                    <Button variant="info" onClick={() => this.onClickSave(currentID)}>Save</Button>
                    <Button variant="info" onClick={this.onClickEdit}>Back</Button>
                  </React.Fragment>
                }
              </Modal.Footer>
            </Col>
          </Row>
        </Modal>
        {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={2}
          totalItemsCount={allProduct.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
      />
       */}

        <i class={`fa fa-arrow-left ${activePage === 1 ? "disabled" : ""}`} aria-hidden="true" onClick={this.leftArrow}></i>{activePage} / {lastarrow}<i class={`fa fa-arrow-right ${activePage === lastarrow ? "disabled" : null}`} aria-hidden="true" onClick={this.rightArrow}></i>
        {" "} <Button variant="info" onClick={this.fakeData} > fake data</Button>{" "}
        <Button variant="info" onClick={this.realData} >  Real data</Button>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {

  console.log("State are", state)
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Products: () => dispatch(actions.AllProduct()),
    Product: (id) => dispatch(actions.ProductsById(id)),
    saveProduct: (id, data) => dispatch(actions.saveProductId(id, data)),
    deleteProduct: (id) => dispatch(actions.deleteProduct(id)),
    saveData: (data) => dispatch(actions.saveData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);