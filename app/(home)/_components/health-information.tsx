import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import React from 'react'
import Select from 'react-select';

interface HealthInfoVal{
    height:string,
    weight:string,
    smoking:Object,
    alcohol:Object
}

interface HealthInformationProps{
    onChangeFn:(val:string)=> void
}
const HealthInformation = ({onChangeFn}:HealthInformationProps) => {

    const initialValue:HealthInfoVal={
        height:'',
        weight:'',
        smoking:{},
        alcohol:{}
    }

    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValue,
        onSubmit:(values,action)=>{
            console.log('onSubmit',values)
        }
    });

    const smokingOption = [{ value: "never", label: "Never" },{ value: "occasional", label: "Occasional"},{ value: "regular", label: "Regular" }];
    const AlcoholOption = [{ value: "none", label: "None" },{ value: "occasional", label: "Occasional"},{ value: "regular", label: "Regular" }];



  return (
    <TabsContent value="health-information">
        <Card>
            <form>
                <CardHeader>
                    <CardTitle className='text-md'>Health Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Height</Label>
                        <Input id="name" name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.height} />
                    </div>

                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Weight</Label>
                        <Input id="name" name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.weight} />
                    </div>

                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Smoking Habits</Label>
                        <Select 
                        className=""
                        name="smoking"
                        id="smoking"
                        placeholder='Smoking Habits'
                        value={values.smoking}
                        onChange={selectedOption => {
                            let event = {target: {name: 'smoking', value: selectedOption}}
                            handleChange(event)
                        }}
                        onBlur={() => {
                            handleBlur({target: {name: 'smoking'}});
                        }}
                        options={smokingOption}
                        />
                    </div>

                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Alcohol Consumption</Label>
                        <Select 
                        className=""
                        name="alcohol"
                        id="alcohol"
                        placeholder='Alcohol Consumption'
                        value={values.smoking}
                        onChange={selectedOption => {
                            let event = {target: {name: 'alcohol', value: selectedOption}}
                            handleChange(event)
                        }}
                        onBlur={() => {
                            handleBlur({target: {name: 'alcohol'}});
                        }}
                        options={AlcoholOption}
                        />
                    </div>

                </CardContent>
                <CardFooter className='flex justify-between  gap-4 md:justify-end '>
                    <Button variant='outline' onClick={()=>onChangeFn('basic-information')}>Previous</Button>
                    <Button onClick={()=>onChangeFn('medical-history')}>Next</Button>
                </CardFooter>
            </form>
        </Card>
    </TabsContent>
  )
}

export default HealthInformation