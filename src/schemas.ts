import { Schema } from './types';

export const personalSchema: Schema = {
  id: '3',
  version: '1.0',
  layout: {
    colsSpanPx: { default: 20 },
    rowsSpanPx: { default: 16 },
  },
  components: [
    {
      meta: {
        id: '0',
        componentType: 'text',
        formKey: '',
        layout: {
          col: {
            default: 24,
          },
        },
      },
      properties: {
        text: 'Header text',
      },
    },
    {
      meta: {
        id: '1',
        componentType: 'group',
        layout: {
          col: {
            default: 24,
          },
        },
      },
      components: [
        {
          meta: {
            id: '1-1',
            componentType: 'input-field',
            formKey: 'first-name',
            layout: {
              col: {
                default: 5,
                xxl: 12,
              },
            },
          },
          properties: {
            label: 'First Name',
            value: 'John',
            placeholder: 'Enter your first name',
          },
        },
        {
          meta: {
            id: '1-2',
            componentType: 'input-field',
            formKey: 'last-name',
            layout: {
              col: {
                default: 10,
                xxl: 12,
              },
            },
          },
          properties: {
            label: 'Last Name',
            value: 'Doe',
            placeholder: 'Enter your last name',
          },
        },
        {
          meta: {
            id: '1-3',
            componentType: 'email-field',
            formKey: 'email',
            layout: {
              col: {
                default: 24,
                sm: 2,
              },
            },
          },
          properties: {
            label: 'Email',
            value: 'johndoe@example.com',
            placeholder: 'Enter your email',
          },
        },
      ],
    },
    {
      meta: {
        id: '2',
        componentType: 'group',
        layout: {
          col: {
            default: 24,
          },
        },
      },
      components: [
        {
          meta: {
            id: '2-1',
            componentType: 'select-field',
            formKey: 'favorite-color',
            layout: {
              col: {
                default: 24,
              },
            },
          },
          properties: {
            label: 'Favorite Color',
            options: [
              { label: 'Red', value: 'red' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ],
            value: ['blue'],
            placeholder: 'Select your favorite color',
          },
        },
        {
          meta: {
            id: '2-2',
            componentType: 'checkbox-field',
            formKey: 'subscribe',
            layout: {
              col: {
                default: 24,
              },
            },
          },
          properties: {
            label: 'Subscribe to newsletter',
            options: [
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ],
            value: ['yes'],
          },
        },
        {
          meta: {
            id: '2-3',
            componentType: 'radio-field',
            formKey: 'sex',
            layout: {
              col: {
                default: 24,
              },
            },
          },
          properties: {
            label: 'Your sex',
            options: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ],
            value: 'male',
          },
        },
      ],
    },
    {
      meta: {
        id: '3',
        componentType: 'phone-field',
        formKey: 'phone',
        layout: {
          col: {
            default: 24,
          },
        },
      },
      properties: {
        label: 'Phone Number',
        value: '+1234567890',
        placeholder: 'Enter your phone number',
      },
    },
    {
      meta: {
        id: '6',
        componentType: 'multifield',
        layout: {
          col: { default: 24 },
        },
      },
      properties: {
        title: 'Contacts',
        groupTitle: 'Contact',
        template: [
          {
            meta: {
              componentType: 'input-field',
              formKey: 'name',
              layout: {
                col: { default: 12 },
              },
            },
            properties: {
              label: 'Name',
              value: '',
              placeholder: 'Enter your name',
            },
          },
          {
            meta: {
              componentType: 'phone-field',
              formKey: 'phone',
              layout: {
                col: { default: 12 },
              },
            },
            properties: {
              label: 'Phone Number',
              value: '',
              placeholder: 'Enter your phone number',
            },
          },
          {
            meta: {
              componentType: 'email-field',
              formKey: 'email',
              layout: {
                col: { default: 12 },
              },
            },
            properties: {
              label: 'Email',
              value: '',
              placeholder: 'Enter your email',
            },
          },
          {
            meta: {
              componentType: 'select-field',
              formKey: 'city',
              layout: {
                col: { default: 12 },
              },
            },
            properties: {
              label: 'City',
              options: [
                { label: 'New York', value: 'new_york' },
                { label: 'Los Angeles', value: 'los_angeles' },
                { label: 'Chicago', value: 'chicago' },
                { label: 'Houston', value: 'houston' },
                { label: 'Phoenix', value: 'phoenix' },
                { label: 'Philadelphia', value: 'philadelphia' },
                { label: 'San Antonio', value: 'san_antonio' },
                { label: 'San Diego', value: 'san_diego' },
                { label: 'Dallas', value: 'dallas' },
                { label: 'San Jose', value: 'san_jose' },
                { label: 'Austin', value: 'austin' },
                { label: 'Jacksonville', value: 'jacksonville' },
              ],
              value: [],
              placeholder: 'Select your city',
            },
          },
          {
            meta: {
              componentType: 'multifield',
              formKey: 'social-contacts',
              layout: {
                col: { default: 24 },
              },
            },
            properties: {
              title: 'Social Contacts',
              groupTitle: 'Social Contact',
              template: [
                {
                  meta: {
                    componentType: 'input-field',
                    formKey: 'social-name',
                    layout: {
                      col: { default: 12 },
                    },
                  },
                  properties: {
                    label: 'Social Platform',
                    value: '',
                    placeholder: 'Enter the platform name',
                  },
                },
                {
                  meta: {
                    componentType: 'input-field',
                    formKey: 'social-link',
                    layout: {
                      col: { default: 12 },
                    },
                  },
                  properties: {
                    label: 'Profile Link',
                    value: '',
                    placeholder: 'Enter the profile link',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      meta: {
        id: '4',
        componentType: 'textarea-field',
        formKey: 'article',
        layout: {
          col: {
            default: 24,
          },
        },
      },
      properties: {
        label: 'Article',
        value: 'This is a sample article.',
        placeholder: 'Enter your article',
      },
    },
    {
      meta: {
        id: '5',
        componentType: 'button',
        formKey: 'submit',
        layout: {
          col: {
            default: 24,
          },
        },
      },
      properties: {
        text: 'Submit',
        type: 'submit',
      },
    },
  ],
};
