# Table

Primitive checkbox component styled as Switch.

<Editor>

```jsx
<Table
  dataSource={[
    {
      number: 1,
      name: 'Praveen',
      marks: '80',
    },
    {
      number: 2,
      name: 'Kavin',
      marks: '90',
    },  
    {
      number: 3,
      name: 'Rahul',
      marks: '100',
    },
    {
      number: 4,
      name: 'Dhanush',
      marks: '50',
    },
  ]}
  colNames={[
    {
      title: 'Number',
      key: 'number',
      sortable: true
    },
    { title: 'Name', key: 'name', sortable: true },
    { title: 'Marks', key: 'marks' }
  ]}
/>
```

</Editor>
