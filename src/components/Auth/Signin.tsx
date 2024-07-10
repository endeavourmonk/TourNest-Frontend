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

// user schema for login input
const UserSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address'}),
  password: z
    .string()
    .min(6, {message: 'Passowrd is too short'})
    .max(10, {message: "Password is too long"})
})

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
        email: '',
        password: ''
    }
  })

  const onSubmit = (data: z.infer<typeof UserSchema>) => {
    console.log(JSON.stringify(data, null, 2))
  }
  // for toggling password
  const togglePassword = () => {
    (!showPassword) ? setShowPassword(true) : setShowPassword(false)
  }
  return (
    <div className="m-4 border-4 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image slider component */}
        <div className="hidden md:block">
          <ImageSlider />
        </div>

        {/* signin component */}
        <div className="h-screen flex flex-col justify-center">
          <Auth type='signin' />
          <div className="text-left mx-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name= "email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter your email"/>
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
                        <div className="flex justify-center">
                          <Button type="submit" className="w-full md:w-1/3 rounded-none mt-6">Signin</Button> 
                        </div>
                    </form>
                </Form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin