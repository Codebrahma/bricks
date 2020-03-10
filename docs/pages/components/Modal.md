
# Modal

Modal can be created in two ways.

  - Using `Modal` component
  - Using `openModal` helper

## Using `Modal` Component

```react
const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Modal
        open={isOpen}
        header={<h3>Title</h3>}
        body={<p>This is body</p>}
        onClose={() => setIsOpen(false)}
      />
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
    </Box>
  );
};
```

```.jsx
  <ModalDemo />
```

### Props

| Prop                         | Type                   | Description                                                                                           |
| ---------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `open`                       | boolean                | Controls visibility of modal                                                                          |
| `onClose`                    | function               | Executed when modal is closed                                                                         |
| `dismissOnEscape`            | boolean                | Pressing `Esc` key should close the modal or not                                                      |
| `dismissOnBackdropClick`     | boolean                | Clicking modal backdrop should close the modal or not                                                 |
| `noCloseButton`              | boolean                | Controls the existence of close button                                                                |
| `header`                     | String or ReactElement | Header component for modal                                                                            |
| `body`                       | String or ReactElement | Body component for modal                                                                              |
| `footer`                     | String or ReactElement | Footer component for modal                                                                            |

## Using `openModal` helper method

```.jsx
  <Button
    onClick={() => openModal({
      header: (<h2>Hello!</h2>),
      body: (<h5>This modal is opened via 'openModal' method</h5>)
    })}
  >
    Open Modal
  </Button>
```