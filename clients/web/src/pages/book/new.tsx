import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/dist/client/router';
import { NavBar } from '../../components/NavBar';
import {
  AddBookButtonContainer,
  AddBookPageContainer,
  AddBookPageContent,
  AddBookPageForm,
  AddBookPageInputs,
} from '../../styles/pages/AddBookPage';
import { withApollo } from '../../utils/withApollo';

import Home from '../../assets/icons/home-gray.svg';
import Plus from '../../assets/icons/plus.svg';
import User from '../../assets/icons/user.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  useCreateBookMutation,
  LoadBooksDocument,
} from '../../generated/graphql';
import { useSnackbar } from '../../hooks/useSnackbar';

export interface AddBookFormVariables {
  title: string;
  author: string;
  description: string;
}

function AddBookPage(): JSX.Element {
  const [createBook] = useCreateBookMutation();
  const { addSnackbar } = useSnackbar();
  const router = useRouter();

  const addBookForm = useFormik<AddBookFormVariables>({
    initialValues: {
      author: '',
      description: '',
      title: '',
    },

    validationSchema: Yup.object().shape({
      title: Yup.string().required('Name is required!'),
      author: Yup.string().required('Author is required!'),
      description: Yup.string().required('Description is required!'),
    }),

    onSubmit: async values => {
      const response = await createBook({
        variables: {
          data: values,
        },
        refetchQueries: [
          {
            query: LoadBooksDocument,
            variables: {
              limit: 24,
            },
          },
        ],
      });

      if (response.data) {
        addSnackbar({
          message: `${response.data.createBook.title} from ${response.data.createBook.author} was successfully created`,
        });

        router.push(`/book/${response.data.createBook._id}`);
      }

      if (response.errors) {
        addSnackbar({
          message: `An error ocurred trying to create ${values.title}`,
        });
      }
    },
  });

  return (
    <AddBookPageContainer>
      <AddBookPageContent>
        <AddBookPageForm onSubmit={addBookForm.handleSubmit}>
          <h1>Hello World</h1>

          <AddBookPageInputs>
            <Input
              defaultValue=""
              value={addBookForm.values.title}
              onChange={e => addBookForm.setFieldValue('title', e.target.value)}
              error={
                addBookForm.touched.title && addBookForm.errors.title
                  ? {
                      message: addBookForm.errors.title,
                    }
                  : undefined
              }
              label="Name"
            />

            <Input
              defaultValue=""
              value={addBookForm.values.author}
              onChange={e =>
                addBookForm.setFieldValue('author', e.target.value)
              }
              error={
                addBookForm.touched.author && addBookForm.errors.author
                  ? {
                      message: addBookForm.errors.author,
                    }
                  : undefined
              }
              label="Author"
            />

            <Input
              defaultValue=""
              value={addBookForm.values.description}
              onChange={e =>
                addBookForm.setFieldValue('description', e.target.value)
              }
              error={
                addBookForm.touched.description &&
                addBookForm.errors.description
                  ? {
                      message: addBookForm.errors.description,
                    }
                  : undefined
              }
              label="Description"
              format="textArea"
            />
          </AddBookPageInputs>

          <AddBookButtonContainer>
            <Button type="submit" text="Add new book" />
          </AddBookButtonContainer>
        </AddBookPageForm>
      </AddBookPageContent>

      <NavBar
        links={[
          {
            text: 'Home',
            icon: Home,
            selected: false,
            url: '/',
          },
          {
            text: 'Add Book',
            icon: Plus,
            selected: true,
          },
          {
            text: 'Profile',
            icon: User,
            selected: false,
          },
        ]}
      />
    </AddBookPageContainer>
  );
}

export default withApollo({ ssr: false })(AddBookPage);
