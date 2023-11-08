import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  location: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  reorder_level: yup.number().integer().nullable(),
  reorder_time: yup.number().integer().nullable(),
  quantity_in_reorder: yup.number().integer().nullable(),
  product_id: yup.string().nullable().required(),
});
