import { Formik, Field, Form } from 'formik';
import { object, string } from 'yup';

let schema = object({
  searchString: string().required(),
});

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.searchString.trim());
  };

  return (
    <Formik initialValues={{ searchString: '' }} onSubmit={handleSubmit} validationSchema={schema}>
      <Form>
        <Field type="text" name="searchString" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
