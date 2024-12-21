import { Form } from 'antd';
import { validateCompanyData } from '../validation/company/validators';
import { validationMessages } from '../utils/validationMessages';

export const useFormValidation = () => {
  const [form] = Form.useForm();

  const validateMessages = {
    required: '${label} is required',
    types: {
      email: validationMessages.email,
      url: validationMessages.url,
      number: validationMessages.number.type('${label}'),
    },
    number: {
      min: validationMessages.number.min('${label}', '${min}'),
      max: validationMessages.number.max('${label}', '${max}'),
    },
    string: {
      min: validationMessages.minLength('${label}', '${min}'),
      max: validationMessages.maxLength('${label}', '${max}'),
    },
  };

  const validateForm = async () => {
    try {
      const values = await form.validateFields();
      await validateCompanyData(values);
      return values;
    } catch (error) {
      if (Array.isArray(error)) {
        // Custom validation errors
        error.forEach(err => {
          form.setFields([{
            name: ['_FORM_VALIDATION_'],
            errors: [err],
          }]);
        });
      }
      throw error;
    }
  };

  return {
    form,
    validateMessages,
    validateForm,
  };
};