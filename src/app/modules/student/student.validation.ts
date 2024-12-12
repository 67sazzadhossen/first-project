import { z } from 'zod';

// Guardian schema
const guardianSchema = z.object({
  fathersName: z.string().min(1, "Father's name is required"),
  fathersOccupation: z.string().min(1, "Father's occupation is required"),
  fathersContactNo: z.string().min(1, "Father's contact number is required"),
  mothersName: z.string().min(1, "Mother's name is required"),
  mothersOccupation: z.string().min(1, "Mother's occupation is required"),
  mothersContactNo: z.string().min(1, "Mother's contact number is required"),
});

// UserName schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .regex(
      /^[A-Z][a-z]*$/,
      'First name must be capitalized and in correct format',
    ), // Directly apply regex here
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .regex(/^[A-Za-z]+$/, 'Last name can only contain alphabetic characters'), // Apply regex here too
});

// LocalGuardian schema
const localGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().min(1, "Local guardian's address is required"),
});

// Student schema
const studentValidationSchema = z.object({
  id: z
    .string()
    .min(1, 'Student ID is required')
    .regex(/^\S*$/, 'Student ID cannot contain spaces')
    .refine(
      (val) => val.length > 0,
      'Student ID must be a valid non-empty string',
    ),
  name: userNameSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either "male" or "female"' }),
  }),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  email: z
    .string()
    .email('Email must be a valid email address')
    .min(1, 'Email is required'),
  contactNo: z.string().min(1, 'Contact number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({
      message:
        'Blood group must be one of the valid groups (A+, A-, B+, B-, AB+, AB-, O+, O-)',
    }),
  }),
  presentAdress: z.string().min(1, 'Present address is required'),
  parmanentAdress: z.string().min(1, 'Permanent address is required'),
  guardian: guardianSchema,
  locaGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked'], {
    errorMap: () => ({
      message: 'Account status must be either "active" or "blocked"',
    }),
  }),
});

export default studentValidationSchema;
