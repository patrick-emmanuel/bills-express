import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormInput } from '../../utils/customHooks';

export default ({ createBill }) => {

  const type = useFormInput('WATER');
  const amount = useFormInput('');
  const date = useFormInput('');

  const handleCreateBill = (e) => {
    e.preventDefault();
    createBill({
      variables: {
        type: type.value,
        amount: parseInt(amount.value),
        date: new Date(date.value)
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleCreateBill}>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input type="select" name="type" {...type}>
            <option value="WATER">Water</option>
            <option value="ELECTRICITY">Electricity</option>
            <option value="WASTE">Waste</option>
            <option value="INTERNET">Internet</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input type="number" min="100" name="amount" {...amount} />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input type="date" name="date" {...date} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
