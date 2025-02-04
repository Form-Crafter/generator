import { Schema } from '@form-crafter/core'

export const employeeFormSchema: Schema = {
    id: 'employee-form',
    version: '1.0',
    layout: {},
    viewsTrees: {
        initialViewId: 'main-view',
        trees: {
            'main-view': [
                {
                    componentId: 'group-personal',
                    layout: { col: { default: 24 } },
                    children: [
                        { componentId: 'input-first-name', layout: { col: { default: 12 } } },
                        { componentId: 'input-last-name', layout: { col: { default: 12 } } },
                        { componentId: 'date-birth', layout: { col: { default: 12 } } },
                        { componentId: 'email', layout: { col: { default: 12 } } },
                        { componentId: 'input-salary', layout: { col: { default: 12 } } },
                    ],
                },
                {
                    componentId: 'group-work',
                    layout: { col: { default: 24 } },
                    children: [
                        { componentId: 'input-position', layout: { col: { default: 12 } } },
                        { componentId: 'select-department', layout: { col: { default: 12 } } },
                        { componentId: 'date-start', layout: { col: { default: 12 } } },
                    ],
                },
            ],
        },
    },
    componentsSchemas: {
        'group-personal': {
            meta: { id: 'group-personal', type: 'container', name: 'group' },
            properties: { title: 'Личные данные' },
        },
        'input-first-name': {
            meta: { id: 'input-first-name', type: 'base', name: 'input' },
            properties: { label: 'Имя', value: '' },
        },
        'input-last-name': {
            meta: { id: 'input-last-name', type: 'base', name: 'input' },
            properties: { label: 'Фамилия', value: '' },
        },
        'date-birth': {
            meta: { id: 'date-birth', type: 'base', name: 'date-input' },
            properties: { label: 'Дата рождения', value: '25.10.2005' },
        },
        email: {
            meta: { id: 'email', type: 'base', name: 'email' },
            properties: { label: 'Email' },
        },
        'group-work': {
            meta: { id: 'group-work', type: 'container', name: 'group' },
            properties: { title: 'Рабочая информация' },
        },
        'input-position': {
            meta: { id: 'input-position', type: 'base', name: 'input' },
            properties: { label: 'Должность' },
        },
        'input-salary': {
            meta: { id: 'input-salary', type: 'base', name: 'number-input' },
            properties: { label: 'Зарплата' },
        },
        'select-department': {
            meta: { id: 'select-department', type: 'base', name: 'select' },
            properties: {
                label: 'Отдел',
                options: [
                    { label: 'Разработка', value: 'dev' },
                    { label: 'Маркетинг', value: 'marketing' },
                    { label: 'Продажи', value: 'sales' },
                ],
            },
        },
        'date-start': {
            meta: { id: 'date-start', type: 'base', name: 'date-input' },
            properties: { label: 'Дата начала работы', value: '25.10.2005' },
        },
    },
    validationRules: [],
    relationsRules: [],
}
