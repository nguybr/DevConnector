import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Dashboard);
