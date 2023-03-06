import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { connect } from 'react-redux';

function UserDetails(props) {
  const navigate = useNavigate();
  const { isLoggedIn } = props;
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login");
    }
  }, [isLoggedIn, navigate]);

  const [Emploee, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://63b806f36f4d5660c6c9c839.mockapi.io/Emploee')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <h3>Welcome to the UserDetails page!</h3>
      {isLoggedIn &&
         <div className="container text fw-bolder table-responsive">
        <table className="table table-hover table-dark table-striped mt-5" >

          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E mail</th>
              <th>Action</th>
            </tr>
          </thead>
          {Emploee.map((post) => {
            return (
              <tbody key={post.id}>
                <tr>
                  <td>{post.First}</td>
                  <td>{post.last}</td>
                  <td>{post.email}</td>
                  <td>
                    <button class="btn btn-info btn-xs btn-edit">
                      Edit
                    </button>
                    <button class="btn btn-danger btn-xs btn-delete" >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          }
          )}

        </table>
      </div>
      }
    </>
  )
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
)(UserDetails);