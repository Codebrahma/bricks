# Table

Primitive checkbox component styled as Switch.

<Editor>

```jsx
<Table
  dataSource={[
    {
      number: 1,
      name: 'Praveen',
      marks: '50',
    },
    {
      number: 2,
      name: 'Kavin',
      marks: '20',
    },
    {
      number: 3,
      name: 'Rahul',
      marks: '80',
    },
    {
      number: 4,
      name: 'Dhanush',
      marks: '10',
    },
  ]}
  colNames={[
    { title: 'Number', key: 'number' },
    { title: 'Name', key: 'name' },
    {
      title: 'Marks',
      key: 'marks',
      render: columnData => {
        if (columnData >= 25) {
          return <p style={{ color: 'green', margin: 0 }}>{columnData}</p>;
        }
        return <p style={{ color: 'red', margin: 0 }}>{columnData}</p>;
      },
    },
  ]}
/>
```

</Editor>
