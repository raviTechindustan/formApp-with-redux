import React from "react"
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/product';
import ProductShowCard from './ProductShowCard';
import { Row, Col, Modal, Button } from "react-bootstrap";
import Masonry from 'react-masonry-component';

class Products extends React.Component {
  state = {
    allProduct: [],
    openModal: false
  }

  componentDidMount() {
    this.props.Products().then(res => {
      this.setState({
        allProduct: res && res.values || []
      })
    }).catch(err => {
      console.log(err || "something went wrong");
    })
  }

  onClick = () => {
    this.setState({
      openModal: !this.state.openModal
    })
  }

  render() {
    const { allProduct, openModal } = this.state;

    return (
      <React.Fragment>
        <Row className="p-0 m-0">
          <Col xs={12} sm={12} md={12} className="p-0 m-0">
            <Masonry>
              {allProduct && allProduct.length ? allProduct.map((items, key) => {
                return <ProductShowCard
                  key={key}
                  name={items.name}
                  price={items.price}
                  description={items.description}
                  rating={items.rating}
                  assets={items.asset}
                  onClick={this.onClick}
                />
              }) : null
              }
            </Masonry>
          </Col>
        </Row>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={openModal}
          onHide={this.onClick}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.onClick}>Close</Button>
            </Modal.Footer>
          </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Products: () => dispatch(actions.AllProduct()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);