# Message Component

<Editor>

```jsx
<MessageContext>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This is description',
        placement: 'top',
      });
    }}
  >
    Top
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This is description',
        placement: 'bottom',
      });
    }}
  >
    Bottom
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This is description',
        placement: 'top-left',
      });
    }}
  >
    Top Left
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This is description',
        placement: 'top-right',
      });
    }}
  >
    Top Right
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This is description',
        placement: 'bottom-left',
      });
    }}
  >
    Bottom Left
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This is description',
        placement: 'bottom-right',
      });
    }}
  >
    Bottom Right
  </Button>
  <Button
    variant="info"
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Info Message',
        description: 'This is description',
        type: 'info',
      });
    }}
  >
    Info Message
  </Button>
  <Button
    variant="warning"
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Warning Message',
        description: 'This is description',
        type: 'warning',
      });
    }}
  >
    Warning Message
  </Button>
  <Button
    variant="error"
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Error Message',
        description: 'This is description',
        type: 'error',
      });
    }}
  >
    Error Message
  </Button>
  <Button
    variant="success"
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Success Message',
        description: 'This is description',
        type: 'success',
      });
    }}
  >
    Success Message
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This message will delete after 5000 ms',
        timeOut: 5000,
      });
    }}
  >
    Time out : 5000
  </Button>
  <Button
    onClick={() => {
      const message = useMessage();
      message.show({
        title: 'Message Title',
        description: 'This message wont be deleted automatically',
        timeOut: 0,
      });
    }}
  >
    Time out : 0
  </Button>
</MessageContext>
```

</Editor>
