import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
} from "mdb-react-ui-kit";
import SinglePost from "../../pages/Posts";

export default function ProfilePostModel({
  toggleShow,
  setOptSmModal,
  optSmModal,
  postId,
}) {
  return (
    <>
      <MDBModal show={optSmModal} tabIndex="-1" setShow={setOptSmModal}>
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              {/* <MDBModalTitle>Small modal</MDBModalTitle> */}
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <SinglePost postId={postId} toggleShow={toggleShow} />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
