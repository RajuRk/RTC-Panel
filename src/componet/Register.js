import React,{useState} from 'react'
import { Form,Button,Container } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {
  
  const [regNo, setRegNo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     
  }

  return (
    <section id="form">
      <Container>
        <Form onClick={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicRegisterNo">
                <Form.Label>Register No</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Register No" 
                  required
                  value={regNo}
                  onChange={e => setRegNo(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Name" 
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter Email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}  
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Contact No</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter Contact No" 
                  required
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                    <Form.Select 
                      required
                      value={department}
                      onChange={e => setDepartment(e.target.value)}
                    >
                        <option value="" disabled selected>Choose One</option>
                        <option value="B.Tech Agricultural Engineering">B.Tech Agricultural Engineering</option>
                        <option value="B.E Electronics and Communication Engineering">B.E Electronics and Communication Engineering</option>
                        <option value="B.Tech Biotechnology">B.Tech Biotechnology</option>
                        <option value="B.E Bio-medical Engineering">B.E Bio-medical Engineering</option>
                        <option value="B.E Mechanical Engineering">B.E Mechanical Engineering</option>
                        <option value="B.E Computer Science and Engineering">B.E Computer Science and Engineering</option>
                        <option value="B.Tech – Artificial Intelligence and Data Science">B.Tech – Artificial Intelligence and Data Science</option>
                        <option value="B.E Computer Science and Engineering (Tamil)">B.E Computer Science and Engineering (Tamil)</option>
                        <option value="B.Tech – Information Technology">B.Tech – Information Technology</option>
                        <option value="M.E Applied Electronics">M.E Applied Electronics</option>
                        <option value="M.E Biometrics And Cyber Security">M.E Biometrics And Cyber Security</option>
                    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                    <Form.Select 
                      required
                      value={batch}
                      onChange={ e => setBatch(e.target.value)}
                    >
                        <option value="" disabled selected>Choose One</option>
                        <option value="1st Year">1st year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>    
    </section>
  )
}

export default Register
