import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import NextLink from 'next/link'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuth()

  const handleRegister = async () => {
    // Call the register function from the AuthContext
    await register(username, password)
  }

  return (
    <Box p={4} maxW="md" mx="auto" mt={20}>
      <Heading mb={4} textAlign="center">
        Register
      </Heading>
      <FormControl id="username" isRequired mb={4}>
        <FormLabel>Username</FormLabel>
        <Input type="text" onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleRegister} mb={4} w="100%">
        Register
      </Button>
      <Text textAlign="center">
        Already have an account?{' '}
        <Link
          as={NextLink}
          href="/login"
          passHref
          color="teal.500"
          cursor="pointer"
        >
          Login here
        </Link>
      </Text>
    </Box>
  )
}

export default Register
