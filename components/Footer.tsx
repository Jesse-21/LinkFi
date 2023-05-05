import { Text } from "@chakra-ui/layout";

export const Footer = () => {
  return (
    // Set footer in the bottom of the page
    <Text
      position="absolute"
      bottom="0"
      width="100%"
      textAlign="center"
      color="gray.600"
      fontSize="sm"
      py={4}
    >
      Operated by{" "}
      <Text as="a" href="" color="gray.600">
       Thirdy Domains
      </Text>
    </Text>
  );
};
