import React, { Component } from 'react'
import { Col } from "react-bootstrap";
import InputRangedouble from './InputRange';
import AccordionComp from "./AccordionComp"
import { withStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/product';

const styles = theme => ({
  root: {
    width: '90%',
    margin: 0,
    padding: 0
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

class LeftMenuBar extends Component {
  state = {
    search: "",
    find: []
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    const { product } = this.props;
    const { allProduct } = product;
    let find = [];

    this.setState({ [name]: value }, () => {

      for (let i = 0; i <= (allProduct.length) - 1; i++) {
        let x = allProduct[i].name != null ? allProduct[i].name.search(this.state.search) : -9;
        if (x >= 0) {

          find.push(allProduct[i]);
        }
      }
      console.log(this.state.search)
      if (this.state.search === " ") {
        find = allProduct
      }
      console.log(find)
      this.setState({ find: find })
    });

  }

  handleSeaechByKey = (id) => {
    this.props.findData(id);
  }

  render() {

    let { search, find } = this.state;
    const { product } = this.props;
    const { classes } = this.props;

    find = find.length ? find : product.allProduct;


    return (
      <div style={{ backgroundColor: "white" }}>
        <Col xs={12} sm={12} md={12} className="borderBottom" >
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >

                <Typography className={classes.heading}><input type="text" className="searchbar" placeholder="   search " onChange={this.handleChange} value={search} name="search" /></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {find && find.length && find.map((value, key) => {
                    return <span className="searchKey" key={value.id}
                      onClick={() => this.handleSeaechByKey(value.id)}> {value.name || ""} </span>
                  })}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom">
          <h6 className="categories"> CATEGORIES</h6>
          <h6 style={{ color: "#0000004f" }}>Mobiles & Accessories</h6>
          <h6 className="mobiles">Mobiles</h6>
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom" >
          <span className="price"> PRICE</span>
          <span className="clear"> CLEAR</span>
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom">
          <InputRangedouble />
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom">
          <span >  <input type="checkbox" className="singleCheckBox" /> </span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" height="20px" width="100px" alt="not found" />
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom" style={{ padding: 0 }}>
          <AccordionComp />
        </Col>
      </div>

    )
  }
}


const mapStateToProps = (state) => {

  console.log("ravi here", state)
  return {
    //product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findData: (id) => dispatch(actions.findData(id))
  }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LeftMenuBar))


