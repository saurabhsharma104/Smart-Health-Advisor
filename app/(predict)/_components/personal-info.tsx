"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TabsContent } from '@/components/ui/tabs'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import Select from "react-select";
import {useFormik, FormikProps} from "formik";
import { personalInfo } from '@/schema/personal-info'

interface personalInfoVal {
    firstName: string,
    gender:Object,
}

type PersonalInfoProps={
    onChangeFn:(val:string) => void,
    activate:(value:boolean)=>void,
}
const PersonalInfo = ({onChangeFn,activate}:PersonalInfoProps) => {
    const [dateofB, setDateofB] = React.useState<Date>()

    const initialValue:personalInfoVal={
        firstName:'',
        gender:{}
    }

    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValue,
        validationSchema:personalInfo,
        onSubmit:(values:any,action)=>{
            onChangeFn('health-information')
            activate(false)
            
            console.log('onSubmit',values)
        }
    });

    const genderOption= [{ value: "male", label: "Male" },{ value: "female", label: "Female"}];
    
  return (
    <TabsContent value="basic-information">
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle className='text-3xl'>Tell Us About Your Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                        {errors.firstName && touched.firstName && <p className='text-xs text-destructive'>Name Required</p>}
                    </div>

                    <div className="space-y-1 text-start">
                    <Label htmlFor="name">Date of birth</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !dateofB && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateofB ? format(dateofB, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={dateofB}
                                onSelect={setDateofB}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Gender</Label>
                        <Select 
                        className=""
                        name="gender"
                        id="gender"
                        placeholder='Select gender'
                        value={values.gender}
                        onChange={selectedOption => {
                            let event = {target: {name: 'gender', value: selectedOption}}
                            handleChange(event)
                        }}
                        onBlur={() => {
                            handleBlur({target: {name: 'gender'}});
                        }}
                        options={genderOption}
                        />
                        {errors.gender && touched.gender && <p className='text-xs text-destructive'>Gender Required</p>}
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between  gap-4 md:justify-end '>
                    <Button variant='outline' disabled>Previous</Button>
                    <Button type='submit'>Next</Button>
                </CardFooter>
            </form>
        </Card>
    </TabsContent>
  )
}

export default PersonalInfo