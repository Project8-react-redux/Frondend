import React from "react";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";

export default function SinglePost({ postId }) {
  const userPosts = useSelector(
    (state) =>
      state.userData.data.data.User_posts.filter((ele) => {
        return ele.postId === postId;
      })[0]
  );
  const auth = useAuthUser();

  return (
    <section>
      <MDBContainer className="py-3" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12" xl="12">
            <MDBCard>
              <MDBCardBody className="py-0 pt-3">
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src={userPosts.post_Owner_photo}
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">
                      {userPosts.postOwner}
                    </h6>
                    <p className="text-muted small mb-0">
                      {userPosts.created_at.split("T")[0]} at{" "}
                      {userPosts.created_at.split("T")[1].slice(0, 5)}
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">{userPosts.content}</p>

                <MDBAccordion flush className="p-0">
                  <MDBAccordionItem collapseId={1} headerTitle="Show Comments">
                    <MDBCardBody className="p-0 py-2">
                      {userPosts.postComments.map((comment) => {
                        return (
                          <div className="d-flex flex-start py-4">
                            <MDBCardImage
                              className="rounded-circle shadow-1-strong me-3"
                              src={comment.comment_Owner_photo}
                              alt="avatar"
                              width="60"
                              height="60"
                            />
                            <div>
                              <MDBTypography tag="h6" className="fw-bold mb-1">
                                {comment.comment_Owner}
                              </MDBTypography>
                              <div className="d-flex align-items-center mb-3">
                                <p className="mb-0 small text-muted">
                                  {comment.updated_at.split("T")[0]} at{" "}
                                  {comment.updated_at.split("T")[1].slice(0, 5)}
                                </p>
                              </div>
                              <p className="mb-0 text-dark">
                                {comment.comment_content}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </MDBCardBody>
                  </MDBAccordionItem>
                </MDBAccordion>
              </MDBCardBody>
              <MDBCardFooter
                className="py-3 border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src={auth().user.profileImage}
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <MDBTextArea
                    label="Message"
                    id="textAreaExample"
                    rows={2}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                  />
                  <div className="d-flex align-items-center mx-2">
                    <MDBBtn>
                      <i class="fas fa-paper-plane"></i>
                    </MDBBtn>
                  </div>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
