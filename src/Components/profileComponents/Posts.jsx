import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserData } from "../../Reducers/ProfileReducer";
import EditPost from "./EditPost";
import ProfilePostModel from "./ProfilePostModel";

export const Posts = ({ postData }) => {
  const [optSmModal, setOptSmModal] = useState(false);
  const [optSmModal2, setOptSmModal2] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);

  const toggleShow2 = () => setOptSmModal2(!optSmModal2);

  return (
    <>
      <MDBCol md="10" lg="12" xl="12">
        <div className="d-flex flex-start mb-4">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src={postData.post_Owner_photo}
            alt="avatar"
            width="65"
            height="65"
          />

          <MDBCard className="w-100">
            <MDBCardBody className="p-4">
              <div>
                <div className="d-flex justify-content-between ">
                  <div>
                    <MDBTypography tag="h5">{postData.postOwner}</MDBTypography>
                    <p className="small">
                      {postData.created_at.split("T")[0]} at{" "}
                      {postData.created_at.split("T")[1].slice(0, 5)}
                    </p>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="edit"
                      onClick={toggleShow2}
                      style={{ fontSize: 20, cursor: "pointer" }}
                    />
                    <EditPost
                      toggleShow={toggleShow2}
                      setBasicModal={setOptSmModal2}
                      basicModal={optSmModal2}
                      postId={postData.postId}
                    />
                    <MDBIcon
                      fas
                      icon="trash-alt"
                      className="ms-3 text-danger"
                      style={{ fontSize: 20, cursor: "pointer" }}
                    />
                  </div>
                </div>
                <p>{postData.content}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <p></p>
                  <Link className="link-muted" onClick={toggleShow}>
                    <MDBIcon fas icon="reply me-1" /> Comment
                  </Link>
                  <ProfilePostModel
                    toggleShow={toggleShow}
                    setOptSmModal={setOptSmModal}
                    optSmModal={optSmModal}
                    postId={postData.postId}
                  />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>
    </>
  );
};
