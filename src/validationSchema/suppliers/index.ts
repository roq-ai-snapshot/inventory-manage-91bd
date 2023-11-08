import * as yup from 'yup';

export const supplierValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  country: yup.string().nullable(),
  zip_code: yup.string().nullable(),
});
