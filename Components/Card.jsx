import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Cardd = (props) => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default Cardd;