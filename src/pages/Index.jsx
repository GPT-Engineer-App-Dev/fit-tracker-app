import { Container, VStack, Box, Text, Flex, Spacer, IconButton, Heading } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">Fitness Tracker</Heading>
        <Spacer />
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        <IconButton aria-label="Dashboard" icon={<FaChartLine />} variant="ghost" color="white" />
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" color="white" />
      </Flex>
      <VStack spacing={4} align="stretch" p={4}>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading size="lg">Dashboard</Heading>
          <Text>Track your fitness metrics here.</Text>
          {/* Placeholder for fitness metrics */}
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading size="lg">User Input</Heading>
          <Text>Enter your fitness data here.</Text>
          {/* Placeholder for user input */}
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading size="lg">Data Visualization</Heading>
          <Text>Visualize your progress here.</Text>
          {/* Placeholder for data visualization */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;