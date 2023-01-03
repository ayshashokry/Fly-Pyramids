import React, { Component } from 'react';
import { Modal, Container } from 'react-bootstrap';
import InquiryForm from './InquiryForm';
export default class InquiryModal extends Component {
  render() {
    return (
      <Container>
        <Modal
          {...this.props}
          size="lg"
          // aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <InquiryForm closeModal={this.props.closeModal} />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}
