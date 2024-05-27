import { Box, Container, Flex, Heading, VStack, Text, IconButton } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={10} direction={{ base: "column", md: "row" }}>
        {/* Navigation Bar */}
        <VStack
          w={{ base: "100%", md: "20%" }}
          bg="blue.600"
          color="white"
          spacing={10}
          py={10}
          align="center"
        >
          <Heading size="md">Fitness Tracker</Heading>
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" />
          <IconButton aria-label="Dashboard" icon={<FaChartLine />} size="lg" />
          <IconButton aria-label="Profile" icon={<FaUser />} size="lg" />
        </VStack>

        {/* Main Content */}
        <Box w={{ base: "100%", md: "80%" }} p={10}>
          <Heading size="lg" mb={6}>Dashboard</Heading>
          <Text fontSize="xl">Track your fitness metrics here.</Text>
          {/* Placeholder for user input and data visualization */}
          <Box mt={10} p={5} borderWidth="1px" borderRadius="lg">
            <Text>Placeholder for user input and data visualization</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;