import { object, string } from 'yup';
export const editProjectValidateSchema = object({
  body: object().shape(
    {
      title: string().when('description', {
        is: (description: string) => !description || description.length === 0,
        then: string().required('Title or description is required'),
      }),
      description: string().when('title', {
        is: (title: string) => !title || title.length === 0,
        then: string().required(
          'Title or description At least one of the fields is required'
        ),
      }),
    },
    [['title', 'description']]
  ),
  params: object({
    projectId: string().required('project id is required'),
  }),
});
