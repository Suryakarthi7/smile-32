import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';

function Home() {
    const name:string = '23';

    return (
      <>
      <Helmet>
        <title> Smile 32 </title>
        <meta name='description' content='Enamel. This is the protective outer layer of each tooth. Enamel helps shield your teeth from cavity-causing bacteria. Enamel is the hardest substance in the human body.Enamel. This is the protective outer layer of each tooth. Enamel helps shield your teeth from cavity-causing bacteria. Enamel is the hardest substance in the human body.Enamel. This is the protective outer layer of each tooth. Enamel helps shield your teeth from cavity-causing bacteria. Enamel is the hardest substance in the human body.Enamel. This is the protective outer layer of each tooth. Enamel helps shield your teeth from cavity-causing bacteria. Enamel is the hardest substance in the human body.'/>
      </Helmet>

      <p className='text-orange-500 text-[30px] mt-[50px] text-center'> Smile 32 Dental Care </p>
      
      <div className='text-center mt-2'>
      <p> Dental Clinic in Dharmapuri </p>
      <p> Opening at 9:00 AM tomorrow </p>
      </div>

<div className='flex justify-center items-center'>
<img src='https://www.gstatic.com/bfe/apps/website/img/h/48014034-toothbrush-1440.jpg' className='w-[80%] h-[300px] rounded-md mt-[50px] md:h-[400px] md:w-[90%] md:mt-[80px]'/>
</div>

<p className='text-center font-bold mt-16 text-[20px] underline underline-offset-8'> GALLERY </p>

<div className='md:grid md:grid-cols-3 md:gap-1 md:justify-items-center mt-16 flex justify-evenly'>
<div> 
<img src='https://lh3.googleusercontent.com/p/AF1QipPBHveMjkfDGGPnll3F0ZyWDJ8NjVMfDwLWmSSo=w768-h768-n-o-v1' className='md:w-[300px] md:h-[250px] rounded-md w-[250px]'/>
</div>

<div> 
<img src='https://lh3.googleusercontent.com/p/AF1QipM02ohm3FancvR4EXPlNV7KkbgV9FM6fx85xH28=w768-h768-n-o-v1' className='md:w-[300px] md:h-[250px] rounded-md w-[250px]'/>
</div>

<div> 
<img src='https://lh3.googleusercontent.com/p/AF1QipPJQvlAb_XNBmmT-NmP4olrVnGFNhheyAePTDRG=w768-h768-n-o-v1' className='hidden md:block md:w-[300px] md:h-[250px] rounded-md '/>
</div>
</div>

<div className='flex mt-[50px] md:mt-[100px]'>
<div className='pl-[32px] md:pl-[73px]'>
<p className='font-bold text-[20px] pl-1'> Contact </p>
<br />
<Button size='medium' variant="contained"> Call Now </Button>
<br />

</div>

<div className='pl-[50px] md:pl-[180px]'>
<p className='font-bold text-[20px]' data-cy='address'> Address </p>
<br />
<p> 53, Nethaji Bypass </p>
<p> Dharmapuri, Tamil Nadu 636701 </p>
<p> India </p>

</div>
</div>



      </>
    );
  }
  
  export default Home;