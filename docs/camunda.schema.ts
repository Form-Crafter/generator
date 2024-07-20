const schema = {
  executionPlatform: 'Camunda Cloud',
  executionPlatformVersion: '8.5.0',
  exporter: {
    name: 'Camunda Web Modeler',
    version: '2152425',
  },
  schemaVersion: 16,
  id: 'Form_1chjsfu',
  components: [
    {
      label: 'Number',
      type: 'number',
      layout: {
        row: 'Row_1726tza',
        columns: null,
      },
      id: 'Field_043bhmg',
      key: 'number_04qf3',
      defaultValue: 324,
      decimalDigits: 12,
      increment: '12',
      disabled: true,
      serializeToString: false,
      validate: {
        min: 2,
        max: 3,
      },
    },
    {
      label: 'Text field',
      type: 'textfield',
      layout: {
        row: 'Row_1726tza',
        columns: null,
      },
      id: 'Field_0m69lga',
      key: 'textfield_7bf0wr',
    },
    {
      label: 'Checkbox',
      type: 'checkbox',
      layout: {
        row: 'Row_18kxi69',
        columns: null,
      },
      id: 'Field_0n3ovza',
      key: 'checkbox_cege55',
    },
    {
      values: [
        {
          label: 'Value',
          value: 'value',
        },
        {
          label: 'Value 2',
          value: 'value2',
        },
        {
          label: 'Value 3',
          value: 'value3',
        },
      ],
      label: 'Tag list',
      type: 'taglist',
      layout: {
        row: 'Row_18kxi69',
        columns: null,
      },
      id: 'Field_193n73f',
      key: 'taglist_ibpyfg',
      validate: {
        required: true,
      },
      description: 'sadf',
      disabled: true,
    },
    {
      label: 'Text area',
      type: 'textarea',
      layout: {
        row: 'Row_0rnwazi',
        columns: null,
      },
      id: 'Field_0d5zjq2',
      key: 'textarea_65249i',
    },
    {
      text: '# Text',
      label: 'Text view',
      type: 'text',
      layout: {
        row: 'Row_0rnwazi',
        columns: null,
      },
      id: 'Field_1nig54e',
      properties: {
        key1: 'value',
        key2: 'value',
      },
    },
    {
      action: 'submit',
      label: 'Button',
      type: 'button',
      layout: {
        row: 'Row_02m5tag',
        columns: null,
      },
      id: 'Field_1dsxl0r',
    },
    {
      components: [
        {
          label: 'Text field',
          type: 'textfield',
          layout: {
            row: 'Row_0guwg7h',
            columns: null,
          },
          id: 'Field_01vpcnl',
          key: 'textfield_c9h6ma',
        },
        {
          label: 'Text area',
          type: 'textarea',
          layout: {
            row: 'Row_0guwg7h',
            columns: null,
          },
          id: 'Field_1esnhx8',
          key: 'textarea_qlx53',
        },
      ],
      showOutline: true,
      label: 'Group',
      type: 'group',
      layout: {
        row: 'Row_1yoqrf8',
        columns: null,
      },
      id: 'Field_0u8dvu8',
    },
  ],
  type: 'default',
};
