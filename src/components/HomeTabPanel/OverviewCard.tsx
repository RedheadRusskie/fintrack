import {
  Box,
  Card,
  Center,
  CircularProgress,
  Divider,
  Text,
} from "@chakra-ui/react";

type OverviewProps = {
  title: string;
  value: number | string | undefined;
  isLoading: boolean;
};

export const OverviewCard: React.FC<OverviewProps> = ({
  title,
  value,
  isLoading,
}) => {
  return (
    <Card border="1px" borderColor="gray.400" padding="2em" borderRadius="lg">
      <Text fontSize="2xl" color="gray.400" textTransform="uppercase">
        {title}
      </Text>
      <Divider />
      <Center padding="1em">
        {value && (
          <Box display="flex" alignItems="flex-end">
            <Text
              color="green.400"
              marginRight="0.25rem"
              lineHeight="normal"
              fontWeight="bold"
              fontSize="7xl"
            >
              {value}
            </Text>
            <Text
              fontWeight="extrabold"
              fontSize="2xl"
              color="green.600"
              alignSelf="flex-end"
            >
              CZK
            </Text>
          </Box>
        )}
        {isLoading && <CircularProgress isIndeterminate color="blue.400" />}
      </Center>
    </Card>
  );
};
