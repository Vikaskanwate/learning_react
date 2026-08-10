import axios from 'axios';

const API_URL = "http://localhost:8080/student";

export const getStudents = () => axios.get(API_URL);

export const addStudent = (student) => axios.post(API_URL,student);