import ShowCase from '../components/ShowCase';
import NewsLetter from '../components/NewsLetter';
import Boxes from '../components/Boxes';
import Learn from '../components/Learn';
import LearnReact from '../components/LearnReact';
import { Accordion } from 'react-bootstrap';
import Instructors from '../components/Instructors';
import React from 'react'
import { ListGroup } from 'react-bootstrap' 

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <ShowCase />
    <NewsLetter />
    <Boxes />
    <Learn />
    <LearnReact />
    {/*FAQ*/}
    <section className="container p-5 text-center " id="FAQ">
    <h2>Frequently Asked Questions ?</h2>
    <Accordion defaultActiveKey="0" flush id="FAQ">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where Exactly are you located ? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much does it cost to Attend?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What do I need to know?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do I sign up ? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
    <Instructors />
    {/*Contact*/}
    <section className="p-5">
    <h2 className="text-center mb-4">Contact Info</h2>
    <ListGroup variant="flush"  id="contact" className='lead'>
      <ListGroup.Item><span className="fw-bold">Main Location:</span> 50 Main st Boston MA</ListGroup.Item>
      <ListGroup.Item><span className="fw-bold">Enrollment Phone:</span>(555) 555-5555</ListGroup.Item>
      <ListGroup.Item><span className="fw-bold">Student Phone:</span>(333) 333-3333</ListGroup.Item>
      <ListGroup.Item><span className="fw-bold">Enrollment Email:</span>(555) enroll@frontendbc.test</ListGroup.Item>
      <ListGroup.Item><span className="fw-bold">Student Email:</span>student@frontendbc.test</ListGroup.Item>
    </ListGroup>
 
    </section>
  
    </>
     )
}
