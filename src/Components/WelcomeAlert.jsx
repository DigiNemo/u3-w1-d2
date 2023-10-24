import Alert from 'react-bootstrap/Alert';

function WelcomeAlert() {
  return (
    <Alert variant="success">
      <Alert.Heading>Welcome to Book Shop</Alert.Heading>
      <hr />
      <p className="mb-0">
      Hey, nice to see you
      </p>
    </Alert>
  );
}

export default WelcomeAlert;