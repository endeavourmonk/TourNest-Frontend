import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Auth from './AuthHeader'
import ImageSlider from "./ImageSlider"
import { useState } from "react"

const UserSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is Required'}),
  email: z
    .string()
    .email({ message: 'Invalid email address'}),
  username: z
    .string()
    .min(1, {message: 'Username is required'}),
  password: z
    .string()
    .min(6, {message: 'Passowrd is too short'})
    .max(10, {message: "Password is too long"}),
  confirmPassword: z.string()
})
.refine((data) => data.password === data.confirmPassword, {
  message: 'Password do not match',
  path: ["confirmPassword"]
})

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  })

  const inputClass = 'rounded-none bg-slate-100 focus-visible:ring-0 focus-visible:ring-offset-0'

  const onSubmit = (data: z.infer<typeof UserSchema>) => {
    console.log(JSON.stringify(data, null, 2))
  }

  // for toggling password
  const togglePassword = () => {
    (!showPassword) ? setShowPassword(true) : setShowPassword(false)
  }
  // for toggle confrim password
  const toggleConfirmPassword = () => {
    (!showConfirmPassword) ? setShowConfirmPassword(true) : setShowConfirmPassword(false)
  }

  return (
    <div className="m-4 border-4 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block">
          <ImageSlider />
        </div>
        <div className="h-screen flex flex-col justify-center">
          <Auth type='signup' />
          <div className="text-left mx-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name= "name"
                            render={({ field }) => (
                                <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input className={`${inputClass}`} {...field} placeholder="Enter your name" />
                                        </FormControl>
                                        <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name= "email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className={`${inputClass}`}   {...field} placeholder="Enter your email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name= "username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input className={`${inputClass}`}   {...field} placeholder="Enter your username"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name= "password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                      <div className="relative">
                                          <Input 
                                            type={showPassword ? 'text' : 'password'}
                                            className={`${inputClass}`}  
                                            placeholder="Enter your password"
                                            {...field} 
                                          />
                                          <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                                            onClick={togglePassword}
                                          >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                          </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name= "confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                      <div className="relative">
                                        <Input 
                                          type={showConfirmPassword ? 'text' : 'password'}
                                          className={`${inputClass}`}  
                                          placeholder="Enter your password"
                                          {...field} 
                                        />
                                        <button
                                          type="button"
                                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                                          onClick={toggleConfirmPassword}
                                        >
                                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                          <Button type="submit" className="w-full sm:w-1/3 rounded-none mt-6">Signup</Button> 
                        </div>
                    </form>
                </Form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup