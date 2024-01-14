"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import axios from 'axios'


interface SymptomsVal{
    symptomsName:Object,
}

interface SymptomsProps{
    onChangeFn:(val:string)=> void;
    onPredict:(value:boolean)=>void,
}
const Symptoms = ({onChangeFn,onPredict}:SymptomsProps) => {
  const [symptomsDatas,setSymptomsDatas] = useState([])

  const initialValue:SymptomsVal={
    symptomsName:[],
  }

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
      initialValues:initialValue,
      onSubmit:(values,action)=>{
        onPredict(true)
        console.log("values",values)
        const requestData:Record<string, number> = {};

        values.symptomsName?.forEach(item => {
            requestData[item.value] = 1;
        });

        axios.post('http://127.0.0.1:8000/predict/', requestData)
        .then(response => {
            console.log('API Response:', response.data);
        })
        .catch(error => {
            console.error('API Error:', error);
        });



        // console.log('onSubmit',requestData)
      }
  });

  async function symptomData() {
    const response = await fetch(`/api/symptom`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setSymptomsDatas(result)
      return result;
  }
  
  useEffect(()=>{
    symptomData()
  },[])


  return (
    <TabsContent value="your-symptoms">
    <Card>
        <form onSubmit={handleSubmit}>
            <CardHeader>
                <CardTitle className='text-3xl'>Tell Us About Your Symptoms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">

                <div className="space-y-1 text-start mt-3">
                    <Label htmlFor="name ">Do you currently have any Symptoms  Select from below dropdown</Label>
                    <Select 
                    className=""
                    name="symptomsName"
                    id="symptomsName"
                    placeholder='Select Symptoms'
                    isSearchable
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={selectedOption => {
                        let event = {target: {name: 'symptomsName', value: selectedOption}}
                        handleChange(event)
                    }}
                    onBlur={() => {
                        handleBlur({target: {name: 'symptomsName'}});
                    }}
                    options={symptomsDatas}
                    />
                </div>
            </CardContent>
            <CardFooter className='flex justify-between  gap-4 md:justify-end '>
                <Button variant='outline' onClick={()=>onChangeFn('medical-history')}>Previous</Button>
                <Button type='submit'>Predict</Button>
            </CardFooter>
        </form>
    </Card>
</TabsContent>
  )
}

export default Symptoms