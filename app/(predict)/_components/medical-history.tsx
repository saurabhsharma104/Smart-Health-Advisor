"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import React, { useEffect, useState ,ChangeEvent} from 'react'
import Select from 'react-select';
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from '@/components/ui/checkbox'
import { Note } from '@/components/Note'
import useClientData from '@/hooks/useClientData'

interface MedicalHistoryVal{
    curntDisease:Object,
}


interface MedicalHistoryProps{
    onChangeFn:(val:string)=> void,
    currentTab:string,
}
const MedicalHistory = ({onChangeFn,currentTab}:MedicalHistoryProps) => {
    const [diseaseData,setDiseaseDatas] = useState([])
    const [checkCurrentlyPreviously,setCheckCurrentlyPreviously] = useState<boolean>(false);

    const {setDiseaseData} = useClientData()

    useEffect(()=>{
        if(currentTab!='medical-history'){
            setCheckCurrentlyPreviously(false)
        }
    },[currentTab])

    const initialValue:MedicalHistoryVal={
        curntDisease:{},
    }

    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValue,
        onSubmit:(values,action)=>{
            onChangeFn('your-symptoms')
            const data:any=values?.curntDisease
            setDiseaseData(data)
        }
    });

    async function addComment() {
        const response = await fetch(`/api/disease`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        setDiseaseDatas(result)
        return result;
    }


    useEffect(()=>{
        if(checkCurrentlyPreviously){
            addComment()
        }
    },[checkCurrentlyPreviously])



  return (
    <TabsContent value="medical-history">
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle className='text-3xl'>Tell Us About Your Medical History</CardTitle>
                    {/* <Note/> */}
                </CardHeader>
                <CardContent className="space-y-2">


                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" onCheckedChange={()=>setCheckCurrentlyPreviously(!checkCurrentlyPreviously)} />
                    <label htmlFor="terms" className="text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Do you currently or previously have any diseases?
                    </label>
                    </div>

                    {checkCurrentlyPreviously==true && 
                    <>
                    <div className="space-y-1 text-start mt-3">
                        <Label htmlFor="name">Select Current Diseases</Label>
                        <Select 
                        className=""
                        name="curntDisease"
                        id="curntDisease"
                        placeholder='Smoking Habits'
                        isSearchable
                        value={values.curntDisease}
                        onChange={selectedOption => {
                            let event = {target: {name: 'curntDisease', value: selectedOption}}
                            handleChange(event)
                        }}
                        onBlur={() => {
                            handleBlur({target: {name: 'curntDisease'}});
                        }}
                        options={diseaseData}
                        />
                    </div>

                    <div className="space-y-1 text-start mt-4">
                        <Label htmlFor="name">List of Current Medications</Label>
                        <Textarea placeholder="Type List of Current Medications." />
                    </div>

                    </>}

                </CardContent>
                <CardFooter className='flex justify-between  gap-4 md:justify-end '>
                    <Button variant='outline' onClick={()=>onChangeFn('health-information')}>Previous</Button>
                    <Button type='submit'>Next</Button>
                </CardFooter>
            </form>
        </Card>
    </TabsContent>
  )
}

export default MedicalHistory