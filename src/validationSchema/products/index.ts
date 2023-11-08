import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  product_supplier: yup.string().nullable(),
  category: yup.string().nullable(),
});
