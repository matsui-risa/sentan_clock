import "./App.css";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import Clock from "./assets/Clock";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Box style={{ fontsize: "100px" }}>
        <Clock />
        <Card align="center">
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              "View a summary of all your customers over the last month."
            </Text>
            <Img src="../../public/image/672664_s.jpg" boxSize="300px"></Img>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}

export default App;
