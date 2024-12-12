import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface'; // Import the Student interface

// Define the schema for the Guardian type
const guardianSchema = new Schema<Guardian>({
  fathersName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fathersOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fathersContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  mothersName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  mothersOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  mothersContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

// Define the schema for the UserName type
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
});

// Define the schema for the LocalGuardian type
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

// Define the schema for the Student model
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message:
        '{VALUE} is not a valid gender. Choose between "male" or "female".',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group.',
    },
    required: [true, 'Blood group is required'],
  },
  presentAdress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  parmanentAdress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian details are required'],
  },
  locaGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian details are required'],
  },
  profileImg: {
    type: String,
    required: [false, 'Profile image is optional'],
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
    required: [true, 'Account status (active/blocked) is required'],
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
