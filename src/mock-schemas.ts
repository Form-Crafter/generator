// import { Schema } from "@form-crafter/core"

// export const personalSchema: Schema = {
//   id: '3',
//   version: '1.0',
//   layout: {
//     colsSpanPx: { default: 20 },
//     rowsSpanPx: { default: 16 },
//   },
//   viewsSchemas: {
//     initialViewId: 'view-1',
//     schemas: {
//       'view-1': [
//         {
//           componentId: '0',
//           layout: {
//             col: {
//               default: 24,
//             },
//           },
//         },
//         {
//           componentId: '1',
//           layout: {
//             col: {
//               default: 24,
//             },
//           },
//           children: [
//             {
//               componentId: '1-1',
//               layout: {
//                 col: {
//                   default: 5,
//                   xxl: 12,
//                 },
//               },
//             },
//             {
//               componentId: '1-1',
//               layout: {
//                 col: {
//                   default: 10,
//                   xxl: 12,
//                 },
//               },
//             },
//             {
//               componentId: '1-3',
//               layout: {
//                 col: {
//                   default: 24,
//                   sm: 2,
//                 },
//               },
//             },
//           ]
//         },
//         {
//           componentId: '2',
//           layout: {
//             col: {
//               default: 24,
//             },
//           },
//           children: [
//             {
//               componentId: '2-1',
//               layout: {
//                 col: {
//                   default: 24,
//                 },
//               },
//             },
//             {
//               componentId: '2-2',
//               layout: {
//                 col: {
//                   default: 24,
//                 },
//               },
//             },
//             {
//               componentId: '2-3',
//               layout: {
//                 col: {
//                   default: 24,
//                 },
//               },
//             },
//           ]
//         },
//         {
//           componentId: '3date',
//           layout: {
//             col: {
//               default: 8,
//             },
//           },
//         },
//         {
//           componentId: '3time',
//           layout: {
//             col: {
//               default: 8,
//             },
//           },
//         },
//         {
//           componentId: '6',
//           layout: {
//             col: { default: 24 },
//           },
//           children: [
//              {
//               componentId: '2-1',
//               layout: {
//                 col: {
//                   default: 24,
//                 },
//               },
//               children: [...]
//             },]
//            ],
//         }
//       ],
//       'view-2': [
//         {
//             componentId: '0',
//             layout: {
//               col: {
//                 default: 24,
//               },
//             },
//           },
//           {
//             componentId: '1',
//             layout: {
//               col: {
//                 default: 24,
//               },
//             },
//             children: [
//               {
//                 componentId: '1-1',
//                 layout: {
//                   col: {
//                     default: 5,
//                     xxl: 12,
//                   },
//                 },
//               },
//               {
//                 componentId: '1-1',
//                 layout: {
//                   col: {
//                     default: 10,
//                     xxl: 12,
//                   },
//                 },
//               },
//               {
//                 componentId: '1-3',
//                 layout: {
//                   col: {
//                     default: 24,
//                     sm: 2,
//                   },
//                 },
//               },
//             ]
//           },
//           {
//             componentId: '2',
//             layout: {
//               col: {
//                 default: 24,
//               },
//             },
//             children: [
//               {
//                 componentId: '2-1',
//                 layout: {
//                   col: {
//                     default: 24,
//                   },
//                 },
//               },
//               {
//                 componentId: '2-2',
//                 layout: {
//                   col: {
//                     default: 24,
//                   },
//                 },
//               },
//               {
//                 componentId: '2-3',
//                 layout: {
//                   col: {
//                     default: 24,
//                   },
//                 },
//               },
//             ]
//           },
//           {
//             componentId: '3time',
//             layout: {
//               col: {
//                 default: 24,
//               },
//             },
//           },
//           {
//             componentId: '6',
//             layout: {
//               col: { default: 12 },
//             },
//             children: [],
//           }
//       ],
//     },
//   },
//   componentsSchemas: {
//     '0': {
//       meta: {
//         id: '0',
//         componentType: 'text',
//         formKey: '',
//       },
//       properties: {
//         text: 'Header text',
//       },
//     },
//     '1': {
//       meta: {
//         id: '1',
//         componentType: 'group',
//       },
//     },
//     '1-1': {
//       meta: {
//         id: '1-1',
//         componentType: 'input',
//         formKey: 'first-name',
//       },
//       properties: {
//         label: 'First Name',
//         value: 'John',
//         placeholder: 'Enter your first name',
//       },
//       validation: [
//         {
//           ruleName: 'maxLength',
//           options: {
//             maxLength: 10,
//             message: 'Максимальная длинна {maxLength}',
//           },
//         },
//       ],
//     },
//     '1-2': {
//       meta: {
//         id: '1-2',
//         componentType: 'input',
//         formKey: 'last-name',
//       },
//       properties: {
//         label: 'Last Name',
//         value: 'Doe',
//         placeholder: 'Enter your last name',
//       },
//     },
//     '1-3': {
//       meta: {
//         id: '1-3',
//         componentType: 'email',
//         formKey: 'email',
//       },
//       properties: {
//         label: 'Email',
//         value: 'johndoe@example.com',
//         placeholder: 'Enter your email',
//       },
//     },
//     '2': {
//       meta: {
//         id: '2',
//         componentType: 'group',
//       },
//     },
//     '2-1': {
//       meta: {
//         id: '2-1',
//         componentType: 'select',
//         formKey: 'favorite-color',
//       },
//       properties: {
//         label: 'Favorite Color',
//         options: [
//           { label: 'Red', value: 'red' },
//           { label: 'Green', value: 'green' },
//           { label: 'Blue', value: 'blue' },
//         ],
//         value: ['blue'],
//         placeholder: 'Select your favorite color',
//       },
//     },
//     '2-2': {
//       meta: {
//         id: '2-2',
//         componentType: 'checkbox',
//         formKey: 'subscribe',
//       },
//       properties: {
//         label: 'Subscribe to newsletter',
//         options: [
//           { label: 'Yes', value: 'yes' },
//           { label: 'No', value: 'no' },
//         ],
//         value: ['yes'],
//       },
//     },
//     '2-3': {
//       meta: {
//         id: '2-3',
//         componentType: 'radio',
//         formKey: 'sex',
//       },
//       properties: {
//         label: 'Your sex',
//         options: [
//           { label: 'Male', value: 'male' },
//           { label: 'Female', value: 'female' },
//         ],
//         value: 'male',
//       },
//     },
//     '3date': {
//       meta: {
//         id: '3date',
//         componentType: 'date',
//         formKey: 'date',
//       },
//       properties: {
//         showMask: true,
//         label: 'Date',
//         value: '',
//       },
//     },
//     '3time': {
//       meta: {
//         id: '3time',
//         componentType: 'time',
//         formKey: 'time',
//       },
//       properties: {
//         showMask: true,
//         label: 'Time',
//         value: '',
//         placeholder: 'Enter your time',
//       },
//     },
//     '6': {
//       meta: {
//         id: '6',
//         componentType: 'multifield',
//       },
//       template: {
//         templateViews: {
//           'view-1': {
//             templateComponentId: 'field-group',
//             layout: {
//               col: { default: 24 },
//             },
//             children: [
//               {
//                 templateComponentId: 'field-name',
//                 layout: {
//                     col: { default: 12 },
//                 },
//               },
//               {
//                 templateComponentId: 'field-email',
//                 layout: {
//                     col: { default: 12 },
//                 },
//             },
//             {
//                 templateComponentId: 'field-select',
//                 layout: {
//                     col: { default: 24 },
//                 },
//             },
//             {
//               templateComponentId: 'field-multifield2',
//               layout: {
//                 col: { default: 24 },
//               },
//             }
//           ],
//           },
//             },
//             'view-2': [
//                 {
//                     templateComponentId: 'field-name',
//                     layout: {
//                         col: { default: 24 },
//                     },
//                 },
//                 {
//                     templateComponentId: 'field-email',
//                     layout: {
//                         col: { default: 24 },
//                     },
//                 },
//                 {
//                     templateComponentId: 'field-gender',
//                     layout: {
//                         col: { default: 6 },
//                     },
//                 },
//             ]
//         },
//         templateComponents: {
//           'field-name': {
//             meta: {
//               templateId: 'asedf',
//               componentType: 'input',
//               formKey: 'name',
//             },
//             properties: {
//               label: 'Name',
//               value: '',
//               placeholder: 'Enter your name',
//             },
//           },
//           'field-email': {
//             meta: {
//               componentType: 'email',
//               formKey: 'email',
//             },
//             properties: {
//               label: 'Email',
//               value: '',
//               placeholder: 'Enter your email',
//             },
//           },
//           'field-select': {
//             meta: {
//               componentType: 'select',
//               formKey: 'city',
//             },
//             properties: {
//               label: 'City',
//               options: [
//                 { label: 'New York', value: 'new_york' },
//                 { label: 'Los Angeles', value: 'los_angeles' },
//                 { label: 'Chicago', value: 'chicago' },
//                 { label: 'Houston', value: 'houston' },
//                 { label: 'Phoenix', value: 'phoenix' },
//                 { label: 'Philadelphia', value: 'philadelphia' },
//                 { label: 'San Antonio', value: 'san_antonio' },
//                 { label: 'San Diego', value: 'san_diego' },
//                 { label: 'Dallas', value: 'dallas' },
//                 { label: 'San Jose', value: 'san_jose' },
//                 { label: 'Austin', value: 'austin' },
//                 { label: 'Jacksonville', value: 'jacksonville' },
//               ],
//                 value: [],
//               placeholder: 'Select your city',
//             },
//           },
//           'field-gender': {
//             meta: {
//               componentType: 'radio',
//               formKey: 'gender',
//             },
//             properties: {
//                 options: [{key: 'Male', value: 'male'}, {key: 'Female', value: 'female'}],
//               label: 'Gender',
//               value: 'male',
//               placeholder: 'Select your gender',
//             },
//           },
//           'field-group': {
//             meta: {
//               componentType: 'group',
//               formKey: 'group',
//             },
//             properties: {
//               title: 'Example title',
//             },
//           },
//           // Добавляется в componentsData только после нажатия на кнопку. Это ок?
//           // А как быть с autocreate? Рекурсивно обойти и не должно быть проблем?
//           'field-multifield2': {
//             meta: {
//               componentType: 'multifield',
//               formKey: 'multifield2',
//             },
//             properties: {
//               title: 'multifield2',
//               groupTitle: 'multifield2',
//               viewsTemplates: {...},
//               templateComponentsData: {...},
//             }
//           },
//         }
//       },
//       properties: {
//         title: 'Contacts',
//         groupTitle: 'Contact',
//       },
//     },
//   },
// };
