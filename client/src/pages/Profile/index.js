import React from 'react';
import FirstName from '../../components/FirstName';
import LastName from '../../components/LastName';
import Email from '../../components/Email';

import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import user from './user.png';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col xs="2" md="3" lg="3"></Col>
        <Col xs="8" md="6" lg="6">
          <Card className="bgProfileComponent custom-style-profile bg-light">
            <Card.Header className="profile-title-style bg-light">
              <h3>Profile</h3>
            </Card.Header>
            <Card.Body>
              <Col className="center-img">
                <Card.Img
                  className="profile-img-style"
                  variant="top"
                  src={user}
                />
              </Col>
              <FirstName />
              <LastName />
              <Email />
              <Col className="center-btn">
                <Button className="btnColor">
                  <FontAwesomeIcon icon={faPlus} />
                  Create New Reservation
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="2" md="6" lg="3"></Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
