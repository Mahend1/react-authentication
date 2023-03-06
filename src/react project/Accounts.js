import { useNavigate } from "react-router-dom"
import React, { useEffect, } from 'react'
import { connect } from 'react-redux';

function Accounts(props) {
  const navigate = useNavigate();
  const { isLoggedIn } = props;


  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>{isLoggedIn &&
    <h1>this is account page</h1>
    }

    </div>
  )
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
)(Accounts);