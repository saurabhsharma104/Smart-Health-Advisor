import * as Yup from 'yup';

export const personalInfo=Yup.object({
    firstName:Yup.string().required("First Name Required"),
    gender:Yup.object().required("Gender Required"),
})

