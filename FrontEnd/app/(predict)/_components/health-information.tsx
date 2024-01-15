import { Note } from '@/components/Note'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TabsContent } from '@/components/ui/tabs'
import useClientData from '@/hooks/useClientData'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import React from 'react'
import Select from 'react-select';

interface HealthInfoVal{
    alcohol:Object
}


interface HealthInformationProps{
    onChangeFn:(val:string)=> void
}
const HealthInformation = ({onChangeFn}:HealthInformationProps) => {
    const { setAlcoholData, setDiseaseData } = useClientData();

    const initialValue:HealthInfoVal={
        alcohol:{}
    }

    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValue,
        onSubmit:(values,action)=>{
            onChangeFn('medical-history')
            const data:any=values?.alcohol
            setAlcoholData(data)
        }
    });

    const smokingOption = [{ value: "never", label: "Never" },{ value: "occasional", label: "Occasional"},{ value: "regular", label: "Regular" }];
    const AlcoholOption = [{ value: "none", label: "None" },{ value: "occasional", label: "Occasional"},{ value: "regular", label: "Regular" }];



  return (
    <TabsContent value="health-information">
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle className='text-3xl'>Health Information</CardTitle>
                    {/* <Note/> */}
                </CardHeader>
                <CardContent className="space-y-2">
                    {/* <div className="space-y-1 text-start">
                        <Label htmlFor="name">Height (in cm)</Label>
                        <Input id="name" name='height' onChange={handleChange} onBlur={handleBlur} value={values.height} />
                    </div> */}

                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Weight (in kg)</Label>
                        <Input id="name" />
                    </div>

                    <div className="space-y-1 text-start">
                        <Label htmlFor="name">Smoking Habits</Label>
                        <Select 
                        className=""
                        id="smoking"
                        placeholder='Smoking Habits'
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
                        value={values.alcohol}
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
                    <Button type='submit'>Next</Button>
                </CardFooter>
            </form>
        </Card>
    </TabsContent>
  )
}

export default HealthInformation